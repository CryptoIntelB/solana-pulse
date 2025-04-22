import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaBrain, FaBolt, FaBell } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { BsFillLightningFill } from 'react-icons/bs';
import { MdOutlineInsights } from 'react-icons/md';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d0c1d] to-[#191825] text-white px-6 py-10">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center flex flex-col items-center gap-6">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Solana Pulse AI
        </h1>
        
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

         <div> <h1 className="text-4xl md:text-5xl font-bold text-purple-400">
            Real-Time <span className="text-purple-400">On-Chain</span> Intelligence for Solana DeFi
          </h1>
           <div><p className="text-lg max-w-2xl text-gray-300 items-center justify-center gap-6">
          AI-powered insights, wallet tracking, and actionable alerts for pro traders and analysts. Built natively for the speed of Solana.
        </p></div>
          
        <div className="flex gap-4  items-center justify-center gap-6">
          <Button className="bg-purple-600 hover:bg-purple-700">Launch App</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Join Waitlist
          </Button>

          
        </div>
        
        </div> 
        

          <Image
            src="/f369d18a-724f-4c74-92b6-5ec15510f68c.png"
            alt="Dashboard Preview"
            width={400}
            height={300}
            className="rounded-xl shadow-xl"
          />
         
        </div>

       
        
      </section>

      {/* Why Section */}
      <section className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-[#1f1d2b] rounded-2xl flex flex-col items-center">
          <FaBrain className="text-3xl text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI-Powered Wallet Insights</h3>
          <p className="text-gray-400">Track top-performing wallets, insiders, and smart money in real-time.</p>
        </div>
        <div className="p-6 bg-[#1f1d2b] rounded-2xl flex flex-col items-center">
          <BsFillLightningFill className="text-3xl text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">LightningFast DeFi Analytics</h3>
          <p className="text-gray-400">Built on Solana, real-time transaction flow, DEX fracking, protocol activity.</p>
        </div>
        <div className="p-6 bg-[#1f1d2b] rounded-2xl flex flex-col items-center">
          <FaBell className="text-3xl text-teal-300 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Alpha Alerts, Not Noise</h3>
          <p className="text-gray-400">Curated alerts when something meaningfully happens on-chain – powered by AI.</p>
        </div>
      </section>

      {/* Pulseboard Section */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-[#1f1d2b] p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Live DeFi Pulseboard <span className="text-sm text-gray-400">(Mocked Component)</span></h3>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex justify-between"><span>TVL Movement</span><span>$456M <span className="text-green-400">+5.4%</span></span></div>
            <div className="flex justify-between"><span>Whale Net Flow</span><span>- $3.2M</span></div>
            <div className="flex justify-between"><span>Top Token Activity</span><span className="text-green-300">$JUP, PYTH, BONK</span></div>
            <div className="flex justify-between"><span>Most Active Wallet</span><span>0xabc...def</span></div>
            <p className="mt-3 text-gray-400">Major inflow into JUP staking pools by previously dormant wallet; LPs rebalancing toward Grea..</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li><strong>Wallet Intelligence:</strong> Follow real-time trades, token holdings, and protocol moves by elite wallets.</li>
              <li><strong>Ecosystem Dashboards:</strong> Protocol TVL, top movers, NFT activity, staking metrics, validator health.</li>
              <li><strong>AI Insight Engine:</strong> Auto-summarizes transactions, detects anomalies, suggests trade ideas.</li>
            </ul>
          </div>

          <div className="bg-[#1f1d2b] p-4 rounded-xl">
            <blockquote className="italic text-gray-400">“Finally, a tool that gives me the edge I need as a DeFi founder.”</blockquote>
            <p className="mt-2 text-sm text-purple-400">– Early Beta Tester</p>
          </div>

          <div className="flex gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">Launch App</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Get Early Access
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}