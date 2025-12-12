"use client";

import { LogOut, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function WalletInfo({ address, provider, onDisconnect }) {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shortenAddress = (addr) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
          <span className="font-bold">👛</span>
        </div>
        <div>
          <div className="font-medium">Connected Wallet</div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>{shortenAddress(address)}</span>
            <button
              onClick={copyAddress}
              className="p-1 hover:bg-gray-700 rounded"
              title="Copy address"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={onDisconnect}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors"
        title="Disconnect"
      >
        <LogOut size={16} />
        <span className="hidden sm:inline">Disconnect</span>
      </button>
    </div>
  );
}
