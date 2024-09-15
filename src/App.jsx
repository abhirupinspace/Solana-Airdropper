import React from 'react';
import './App.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from "./Airdrop";
import '@solana/wallet-adapter-react-ui/styles.css';

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/1UYn29UhQnHe7JDxR9-RdPR05YYoVQC3"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="space-y-4">
              <WalletMultiButton className="wallet-btn" />
              <WalletDisconnectButton className="wallet-btn" />
            </div>
            <div className="mt-8 text-4xl font-bold">AirDrop</div>
            <div className="mt-4">
              <Airdrop />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </main>
  );
}

export default App;
