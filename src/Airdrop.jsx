import { useWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import React from 'react';

export function Airdrop() {
    const wallet = useWallet();

    // Use the custom RPC endpoint directly in the Connection instance
    const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/1UYn29UhQnHe7JDxR9-RdPR05YYoVQC3");

    async function sendAirDropToUser() {
        if (!wallet.publicKey) {
            alert("Connect your wallet first!");
            return;
        }

        try {
            const airdropSignature = await connection.requestAirdrop(
                wallet.publicKey,
                1e9
            );
            await connection.confirmTransaction(airdropSignature);
            alert("Airdrop Successful!");
        } catch (error) {
            console.error("Airdrop failed", error);
            alert("Airdrop failed!");
        }
    }

    return (
        <div>
            <input type="text" placeholder="Enter Amount" />
            <button onClick={sendAirDropToUser}>Send Airdrop</button>
        </div>
    );
}
