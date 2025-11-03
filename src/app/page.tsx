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
        {/* Hintergrund-Effekte */}
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
                <Link href="/legal/impressum" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">Rechtliches</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero-Bereich */}
        <section className="py-24 relative overflow-hidden">
          <div className="maestro-hero-bg absolute inset-0" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30 text-sm px-4 py-2">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Die führende Trading-Plattform
                </Badge>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                <span className="maestro-text-accent">Handeln</span>{" "}
                <span className="maestro-text-glow">intelligenter</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Professionelle Krypto-Trading-Tools, KI-gestützte Bots und erweiterte Analysen für den modernen DeFi-Trader.
                Entdecken Sie institutionelle Lösungen für optimale Trading-Leistung.
              </p>

              {/* Unterstützte Chains */}
              <div className="mb-8">
                <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">Unterstützte Chains</p>
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
                <p className="mt-4 text-gray-400 text-sm">…und viele weitere Chains werden unterstützt.</p>
              </div>

              {/* Feature-Liste */}
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
                Erweiterte Kryptowährungs-Volatilitätsanalyse mit stundenbasierten Wahrscheinlichkeitsberechnungen. Ein umfassendes Tool für datengestützte Handelsentscheidungen mit historischen Volatilitätsmustern.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="maestro-card rounded-2xl p-8 flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-6">Professionelle Analyse</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Marktintelligenz-Engine mit redundanten Datenströmen und Fehlerkorrektur</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Präzises Timing-Analyse für optimale Ein-/Ausstiegspunkte</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Konfigurierbare Risikoparameter von konservativ bis aggressiv</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Cross-Asset-Volatilitäts-Mapping über wichtige Krypto-Paare</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Berechnet die Wahrscheinlichkeit von Preisänderungen stundengenau</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Sofortige Bereitstellung mit Plug-and-Play-Setup</div>
                </div>
                {/* CTA – jetzt mit mt-8 für harmonischen Abstand */}
                <div className={`${cardCtaWrap} mt-8 flex flex-col space-y-4`}>
                  <Link
                    href="https://platinumlabs.gumroad.com/l/CryptoPulsePro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnPrimary} w-full`}
                    aria-label="Holen Sie sich CryptoPulse Pro"
                  >
                    CryptoPulse Pro+Info - Englische Version 
                  </Link>
                  <Link
                    href="https://platinumlabs.gumroad.com/l/CryptoPulseProdeutsch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnPrimary} w-full`}
                    aria-label="Holen Sie sich CryptoPulse Pro auf Deutsch"
                  >
                    CryptoPulse Pro+Info - Deutsche Version
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Kern-Datenverarbeitung",
                    icon: Database,
                    text: "Lädt Daten von der Binance-API mit mehreren Endpunkt-Failovers. Bereinigt automatisch fehlerhafte Datenpunkte und konvertiert Zeitstempel in lokale Zeitzonen für genaue Analysen.",
                  },
                  {
                    title: "Stündliche Volatilitätsanalyse",
                    icon: Clock,
                    text: "Berechnet prozentuale Preisänderungen pro Stunde und identifiziert Bewegungen über konfigurierbaren Schwellenwerten. Kategorisiert Bewegungen als 'Aufwärts' oder 'Abwärts' gruppiert nach Wochentag und Stunde.",
                  },
                  {
                    title: "Statistische Wahrscheinlichkeits-Engine",
                    icon: BarChart3,
                    text: "Bestimmt statistische Wahrscheinlichkeiten für Preisbewegungen basierend auf historischen Daten. Erstellt detaillierte Wahrscheinlichkeitsprofile für jede Wochentag-Stunde-Kombination mit präziser Genauigkeit.",
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
                    <div><strong>Timing-Strategien:</strong> Optimale Ein- und Ausstiegszeiten identifizieren</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Risikomanagement:</strong> Volatile Handelsphasen vorhersagen</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Algorithmisches Trading:</strong> Datengrundlage für automatisierte Systeme</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Portfolio-Optimierung:</strong> Zeitliche Neuzuteilungen basierend auf Volatilitätsmustern</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="maestro-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-blue-400" />
                    Marktanalyse
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Mustererkennung:</strong> Wiederkehrende Marktzyklen erkennen</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Saisonalitätsanalyse:</strong> Wochentag- und zeitbezogene Trends</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Marktforschung:</strong> Volatilitätsmuster über Assets vergleichen</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Akademische Forschung:</strong> Studien zum Kryptomarktverhalten</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="maestro-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="mr-2 h-5 w-5 text-purple-400" />
                    Praktische Anwendungen
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Day Trading:</strong> Handelszeiten für maximalen Profit optimieren</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Swing Trading:</strong> Wahrscheinliche Wendepunkte identifizieren</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>DCA-Strategien:</strong> Dollar-Cost-Averaging-Käufe timen</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Stop-Loss-Platzierung:</strong> Bessere Positionierung basierend auf Volatilitätserwartungen</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="maestro-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-cyan-400" />
                    Für Algorithmische Entwickler
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Backtest mehrerer Parametersätze mit historischen Daten</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Erkennen statistischer Vorteile in Marktmustern</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Anpassen der Analyse an spezifische Handelsstrategien</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Entwicklung von Trading-Bots mit statistisch fundierten Entscheidungen</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="maestro-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="mr-2 h-5 w-5 text-orange-400" />
                    Für Aktive Trader
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Finden Sie hochwahrscheinliche Handelsfenster mit präziser Timing</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Passen Sie Parameter für persönliches Risikomanagement an</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Exportieren Sie Daten für weitere Analysen und Strategieentwicklung</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Generieren Sie Marktberichte und Prognosen für fundierte Entscheidungen</div>
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
              <h2 className="text-4xl font-bold text-white mb-4 maestro-text-glow">Professionelle Trading-Tools</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ein umfassendes Set für strategisches Krypto-, DeFi- und Multi-Asset-Investing.
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
              <h2 className="text-4xl font-bold text-white mb-4 maestro-text-glow">Premium Trading-Bots</h2>
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
                        aria-label={`Starten Sie ${bot.name} auf Telegram`}
                      >
                        Auf Telegram starten
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
              <h3 className="text-3xl font-bold text-white mb-4 maestro-text-glow">Unsere Bridging-Bots</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Nahtloses Bridging von Assets über mehrere Blockchains mit spezialisierten, non-custodial Flows.
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
                        aria-label={`Starten Sie Bridging via ${bot.name}`}
                      >
                        Bridging starten
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="#bots" className={btnPrimary} aria-label="Entdecken Sie alle Trading-Bots">
                Alle Trading-Bots entdecken
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="maestro-footer border-t border-white/10 py-12 relative z-10">
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
                  <li><Link href="#cryptopulse" className="text-gray-400 hover:text-white transition-colors">CryptoPulse Pro</Link></li>
                  <li><Link href="#bots" className="text-gray-400 hover:text-white transition-colors">Trading-Bots</Link></li>
                  <li><Link href="#tools" className="text-gray-400 hover:text-white transition-colors">Trading-Tools</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
                <ul className="space-y-2">
                  <li><Link href="/legal/impressum" className="text-gray-400 hover:text-white transition-colors">Impressum</Link></li>
                  <li><Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">Datenschutz</Link></li>
                  <li><Link href="/legal/terms" className="text-gray-400 hover:text-white transition-colors">Nutzungsbedingungen</Link></li>
                  <li><Link href="/legal/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2025 PlatinumLabs. Alle Rechte vorbehalten. | Handeln Sie intelligenter</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
