"use client";

import { useEffect, useState } from 'react';
import { WalletConnectModal as WalletConnectModalSDK } from '@walletconnect/modal';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export default function WalletConnectModal({ isOpen, onClose, onConnect }) {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && projectId) {
      const walletConnectModal = new WalletConnectModalSDK({
        projectId,
        themeMode: 'dark',
        themeVariables: {
          '--wcm-accent-color': '#10B981',
          '--wcm-z-index': '9999'
        },
        chains: [1], // Ethereum
        mobileWallets: [
          {
            id: 'metamask',
            name: 'MetaMask',
            links: { native: 'metamask://', universal: 'https://metamask.app.link' }
          },
          {
            id: 'trust',
            name: 'Trust Wallet',
            links: { native: 'trust://', universal: 'https://link.trustwallet.com' }
          }
        ],
        desktopWallets: [
          {
            id: 'metamask',
            name: 'MetaMask',
            links: { native: 'metamask://', universal: 'https://metamask.io' }
          },
          {
            id: 'coinbase',
            name: 'Coinbase Wallet',
            links: { native: 'coinbase://', universal: 'https://go.cb-w.com' }
          }
        ]
      });

      setModal(walletConnectModal);

      // Event listeners
      walletConnectModal.subscribeModal((state) => {
        if (!state.open && isOpen) {
          onClose();
        }
      });
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (modal && isOpen) {
      modal.openModal();
    } else if (modal && !isOpen) {
      modal.closeModal();
    }
  }, [modal, isOpen]);

  return null; // Modal kendisi DOM'a inject ediliyor
}
