"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, TrendingUp, Target, Zap, Copy, Brain, Shield, Activity, BarChart3, FlaskConical, CircuitBoard, Sparkles, Lock } from "lucide-react"
import Link from "next/link"

// Type für tradingTools
type LucideIcon = React.ComponentType<{ className?: string; size?: number | string }>;

interface TradingTool {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function HomePage() {
  // Einheitlicher Button-Basisklassen mit btn-glow
  const btnBase = "btn-glow text-base md:text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all px-3 py-1"

  const tradingBots = [
    {
      id: "maestro",
      name: "Maestro Bot",
      description: "Multichain Trading & Bridging (Houdini via Maestro). Auto-Snipe, Copy-Trading, Anti-MEV/Rug Protection, Call-Channel-Sniping, Wallet-Tools.",
      recommendation: "Great for Cross-Chain Bridging",
      tags: ["Multichain", "Bridge", "Copy-Trading", "Anti-MEV"],
      icon: Bot,
      featured: true,
      link: "https://t.me/maestro?start=r-schmied0815",
    },
    {
      id: "bullx",
      name: "BullX",
      description: "Multi-Chain trading via Telegram & Web. Fast execution, Limit Orders, Pump-Vision, Multi-Wallet, Live-Charts — ideal for active trading.",
      recommendation: "Best for Limit Orders & Charts",
      tags: ["Multi-Chain", "Limit Orders", "Charts", "Web-Interface"],
      icon: TrendingUp,
      link: "https://t.me/bull_x_trading_bot?start=ref_01z8ia",
    },
    // ... (weitere Bots wie zuvor)
  ]

  const tradingTools: TradingTool[] = [
    { title: "Real-time Market Analysis", description: "Advanced candlestick charts and technical indicators for precise market timing.", icon: BarChart3 },
    { title: "AI-Powered Trading Bots", description: "Leverage machine learning algorithms for automated trading strategies.", icon: Brain },
    // ... (weitere Tools wie zuvor)
  ]

  const supportedChains = [
    { name: "Ethereum", icon: "⟠", color: "from-blue-400 to-blue-600" },
    { name: "Solana", icon: "◎", color: "from-purple-400 to-pink-600" },
    // ... (weitere Chains wie zuvor)
  ]

  const heroFeatures = [
    "Multi-Wallet Sniping",
    "Smart Gas & Slippage",
    "Anti-Rug Protection",
    "Auto-Trade",
    "Token Sniffer",
    "Multi-Chain & Lightning",
  ]

  return (
    <div className="circuit-bg min-h-screen">
      {/* Background Effects */}
      <div className="tech-lines pointer-events-none" />
      <div className="circuit-dots pointer-events-none" />
      <div className="floating-elements pointer-events-none" />
      <div className="circuit-path pointer-events-none" />
      <div className="glowing-orb pointer-events-none" />
      <div className="glowing-orb pointer-events-none" />
      <div className="glowing-orb pointer-events-none" />

      {/* Hero */}
      <section className="hero-bg py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Trade Smarter with PlatinumLabs</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Professional crypto trading tools and AI-powered bots for DeFi traders.
            </p>
            <Link href="#bots" className={btnBase}>
              Explore Bots
            </Link>
          </div>
        </div>
      </section>

      {/* Bots */}
      <section id="bots" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Premium Trading Bots</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingBots.map((bot) => (
              <Card key={bot.id} className="card-hover h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <bot.icon className="h-8 w-8 text-blue-400" />
                    <Badge className="bg-blue-500/10 text-blue-300">{bot.recommendation}</Badge>
                  </div>
                  <CardTitle className="text-white">{bot.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col grow space-y-4">
                  <CardDescription className="text-gray-300">{bot.description}</CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {bot.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-800 text-gray-200">{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex justify-center">
                    <Link href={bot.link} target="_blank" rel="noreferrer" className={btnBase}>
                      Launch on Telegram
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400">© 2025 PlatinumLabs. All rights reserved.</p>
      </footer>
    </div>
  );
}
