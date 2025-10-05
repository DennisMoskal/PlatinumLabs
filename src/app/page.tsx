import Head from "next/head"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FlaskConical,
  CircuitBoard,
  Bot,
  TrendingUp,
  Target,
  Zap,
  Copy,
  Brain,
  Shield,
  Activity,
  BarChart3,
  Lock,
  Sparkles,
  Clock,
  Database,
  Settings,
  FileText,
  Users,
} from "lucide-react"

/** Exakt derselbe Look wie der CryptoPulse-Button (Styles in global.css: a.btn-primary) */
const btnPrimary = "btn-primary inline-flex items-center justify-center select-none"

/** CTA-Wrapper (nur falls nötig – CardFooter übernimmt die Platzierung unten) */
const cardCtaWrap = "flex justify-center w-full"

const supportedChains = [
  { name: "Ethereum", icon: "⟠", color: "from-blue-400 to-blue-600" },
  { name: "Solana", icon: "◎", color: "from-purple-400 to-pink-600" },
  { name: "BSC", icon: "⬡", color: "from-yellow-400 to-orange-600" },
  { name: "Arbitrum", icon: "△", color: "from-blue-400 to-cyan-600" },
  { name: "Base", icon: "🔵", color: "from-blue-500 to-indigo-600" },
  { name: "Avalanche", icon: "🔺", color: "from-red-400 to-red-600" },
  { name: "TON", icon: "◈", color: "from-cyan-400 to-sky-600" },
]

const heroFeatures = [
  "Multi-Wallet Sniping",
  "Smart Gas & Slippage",
  "Anti-Rug Protection",
  "Auto-Trade",
  "Token Sniffer",
  "Multi-Chain & Lightning",
]

const tradingBots = [
  {
    id: "maestro",
    name: "Maestro Bot",
    description:
      "Multichain Trading & Bridging (Houdini via Maestro). Auto-Snipe, Copy-Trading, Anti-MEV/Rug Protection, Call-Channel-Sniping, Wallet-Tools.",
    recommendation: "Great for Cross-Chain Bridging",
    tags: ["Multichain", "Bridge", "Copy-Trading", "Anti-MEV"],
    icon: Bot,
    featured: true,
    link: "https://t.me/maestro?start=r-schmied0815",
  },
  {
    id: "bullx",
    name: "BullX",
    description:
      "Multi-chain via Telegram & Web. Fast execution, limit orders, Pump-Vision, multi-wallet, live charts — ideal for active trading.",
    recommendation: "Best for Limit Orders & Charts",
    tags: ["Multi-Chain", "Limit Orders", "Charts", "Web-Interface"],
    icon: TrendingUp,
    link: "https://t.me/bull_x_trading_bot?start=ref_01z8ia",
  },
  {
    id: "solsniperx",
    name: "SolSniper X",
    description:
      "High-speed sniping on Solana. Auto-buy new tokens, rug filter, LP burn checks, real-time logs — built for early entries.",
    recommendation: "Early SOL Snipes",
    tags: ["Solana", "Sniping", "Rug-Filter", "Auto-Buy"],
    icon: Target,
    link: "https://t.me/SolSniper_X_bot?start=ref_7SaiUk",
  },
  {
    id: "bonkbot",
    name: "BONKbot",
    description:
      "Lightning-fast Solana trading with Jupiter routing, MEV protection, limit orders, auto-buys & portfolio tracking.",
    recommendation: "Top Pick on Solana",
    tags: ["Solana", "Jupiter", "MEV-Protection", "Portfolio"],
    icon: Zap,
    link: "https://t.me/BonkBot_Original_Bot?start=ref_zzyre",
  },
  {
    id: "blum",
    name: "Blum",
    description:
      "Multichain (TON, Solana, BNB). On-chain sniping, Terminal UI, limit orders, bridge, wallet management, P&L reports.",
    recommendation: "TON-First Multichain Terminal",
    tags: ["TON", "Solana", "BNB", "Terminal-UI"],
    icon: Bot,
    link: "https://t.me/BlumCryptoTradingBot?start=fUWB8pIqKi",
  },
  {
    id: "soltradingbot",
    name: "SolTradingBot",
    description:
      "Solana-focused with Jupiter/Orca/Raydium integration, copy trading, limit/DCA orders, backup bots under heavy load.",
    recommendation: "Robust Jupiter/Orca Routing",
    tags: ["Solana", "Jupiter", "Copy-Trading", "DCA"],
    icon: Copy,
    link: "https://t.me/SolTradingBot?start=jOXoZ6gZY",
  },
  {
    id: "hector",
    name: "Hector Trojan Bot",
    description:
      "AI-powered strategies, hidden-gem scanning, fast execution in Telegram. Non-custodial and Solana-focused.",
    recommendation: "AI-Driven Gem Scanning",
    tags: ["AI", "Hidden-Gems", "Solana", "Fast"],
    icon: Brain,
    link: "https://t.me/hector_trojanbot?start=r-schmied0815",
  },
  {
    id: "tradewiz",
    name: "TradeWiz",
    description:
      "Ultra-fast copy trading (<2s), smart-wallet recognition, rule automation, DCA/limit support.",
    recommendation: "Ultra-Fast Copy Trading",
    tags: ["Copy-Trading", "Fast", "Smart-Wallet", "Automation"],
    icon: Shield,
    link: "https://t.me/TradeWiz_Solbot?start=r-WLRZWOBV5L",
  },
]

const bridgingBots = [
  {
    id: "maestro-bridge",
    name: "Maestro Bot",
    description:
      "Multichain bridging with Houdini for optimized routes. Supports Ethereum, Solana, BSC and more — ideal for beginners and professionals.",
    recommendation: "Best for Cross-Chain",
    tags: ["Multichain", "Houdini", "Non-Custodial", "Low Fees"],
    icon: Bot,
    featured: true,
    link: "https://t.me/maestro?start=r-schmied0815",
  },
  {
    id: "blum-bridge",
    name: "Blum Bot",
    description:
      "Bridging for TON, Solana, BNB and more. Terminal UI and wallet management for fast, simple transfers.",
    recommendation: "TON-First Bridge",
    tags: ["TON", "Solana", "BNB", "Terminal-UI"],
    icon: Activity,
    link: "https://t.me/BlumCryptoTradingBot?start=fUWB8pIqKi",
  },
]

const tradingTools = [
  { title: "Real-time Market Analysis", description: "Advanced candlestick charts and technical indicators for precise market timing.", icon: BarChart3 },
  { title: "AI-Powered Trading Bots", description: "Leverage machine learning algorithms for automated strategies.", icon: Brain },
  { title: "Risk Management Tools", description: "Stop-loss orders, position sizing, portfolio diversification features.", icon: Shield },
  { title: "DeFi Integration", description: "Seamless access to DeFi protocols and yield farming.", icon: Activity },
  { title: "Multi-Chain Support", description: "Trade across Ethereum, Solana, BSC, and more.", icon: Target },
  { title: "Secure Asset Storage", description: "Cold storage integration and advanced security.", icon: Lock },
]

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="gSAsxWmOFdGA-fzAf37lxqrJyMnFL-TiscNlX5FRriI" />
        <link rel="canonical" href="https://platinumlabs.vercel.app/" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="maestro-main-bg">
        {/* Background Effects */}
        <div className="maestro-tech-grid" />
        <div className="maestro-floating-particles" />
        <div className="maestro-circuit-overlay" />
        <div className="maestro-glow-orb" />
        <div className="maestro-glow-orb" />
        <div className="maestro-glow-orb" />

        {/* Navigation */}
        <nav className="maestro-nav border-b border-purple-500/20 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-3">
                <div className="maestro-logo-glow w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center gap-1">
                  <FlaskConical className="h-5 w-5 text-white" />
                  <CircuitBoard className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white maestro-text-glow">PlatinumLabs</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#tools" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">Trading Tools</Link>
                <Link href="#bots" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">Trading Bots</Link>
                <Link href="#cryptopulse" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">CryptoPulse Pro</Link>
                <Link href="/legal/impressum" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">Legal</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="maestro-hero-bg absolute inset-0" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30 text-sm px-4 py-2">
                  <Sparkles className="mr-2 h-4 w-4" />
                  The Leading Trading Platform
                </Badge>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                <span className="maestro-text-accent">Trade</span>{" "}
                <span className="maestro-text-glow">Smarter</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Professional crypto trading tools, AI-powered bots, and advanced analytics for the modern DeFi trader.
                Discover institutional-grade solutions for optimal trading performance.
              </p>

              {/* Supported Chains */}
              <div className="mb-8">
                <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">Supported Chains</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {supportedChains.map((c) => (
                    <div key={c.name} className="group">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${c.color} text-white/90 drop-shadow transition-all group-hover:scale-[1.03]`}>
                        <span className="mr-2">{c.icon}</span>
                        <span className="text-sm font-medium">{c.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-gray-400 text-sm">…and many more chains are supported.</p>
              </div>

              {/* Feature list */}
              <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-gray-200 text-base">
                {heroFeatures.map((f) => (
                  <li key={f} className="flex items-center">
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CryptoPulse Pro */}
        <section id="cryptopulse" className="py-20 maestro-section-alt">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 maestro-text-glow">CryptoPulse Pro</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced cryptocurrency volatility analysis with hour based probability calculations. A comprehensive tool for data-driven trading decisions using historical volatility patterns.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="maestro-card rounded-2xl p-8 flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-6">Professional-Grade Analysis</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Market Intelligence Engine with redundant data streams and error correction</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Precision Timing Analytics for optimal entry/exit point identification</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Configurable Risk Parameters from conservative to aggressive trading styles</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Cross-Asset Volatility Mapping across major cryptocurrency pairs</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Calculates the probability of price changes to the hour, for example for crypto trading or betting</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Instant Deployment with plug-and-play setup for immediate results</div>
                </div>
                {/* CTA – jetzt mit mt-8 für harmonischen Abstand */}
                <div className={`${cardCtaWrap} mt-8 flex flex-col space-y-4`}>
                  <Link
                    href="https://platinumlabs.gumroad.com/l/CryptoPulsePro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnPrimary} w-full`}
                    aria-label="Get CryptoPulse Pro"
                  >
                    Get CryptoPulse Pro - Cryptocurrency Volatility Analysis 
                  </Link>
                  <Link
                    href="https://platinumlabs.gumroad.com/l/CryptoPulseProdeutsch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnPrimary} w-full`}
                    aria-label="Hol dir CryptoPulse Pro auf Deutsch"
                  >
                    Hol dir CryptoPulse Pro und alle Infos auf Deutsch
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Core Data Processing",
                    icon: Database,
                    text: "Loads data from Binance API with multiple endpoint failover. Automatically cleans erroneous data points and converts timestamps to local timezones for accurate analysis.",
                  },
                  {
                    title: "Hourly Volatility Analysis",
                    icon: Clock,
                    text: "Calculates percentage price changes per hour and identifies movements above configurable thresholds (default 0.1%). Categorizes movements as 'Upward' or 'Downward' grouped by weekday and hour.",
                  },
                  {
                    title: "Statistical Probability Engine",
                    icon: BarChart3,
                    text: "Determines statistical probability for price movements based on historical data (1-12 months). Creates detailed probability profiles for each weekday-hour combination with precise accuracy.",
                  },
                ].map((b) => (
                  <Card key={b.title} className="maestro-card h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <b.icon className="mr-2 h-5 w-5 text-purple-400" />
                        {b.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300">
                      <p>{b.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="maestro-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-green-400" />
                    Trading & Investment
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Timing Strategies:</strong> Identify optimal entry and exit times</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Risk Management:</strong> Predict volatile trading phases</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Algorithmic Trading:</strong> Data foundation for automated systems</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Portfolio Optimization:</strong> Time reallocations based on volatility patterns</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="maestro-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-blue-400" />
                    Market Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Pattern Recognition:</strong> Detect recurring market cycles</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Seasonality Analysis:</strong> Weekday and time-specific trends</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Market Research:</strong> Compare volatility patterns across assets</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Academic Research:</strong> Crypto market behavior studies</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="maestro-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="mr-2 h-5 w-5 text-purple-400" />
                    Practical Applications
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Day Trading:</strong> Optimize trading hours for maximum profit</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Swing Trading:</strong> Identify probable turning points</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>DCA Strategies:</strong> Time Dollar-Cost-Averaging purchases</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Stop-Loss Placement:</strong> Better positioning based on volatility expectations</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="maestro-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-cyan-400" />
                    For Algorithmic Developers
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Backtest multiple parameter sets with historical data</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Recognize statistical advantages in market patterns</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Adapt analysis to specific trading strategies</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Develop trading bots with statistically-founded decisions</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="maestro-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="mr-2 h-5 w-5 text-orange-400" />
                    For Active Traders
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Find high-probability trading windows with precise timing</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Adjust parameters for personalized risk management</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Export data for further analysis and strategy development</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Generate market reports and forecasts for informed decisions</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="py-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 maestro-text-glow">Professional Trading Tools</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A comprehensive suite for strategic crypto, DeFi, and multi-asset investing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tradingTools.map((tool) => (
                <Card key={tool.title} className="maestro-card h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <tool.icon className="mr-3 h-6 w-6 text-purple-400" />
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p>{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bots */}
        <section id="bots" className="py-20 maestro-section-alt">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 maestro-text-glow">Premium Trading Bots</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tradingBots.map((bot) => (
                <Card
                  key={bot.id}
                  className={`maestro-card h-full flex flex-col transition-all duration-300 relative z-10 ${bot.featured ? "ring-2 ring-purple-500/40" : ""}`}
                >
                  <CardHeader className="relative z-20">
                    <div className="flex items-center justify-between">
                      <bot.icon className="h-8 w-8 text-purple-400" />
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        {bot.recommendation}
                      </Badge>
                    </div>
                    <CardTitle className="text-white">{bot.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col grow space-y-4 relative z-20">
                    <CardDescription className="text-gray-300">{bot.description}</CardDescription>
                    <div className="flex flex-wrap gap-1">
                      {bot.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/10 text-gray-200 text-xs border-white/10">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto">
                    <div className={cardCtaWrap}>
                      <Link
                        href={bot.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btnPrimary}
                        aria-label={`Launch ${bot.name} on Telegram`}
                      >
                        Launch on Telegram
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bridging */}
        <section className="py-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-4 maestro-text-glow">Our Bridging Bots</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Seamlessly bridge assets across multiple blockchains with specialized, non-custodial flows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {bridgingBots.map((bot) => (
                <Card
                  key={bot.id}
                  className={`maestro-card h-full flex flex-col transition-all duration-300 relative z-10 ${bot.featured ? "ring-2 ring-purple-500/40" : ""}`}
                >
                  <CardHeader className="relative z-20">
                    <div className="flex items-center justify-between">
                      <bot.icon className="h-8 w-8 text-purple-400" />
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        {bot.recommendation}
                      </Badge>
                    </div>
                    <CardTitle className="text-white">{bot.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col grow space-y-4 relative z-20">
                    <CardDescription className="text-gray-300">{bot.description}</CardDescription>
                    <div className="flex flex-wrap gap-1">
                      {bot.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-white/10 text-gray-200 text-xs border-white/10">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto">
                    <div className={cardCtaWrap}>
                      <Link
                        href={bot.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btnPrimary}
                        aria-label={`Start Bridging via ${bot.name}`}
                      >
                        Start Bridging
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="#bots" className={btnPrimary} aria-label="Discover All Trading Bots">
                Discover All Trading Bots
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="maestro-footer border-t border-white/10 py-12 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center gap-1">
                    <FlaskConical className="h-5 w-5 text-white" />
                    <CircuitBoard className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">PlatinumLabs</span>
                </div>
                <p className="text-gray-400">
                  Professional crypto trading tools and AI-powered solutions for the modern DeFi trader.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Products</h4>
                <ul className="space-y-2">
                  <li><Link href="#cryptopulse" className="text-gray-400 hover:text-white transition-colors">CryptoPulse Pro</Link></li>
                  <li><Link href="#bots" className="text-gray-400 hover:text-white transition-colors">Trading Bots</Link></li>
                  <li><Link href="#tools" className="text-gray-400 hover:text-white transition-colors">Trading Tools</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="/guide" className="text-gray-400 hover:text-white transition-colors">Trading Guide</Link></li>
                  <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/legal/impressum" className="text-gray-400 hover:text-white transition-colors">Impressum</Link></li>
                  <li><Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/legal/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link href="/legal/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2025 PlatinumLabs. All rights reserved. | Trade Smarter</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
