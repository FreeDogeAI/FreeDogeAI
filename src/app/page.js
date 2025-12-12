import WalletConnectButton from '@/components/Wallet/WalletConnectButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">FreeDogeAI</h1>
        
        <div className="bg-gray-800 p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Connect Your Wallet</h2>
          <p className="mb-6">Connect your wallet to start earning DOGE with AI</p>
          
          {/* WALLET CONNECT BUTONU BURADA */}
          <WalletConnectButton />
        </div>
      </div>
    </main>
  )
}
