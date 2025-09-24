import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, TrendingUp, Target, Zap, Copy, Brain, Shield, Activity, BarChart3, DollarSign, Lock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const tradingBots = [
    {
      id: 'maestro',
      name: 'Maestro Bot',
      description: 'Multichain Trading & Bridging (Houdini via Maestro). Auto-Snipe, Copy-Trading, Anti-MEV/Rug Protection, Call-Channel-Sniping, Wallet-Tools.',
      recommendation: 'Recommended for Bridge-Flows',
      tags: ['Multichain', 'Bridge', 'Copy-Trading', 'Anti-MEV'],
      icon: Bot,
      featured: true,
      telegramLink: 'https://t.me/Maestro'
    },
    {
      id: 'bullx',
      name: 'BullX',
      description: 'Multi-Chain Trading via Telegram & Web. Fast execution, Limit Orders, Pump-Vision, Multi-Wallet, Live-Charts – ideal for active trading.',
      tags: ['Multi-Chain', 'Limit Orders', 'Charts', 'Web-Interface'],
      icon: TrendingUp,
      telegramLink: 'https://t.me/BullXBot'
    },
    {
      id: 'solsniperx',
      name: 'SolSniper X',
      description: 'High-Speed Sniping on Solana. Auto-Buy new tokens, Rug-Filter, LP-Burn-Checks, Real-time Logs – focused on early entries.',
      tags: ['Solana', 'Sniping', 'Rug-Filter', 'Auto-Buy'],
      icon: Target,
      telegramLink: 'https://t.me/SolSniperX'
    },
    {
      id: 'bonkbot',
      name: 'BONKbot',
      description: 'Lightning-fast Solana Trading with Jupiter-Routing, MEV-Protection, Limit Orders, Auto-Buys and Portfolio-Tracking. Large community, high volume.',
      tags: ['Solana', 'Jupiter', 'MEV-Protection', 'Portfolio'],
      icon: Zap,
      telegramLink: 'https://t.me/BonkBot_bot'
    },
    {
      id: 'blum',
      name: 'Blum',
      description: 'Multichain Bot (TON, Solana, BNB). On-Chain Sniping, Terminal-UI, Limit-Orders, Bridge, Wallet-Management, P&L-Reports.',
      tags: ['TON', 'Solana', 'BNB', 'Terminal-UI'],
      icon: Bot,
      telegramLink: 'https://t.me/BlumCryptoBot'
    },
    {
      id: 'soltradingbot',
      name: 'SolTradingBot',
      description: 'Solana-focused with Jupiter/Orca/Radium integration, Copy-Trading, Limit/DCA-Orders and Backup-Bots for high network load.',
      tags: ['Solana', 'Jupiter', 'Copy-Trading', 'DCA'],
      icon: Copy,
      telegramLink: 'https://t.me/SolTradingBot'
    },
    {
      id: 'hector',
      name: 'Hector Trojan Bot',
      description: 'AI-powered strategies, Hidden-Gem-Scanning, fast execution directly in Telegram Bot. Non-custodial, Solana-focused.',
      tags: ['AI', 'Hidden-Gems', 'Solana', 'Fast'],
      icon: Brain,
      telegramLink: 'https://t.me/HectorTrojanBot'
    },
    {
      id: 'tradewiz',
      name: 'TradeWiz',
      description: 'Ultra-fast Copy-Trading (<2s), Smart-Wallet-Recognition, rule-based automation, DCA/Limit-Support.',
      tags: ['Copy-Trading', 'Fast', 'Smart-Wallet', 'Automation'],
      icon: Shield,
      telegramLink: 'https://t.me/TradeWizBot'
    }
  ]

  const tradingTools = [
    {
      title: "Real-time Market Analysis",
      description: "Advanced candlestick charts and technical indicators for precise market timing",
      icon: BarChart3
    },
    {
      title: "AI-Powered Trading Bots",
      description: "Leverage machine learning algorithms for automated trading strategies",
      icon: Brain
    },
    {
      title: "Risk Management Tools",
      description: "Stop-loss orders, position sizing, and portfolio diversification features",
      icon: Shield
    },
    {
      title: "DeFi Integration",
      description: "Seamless access to decentralized finance protocols and yield farming",
      icon: Activity
    },
    {
      title: "Multi-Chain Support",
      description: "Trade across Ethereum, Solana, BSC, and other major blockchain networks",
      icon: Target
    },
    {
      title: "Secure Asset Storage",
      description: "Cold storage integration and advanced security measures",
      icon: Lock
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-900/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">PlatinumLabs</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#tools" className="text-slate-300 hover:text-white transition-colors">Trading Tools</Link>
              <Link href="#bots" className="text-slate-300 hover:text-white transition-colors">Trading Bots</Link>
              <Link href="#cryptopulse" className="text-slate-300 hover:text-white transition-colors">CryptoPulse Pro</Link>
              <Link href="/legal/impressum" className="text-slate-300 hover:text-white transition-colors">Legal</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Trade
              </span>{" "}
              <span className="text-white">Smarter</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Professional crypto trading tools, AI-powered bots, and advanced analytics for the modern DeFi trader.
              Discover institutional-grade solutions for optimal trading performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                <Link href="#cryptopulse">
                  Explore CryptoPulse Pro <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800">
                <Link href="#bots">
                  View Trading Bots
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CryptoPulse Pro Section */}
      <section id="cryptopulse" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">CryptoPulse Pro</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Advanced cryptocurrency volatility analysis tool with customizable parameters for professional traders
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-6">Professional-Grade Analysis</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-slate-300">Adjustable timeframes: 1-12 months historical data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-slate-300">Custom thresholds: 0.1% to 10% price movements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-slate-300">Multi-asset support: BTC, ETH, SOL, XRP + easy expansion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-slate-300">Real Binance API data integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-slate-300">HTML & CSV export capabilities</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 w-full">
                    <Link href="https://moskaldennis.gumroad.com/l/CryptoPulsePro" target="_blank">
                      Get CryptoPulse Pro - $197 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-purple-500" />
                    Statistical Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Identify high-probability trading windows with precise statistical analysis.
                    Get detailed probability tables broken down by weekday and hour.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-blue-500" />
                    Customizable Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Adjust analysis parameters to match your trading strategy.
                    Set custom thresholds and probability filters for optimal results.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="mr-2 h-5 w-5 text-purple-500" />
                    Professional Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Generate professional HTML reports and CSV exports for further analysis.
                    Perfect for algorithmic developers and active traders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Tools Section */}
      <section id="tools" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Trading Tools</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive suite of trading tools designed for strategic crypto, DeFi, and multi-asset investing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradingTools.map((tool, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <tool.icon className="mr-3 h-6 w-6 text-purple-500" />
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Bots Section */}
      <section id="bots" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Premium Trading Bots</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the most advanced Telegram trading bots for sniping, copy trading, and automated DeFi strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tradingBots.map((bot) => (
              <Card key={bot.id} className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 ${bot.featured ? 'ring-2 ring-purple-500/50' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <bot.icon className="h-8 w-8 text-purple-500" />
                    {bot.featured && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white">{bot.name}</CardTitle>
                  {bot.recommendation && (
                    <Badge variant="outline" className="text-blue-400 border-blue-400 w-fit">
                      {bot.recommendation}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-300">
                    {bot.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {bot.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    <Link href={bot.telegramLink} target="_blank">
                      Launch Bot <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bridging Bots Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">Our Bridging Bots</h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Seamlessly bridge assets across multiple blockchains with our specialized bridging solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Maestro Bot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Multichain bridging with Houdini integration for optimized routes. Supports Ethereum, Solana, BSC and more.
                  Ideal for beginners and professionals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">Multichain</Badge>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">Houdini</Badge>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">Non-Custodial</Badge>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">Low Fees</Badge>
                </div>
                <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  <Link href="https://t.me/Maestro" target="_blank">
                    Start Bridging via Maestro <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Blum Bot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Bridging for TON, Solana, BNB and more. With Terminal-UI and Wallet-Management for easy transfers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">TON</Badge>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">Solana</Badge>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">BNB</Badge>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">Terminal-UI</Badge>
                </div>
                <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  <Link href="https://t.me/BlumCryptoBot" target="_blank">
                    Start Bridging via Blum <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              <Link href="#bots">
                Discover All Trading Bots <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">PlatinumLabs</span>
              </div>
              <p className="text-slate-400">
                Professional crypto trading tools and AI-powered solutions for the modern DeFi trader.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><Link href="#cryptopulse" className="text-slate-400 hover:text-white transition-colors">CryptoPulse Pro</Link></li>
                <li><Link href="#bots" className="text-slate-400 hover:text-white transition-colors">Trading Bots</Link></li>
                <li><Link href="#tools" className="text-slate-400 hover:text-white transition-colors">Trading Tools</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/guide" className="text-slate-400 hover:text-white transition-colors">Trading Guide</Link></li>
                <li><Link href="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/support" className="text-slate-400 hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/legal/impressum" className="text-slate-400 hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/legal/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/legal/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/legal/cookies" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 PlatinumLabs. All rights reserved. | Trade Smarter
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
