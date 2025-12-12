"use client";

import { useState, useEffect } from 'react';
import { Wallet } from 'lucide-react';
import WalletConnectModal from './WalletConnectModal';
import WalletInfo from './WalletInfo';

export default function WalletConnectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState(null);
  const [provider, setProvider] = useState(null);

  // Cüzdan bağlantısını kontrol et
  useEffect(() => {
    const savedAddress = localStorage.getItem('freedogeai_wallet_address');
    if (savedAddress) {
      setConnectedAddress(savedAddress);
    }
  }, []);

  const handleConnect = async () => {
    setIsModalOpen(true);
  };

  const handleDisconnect = () => {
    setConnectedAddress(null);
    setProvider(null);
    localStorage.removeItem('freedogeai_wallet_address');
  };

  const handleWalletConnect = (address, prov) => {
    setConnectedAddress(address);
    setProvider(prov);
    localStorage.setItem('freedogeai_wallet_address', address);
    setIsModalOpen(false);
  };

  if (connectedAddress) {
    return (
      <WalletInfo 
        address={connectedAddress}
        provider={provider}
        onDisconnect={handleDisconnect}
      />
    );
  }

  return (
    <>
      <button
        onClick={handleConnect}
        className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Wallet size={20} />
        Connect Wallet
      </button>

      {isModalOpen && (
        <WalletConnectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConnect={handleWalletConnect}
        />
      )}
    </>
  );
}
