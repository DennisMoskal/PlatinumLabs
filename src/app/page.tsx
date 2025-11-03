import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  Users,
  ChevronRight,
} from "lucide-react"

const btnPrimary = "inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-lg"

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
  "Intelligentes Gas & Slippage",
  "Anti-Rug Schutz",
  "Auto-Trading",
  "Token Sniffer",
  "Multi-Chain & Blitzschnell",
]

const tradingBots = [
  {
    id: "maestro",
    name: "Maestro Bot",
    description:
      "Multichain Trading & Bridging (Houdini via Maestro). Auto-Snipe, Copy-Trading, Anti-MEV/Rug Schutz, Call-Channel-Sniping, Wallet-Tools.",
    recommendation: "Ideal für Cross-Chain Bridging",
    tags: ["Multichain", "Bridge", "Copy-Trading", "Anti-MEV"],
    icon: Bot,
    featured: true,
    link: "https://t.me/maestro?start=r-schmied0815",
  },
  {
    id: "bullx",
    name: "BullX",
    description:
      "Multi-chain via Telegram & Web. Schnelle Ausführung, Limit Orders, Pump-Vision, Multi-Wallet, Live-Charts — perfekt für aktives Trading.",
    recommendation: "Beste für Limit Orders & Charts",
    tags: ["Multi-Chain", "Limit Orders", "Charts", "Web-Interface"],
    icon: TrendingUp,
    link: "https://t.me/bull_x_trading_bot?start=ref_01z8ia",
  },
  {
    id: "solsniperx",
    name: "SolSniper X",
    description:
      "Hochgeschwindigkeits-Sniping auf Solana. Auto-Kauf neuer Tokens, Rug-Filter, LP-Burn-Checks, Echtzeit-Logs — gebaut für frühe Einstiege.",
    recommendation: "Frühe SOL Snipes",
    tags: ["Solana", "Sniping", "Rug-Filter", "Auto-Kauf"],
    icon: Target,
    link: "https://t.me/SolSniper_X_bot?start=ref_7SaiUk",
  },
  {
    id: "bonkbot",
    name: "BONKbot",
    description:
      "Blitzschnelles Solana-Trading mit Jupiter-Routing, MEV-Schutz, Limit Orders, Auto-Käufe & Portfolio-Tracking.",
    recommendation: "Top Wahl auf Solana",
    tags: ["Solana", "Jupiter", "MEV-Schutz", "Portfolio"],
    icon: Zap,
    link: "https://t.me/BonkBot_Original_Bot?start=ref_zzyre",
  },
  {
    id: "blum",
    name: "Blum",
    description:
      "Multichain (TON, Solana, BNB). On-Chain-Sniping, Terminal-UI, Limit Orders, Bridge, Wallet-Management, P&L-Reports.",
    recommendation: "TON-First Multichain Terminal",
    tags: ["TON", "Solana", "BNB", "Terminal-UI"],
    icon: Bot,
    link: "https://t.me/BlumCryptoTradingBot?start=fUWB8pIqKi",
  },
  {
    id: "soltradingbot",
    name: "SolTradingBot",
    description:
      "Solana-fokussiert mit Jupiter/Orca/Raydium-Integration, Copy-Trading, Limit/DCA-Orders, Backup-Bots bei hoher Last.",
    recommendation: "Robustes Jupiter/Orca Routing",
    tags: ["Solana", "Jupiter", "Copy-Trading", "DCA"],
    icon: Copy,
    link: "https://t.me/SolTradingBot?start=jOXoZ6gZY",
  },
  {
    id: "hector",
    name: "Hector Trojan Bot",
    description:
      "KI-gestützte Strategien, Hidden-Gem-Scanning, schnelle Ausführung in Telegram. Non-custodial und Solana-fokussiert.",
    recommendation: "KI-gestütztes Gem Scanning",
    tags: ["KI", "Hidden-Gems", "Solana", "Schnell"],
    icon: Brain,
    link: "https://t.me/hector_trojanbot?start=r-schmied0815",
  },
  {
    id: "tradewiz",
    name: "TradeWiz",
    description:
      "Ultra-schnelles Copy-Trading (<2s), Smart-Wallet-Erkennung, Regel-Automatisierung, DCA/Limit-Support.",
    recommendation: "Ultra-schnelles Copy Trading",
    tags: ["Copy-Trading", "Schnell", "Smart-Wallet", "Automatisierung"],
    icon: Shield,
    link: "https://t.me/TradeWiz_Solbot?start=r-WLRZWOBV5L",
  },
]

const bridgingBots = [
  {
    id: "maestro-bridge",
    name: "Maestro Bot",
    description:
      "Multichain Bridging mit Houdini für optimierte Routen. Unterstützt Ethereum, Solana, BSC und mehr — ideal für Anfänger und Profis.",
    recommendation: "Beste für Cross-Chain",
    tags: ["Multichain", "Houdini", "Non-Custodial", "Geringe Gebühren"],
    icon: Bot,
    featured: true,
    link: "https://t.me/maestro?start=r-schmied0815",
  },
  {
    id: "blum-bridge",
    name: "Blum Bot",
    description:
      "Bridging für TON, Solana, BNB und mehr. Terminal-UI und Wallet-Management für schnelle, einfache Transfers.",
    recommendation: "TON-First Bridge",
    tags: ["TON", "Solana", "BNB", "Terminal-UI"],
    icon: Activity,
    link: "https://t.me/BlumCryptoTradingBot?start=fUWB8pIqKi",
  },
]

const tradingTools = [
  { title: "Echtzeit-Marktanalyse", description: "Erweiterte Candlestick-Charts und technische Indikatoren für präzises Market Timing.", icon: BarChart3 },
  { title: "KI-gestützte Trading-Bots", description: "Nutzen Sie Machine-Learning-Algorithmen für automatisierte Strategien.", icon: Brain },
  { title: "Risikomanagement-Tools", description: "Stop-Loss-Orders, Positionsgrößen, Portfolio-Diversifizierungs-Features.", icon: Shield },
  { title: "DeFi-Integration", description: "Nahtloser Zugang zu DeFi-Protokollen und Yield Farming.", icon: Activity },
  { title: "Multi-Chain-Unterstützung", description: "Handeln Sie über Ethereum, Solana, BSC und mehr.", icon: Target },
  { title: "Sichere Asset-Aufbewahrung", description: "Cold-Storage-Integration und erweiterte Sicherheit.", icon: Lock },
]

const bitcoinPosts = [
  {
    title: "Bitcoin ist das digitale Gold. Aber warum?",
    description: "Entdecken Sie, warum Bitcoin als Wertspeicher Gold übertrumpft – durch absolute Knappheit und digitale Übertragbarkeit.",
    url: "https://www.linkedin.com/pulse/ausgabe-1-bitcoin-ist-das-digitale-gold-aber-warum-dennis-moskal-grbrf",
    date: "23. November 2025",
  },
  {
    title: "Der Architekt der Dezentralität: Was ist eine Blockchain?",
    description: "Verstehen Sie, wie die Blockchain Bitcoins Knappheit und Zensurresistenz durch Proof-of-Work und Nodes sichert.",
    url: "https://www.linkedin.com/pulse/ausgabe-2-der-architekt-dezentralit%C3%A4t-ist-eine-dennis-moskal-9wa8f",
    date: "23. November 2025",
  },
  {
    title: "Die Rolle von Geld: Warum Bitcoin das beste Gut ist",
    description: "Erfahren Sie, warum Bitcoin als Hard Money die Schwächen des Fiat-Systems überwindet und Kaufkraft sichert.",
    url: "https://www.linkedin.com/pulse/ausgabe-3-die-rolle-von-geld-warum-bitcoin-das-beste-gut-moskal-bpd7f",
    date: "23. November 2025",
  },
  {
    title: "MicroStrategy vs. Bitcoin: Wie funktioniert $MSTR?",
    description: "Analyse der genialen Kapitalmarktstrategie von MicroStrategy, die $MSTR zur Bitcoin-Akkumulationsmaschine macht.",
    url: "https://www.linkedin.com/pulse/ausgabe-4-microstrategy-vs-bitcoin-wie-funktioniert-mstr-moskal-ihnef",
    date: "23. November 2025",
  },
  {
    title: "Trump und der Bitcoin: Wird BTC zur Reserve in den USA?",
    description: "Wie Trumps Politik Bitcoin zur strategischen Reserve der USA machen könnte und was das bedeutet.",
    url: "https://www.linkedin.com/pulse/ausgabe-5-trump-und-der-bitcoin-wird-zur-reserve-usa-dennis-moskal-i4nbf",
    date: "23. November 2025",
  },
  {
    title: "Bin ich zu spät für Bitcoin? 5 Gründe, warum wir sagen: Nein!",
    description: "Warum Bitcoins Marktkapitalisierung zeigt, dass wir noch am Anfang stehen – und wie Sie profitieren können.",
    url: "https://www.linkedin.com/pulse/ausgabe-6-bin-ich-zu-sp%C3%A4t-f%C3%BCr-bitcoin-5-gr%C3%BCnde-warum-wir-moskal-ctfcf",
    date: "23. November 2025",
  },
  {
    title: "Echter Insidertipp: Die Bitcoin-Kostenfalle einfach erklärt",
    description: "Vermeiden Sie hohe Gebühren durch strategisches UTXO-Management beim Bitcoin-Sparen.",
    url: "https://www.linkedin.com/pulse/7echter-insidertipp-die-bitcoin-kostenfalle-einfach-erkl%C3%A4rt-moskal-7i1bf",
    date: "23. November 2025",
  },
  {
    title: "Bitcoin als disruptive Kraft: Unendliches Wachstum ohne Schaden",
    description: "Warum Bitcoins reiner monetärer Zweck die Wirtschaft entlastet und es einzigartig macht.",
    url: "https://www.linkedin.com/pulse/8-bitcoin-als-disruptive-kraft-warum-es-das-einzige-asset-moskal-btacf",
    date: "23. November 2025",
  },
]

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900">
      {/* Navigation */}
      <nav className="border-b border-purple-500/20 backdrop-blur-sm sticky top-0 z-50 bg-gray-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center gap-1">
                <FlaskConical className="h-5 w-5 text-white" />
                <CircuitBoard className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">PlatinumLabs</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tools" className="text-gray-300 hover:text-white transition-colors">Trading Tools</a>
              <a href="#bots" className="text-gray-300 hover:text-white transition-colors">Trading Bots</a>
              <a href="#bitcoin-special" className="text-gray-300 hover:text-white transition-colors">Bitcoin Special</a>
              <a href="#cryptopulse" className="text-gray-300 hover:text-white transition-colors">CryptoPulse Pro</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30 text-sm px-4 py-2">
                <Sparkles className="mr-2 h-4 w-4" />
                Die führende Trading-Plattform
              </Badge>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Trade</span>{" "}
              <span className="text-white">smarter</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Professionelle Krypto-Trading-Tools, KI-gestützte Bots und erweiterte Analysen für den modernen DeFi-Trader.
              Entdecken Sie institutionelle Lösungen für optimale Trading-Leistung.
            </p>

            {/* Supported Chains */}
            <div className="mb-8">
              <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">Unterstützte Chains</p>
              <div className="flex flex-wrap justify-center gap-4">
                {supportedChains.map((c) => (
                  <div key={c.name} className="group">
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${c.color} text-white/90 transition-all group-hover:scale-105`}>
                      <span className="mr-2">{c.icon}</span>
                      <span className="text-sm font-medium">{c.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-400 text-sm">…und viele weitere Chains werden unterstützt.</p>
            </div>

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

      {/* Bitcoin Special Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800" id="bitcoin-special">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-300 border border-orange-500/30 text-sm px-4 py-2 mb-4">
              <TrendingUp className="mr-2 h-4 w-4" />
              Bildungsinhalte
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Bitcoin Special: Ihr Weg zur digitalen Wertspeicherung
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Tauchen Sie ein in unsere umfassende Serie über Bitcoin – von seiner Rolle als digitales Gold über die Technologie der Blockchain bis hin zu makroökonomischen Perspektiven und praktischen Spartipps.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {bitcoinPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 flex flex-col h-full"
              >
                <CardHeader className="pb-4 flex-shrink-0">
                  <h3 className="text-lg font-semibold text-white break-words leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-4">
                    {post.description}
                  </p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-auto"
                    aria-label={`LinkedIn-Beitrag lesen: ${post.title}`}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-medium text-sm transition-all duration-300 hover:from-orange-700 hover:to-yellow-700 hover:scale-105 hover:shadow-lg"
                    >
                      Beitrag lesen
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.linkedin.com/in/unservergleichsportalde"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Besuchen Sie unser LinkedIn-Profil für weitere Beiträge"
            >
              <Button
                className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-medium px-8 py-4 text-base transition-all duration-300 hover:from-orange-700 hover:to-yellow-700 hover:scale-105 hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                Mehr Tipps auf LinkedIn entdecken
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CryptoPulse Pro */}
      <section id="cryptopulse" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">CryptoPulse Pro</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Erweiterte Kryptowährungs-Volatilitätsanalyse mit stundenbasierten Wahrscheinlichkeitsberechnungen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <Card className="bg-gray-800/50 border-gray-700 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Professionelle Analyse</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Marktintelligenz-Engine mit redundanten Datenströmen</div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Präzises Timing-Analyse für optimale Ein-/Ausstiegspunkte</div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Konfigurierbare Risikoparameter</div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Cross-Asset-Volatilitäts-Mapping</div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Stundenbasierte Wahrscheinlichkeitsberechnungen</div>
                <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Sofortige Bereitstellung</div>
              </div>
              <div className="mt-8 space-y-4">
                <a
                  href="https://platinumlabs.gumroad.com/l/CryptoPulsePro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnPrimary} w-full`}
                >
                  CryptoPulse Pro - Englische Version
                </a>
                <a
                  href="https://platinumlabs.gumroad.com/l/CryptoPulseProdeutsch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnPrimary} w-full`}
                >
                  CryptoPulse Pro - Deutsche Version
                </a>
              </div>
            </Card>

            <div className="space-y-6">
              {[
                {
                  title: "Kern-Datenverarbeitung",
                  icon: Database,
                  text: "Lädt Daten von der Binance-API mit mehreren Endpunkt-Failovers. Bereinigt automatisch fehlerhafte Datenpunkte.",
                },
                {
                  title: "Stündliche Volatilitätsanalyse",
                  icon: Clock,
                  text: "Berechnet prozentuale Preisänderungen pro Stunde und identifiziert Bewegungen über konfigurierbaren Schwellenwerten.",
                },
                {
                  title: "Statistische Wahrscheinlichkeits-Engine",
                  icon: BarChart3,
                  text: "Bestimmt statistische Wahrscheinlichkeiten für Preisbewegungen basierend auf historischen Daten.",
                },
              ].map((b) => (
                <Card key={b.title} className="bg-gray-800/50 border-gray-700">
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
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professionelle Trading-Tools</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ein umfassendes Set für strategisches Krypto-, DeFi- und Multi-Asset-Investing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradingTools.map((tool) => (
              <Card key={tool.title} className="bg-gray-800/50 border-gray-700">
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
      <section id="bots" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Premium Trading-Bots</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tradingBots.map((bot) => (
              <Card
                key={bot.id}
                className={`bg-gray-800/50 border-gray-700 flex flex-col ${bot.featured ? "ring-2 ring-purple-500/40" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <bot.icon className="h-8 w-8 text-purple-400" />
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs">
                      {bot.recommendation}
                    </Badge>
                  </div>
                  <CardTitle className="text-white">{bot.name}</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col grow space-y-4">
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
                    <a
                      href={bot.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnPrimary}
                      aria-label={`Starten Sie ${bot.name} auf Telegram`}
                    >
                      Auf Telegram starten
                    </a>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bridging */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">Unsere Bridging-Bots</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nahtloses Bridging von Assets über mehrere Blockchains mit spezialisierten, non-custodial Flows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {bridgingBots.map((bot) => (
              <Card
                key={bot.id}
                className={`bg-gray-800/50 border-gray-700 flex flex-col ${bot.featured ? "ring-2 ring-purple-500/40" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <bot.icon className="h-8 w-8 text-purple-400" />
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs">
                      {bot.recommendation}
                    </Badge>
                  </div>
                  <CardTitle className="text-white">{bot.name}</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col grow space-y-4">
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
                    <a
                      href={bot.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnPrimary}
                      aria-label={`Starten Sie Bridging via ${bot.name}`}
                    >
                      Bridging starten
                    </a>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#bots" className={btnPrimary} aria-label="Entdecken Sie alle Trading-Bots">
              Alle Trading-Bots entdecken
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center gap-1">
                  <FlaskConical className="h-5 w-5 text-white" />
                  <CircuitBoard className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">PlatinumLabs</span>
              </div>
              <p className="text-gray-400">
                Professionelle Krypto-Trading-Tools und KI-gestützte Lösungen für den modernen DeFi-Trader.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Produkte</h4>
              <ul className="space-y-2">
                <li><a href="#cryptopulse" className="text-gray-400 hover:text-white transition-colors">CryptoPulse Pro</a></li>
                <li><a href="#bots" className="text-gray-400 hover:text-white transition-colors">Trading-Bots</a></li>
                <li><a href="#tools" className="text-gray-400 hover:text-white transition-colors">Trading-Tools</a></li>
                <li><a href="#bitcoin-special" className="text-gray-400 hover:text-white transition-colors">Bitcoin Special</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li><a href="/legal/impressum" className="text-gray-400 hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="/legal/terms" className="text-gray-400 hover:text-white transition-colors">Nutzungsbedingungen</a></li>
                <li><a href="/legal/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie-Richtlinie</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 PlatinumLabs. Alle Rechte vorbehalten. | Handeln Sie intelligenter</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
