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
  "Intelligente Gas- & Slippage-Optimierung",
  "Anti-Rug Schutz",
  "Automatischer Handel",
  "Token-Analyse",
  "Multi-Chain & Blitzschnell",
]

const tradingBots = [
  {
    id: "maestro",
    name: "Maestro Bot",
    description:
      "Multichain-Trading & Bridging (Houdini via Maestro). Auto-Snipe, Copy-Trading, Anti-MEV/Rug-Schutz, Call-Channel-Sniping, Wallet-Tools.",
    recommendation: "Top für Cross-Chain Bridging",
    tags: ["Multichain", "Bridge", "Copy-Trading", "Anti-MEV"],
    icon: Bot,
    featured: true,
    link: "https://t.me/maestro?start=r-schmied0815",
  },
  {
    id: "bullx",
    name: "BullX",
    description:
      "Multi-Chain via Telegram & Web. Schnelle Ausführung, Limit-Orders, Pump-Vision, Multi-Wallet, Live-Charts – ideal für aktives Trading.",
    recommendation: "Beste Limit-Orders & Charts",
    tags: ["Multi-Chain", "Limit-Orders", "Charts", "Web-Interface"],
    icon: TrendingUp,
    link: "https://t.me/bull_x_trading_bot?start=ref_01z8ia",
  },
  {
    id: "solsniperx",
    name: "SolSniper X",
    description:
      "Hochgeschwindigkeits-Sniping auf Solana. Auto-Kauf neuer Token, Rug-Filter, LP-Burn-Checks, Echtzeit-Logs – gebaut für frühe Einstiege.",
    recommendation: "Frühe SOL-Snipes",
    tags: ["Solana", "Sniping", "Rug-Filter", "Auto-Kauf"],
    icon: Target,
    link: "https://t.me/SolSniper_X_bot?start=ref_7SaiUk",
  },
  {
    id: "bonkbot",
    name: "BONKbot",
    description:
      "Blitzschnelles Solana-Trading mit Jupiter-Routing, MEV-Schutz, Limit-Orders, Auto-Käufen & Portfolio-Tracking.",
    recommendation: "Top-Wahl für Solana",
    tags: ["Solana", "Jupiter", "MEV-Schutz", "Portfolio"],
    icon: Zap,
    link: "https://t.me/BonkBot_Original_Bot?start=ref_zzyre",
  },
  {
    id: "blum",
    name: "Blum",
    description:
      "Multichain (TON, Solana, BNB). On-Chain-Sniping, Terminal-UI, Limit-Orders, Bridge, Wallet-Management, P&L-Reports.",
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
    recommendation: "Robustes Jupiter/Orca-Routing",
    tags: ["Solana", "Jupiter", "Copy-Trading", "DCA"],
    icon: Copy,
    link: "https://t.me/SolTradingBot?start=jOXoZ6gZY",
  },
  {
    id: "hector",
    name: "Hector Trojan Bot",
    description:
      "KI-gestützte Strategien, Hidden-Gem-Scanning, schnelle Ausführung in Telegram. Non-Custodial und Solana-fokussiert.",
    recommendation: "KI-gestütztes Gem-Scanning",
    tags: ["KI", "Hidden-Gems", "Solana", "Schnell"],
    icon: Brain,
    link: "https://t.me/hector_trojanbot?start=r-schmied0815",
  },
  {
    id: "tradewiz",
    name: "TradeWiz",
    description:
      "Ultra-schnelles Copy-Trading (<2s), Smart-Wallet-Erkennung, Regel-Automatisierung, DCA/Limit-Support.",
    recommendation: "Ultra-schnelles Copy-Trading",
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
      "Multichain-Bridging mit Houdini für optimierte Routen. Unterstützt Ethereum, Solana, BSC und mehr – ideal für Einsteiger und Profis.",
    recommendation: "Beste Cross-Chain-Lösung",
    tags: ["Multichain", "Houdini", "Non-Custodial", "Niedrige Gebühren"],
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
  { title: "Echtzeit-Marktanalyse", description: "Fortgeschrittene Candlestick-Charts und technische Indikatoren für präzises Market-Timing.", icon: BarChart3 },
  { title: "KI-gestützte Trading-Bots", description: "Nutzen Sie Machine-Learning-Algorithmen für automatisierte Handelsstrategien.", icon: Brain },
  { title: "Risikomanagement-Tools", description: "Stop-Loss-Orders, Positionsgrößen-Berechnung und Portfolio-Diversifikations-Features.", icon: Shield },
  { title: "DeFi-Integration", description: "Nahtloser Zugang zu DeFi-Protokollen und Yield-Farming-Möglichkeiten.", icon: Activity },
  { title: "Multi-Chain-Unterstützung", description: "Handeln Sie über Ethereum, Solana, BSC und viele weitere Blockchains.", icon: Target },
  { title: "Sichere Asset-Verwahrung", description: "Cold-Storage-Integration und fortgeschrittene Sicherheitsfeatures.", icon: Lock },
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
                <Link href="#tools" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">Trading-Tools</Link>
                <Link href="#bots" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">Trading-Bots</Link>
                <Link href="#cryptopulse" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">CryptoPulse Pro</Link>
                <Link href="/legal/impressum" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">Rechtliches</Link>
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
                  Die führende Trading-Plattform
                </Badge>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
                <span className="maestro-text-accent">Trade</span>{" "}
                <span className="maestro-text-glow">Smarter</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Professionelle Krypto-Trading-Tools, KI-gestützte Bots und fortschrittliche Analysen für moderne DeFi-Trader.
                Entdecken Sie institutionelle Lösungen für optimale Trading-Performance.
              </p>

              {/* Supported Chains */}
              <div className="mb-8">
                <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">Unterstützte Blockchains</p>
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
                <p className="mt-4 text-gray-400 text-sm">…und viele weitere Blockchains werden unterstützt.</p>
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
                Fortgeschrittene Kryptowährungs-Volatilitätsanalyse mit stundenbasierten Wahrscheinlichkeitsberechnungen. Ein umfassendes Tool für datengetriebene Trading-Entscheidungen basierend auf historischen Volatilitätsmustern.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="maestro-card rounded-2xl p-8 flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-6">Professionelle Analyse</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Marktintelligenz-Engine mit redundanten Datenströmen und Fehlerkorrektur</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Präzisions-Timing-Analysen zur Identifikation optimaler Ein- und Ausstiegspunkte</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Konfigurierbare Risikoparameter von konservativ bis aggressiv</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Cross-Asset-Volatilitätskartierung über wichtige Kryptowährungspaare</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full" />Berechnet stundengenau die Wahrscheinlichkeit von Preisveränderungen für Krypto-Trading oder Wetten</div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 bg-blue-500 rounded-full" />Sofortige Bereitstellung mit Plug-and-Play-Setup für unmittelbare Ergebnisse</div>
                </div>
                {/* CTA – jetzt mit mt-8 für harmonischen Abstand */}
                <div className={`${cardCtaWrap} mt-8 flex flex-col space-y-4`}>
                  <Link
                    href="https://platinumlabs.gumroad.com/l/CryptoPulsePro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnPrimary} w-full`}
                    aria-label="CryptoPulse Pro kaufen - Englische Version"
                  >
                    CryptoPulse Pro+Info kaufen (EN)
                  </Link>
                  <Link
                    href="https://platinumlabs.gumroad.com/l/CryptoPulseProdeutsch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnPrimary} w-full`}
                    aria-label="CryptoPulse Pro kaufen - Deutsche Version"
                  >
                    CryptoPulse Pro+Info kaufen (DE)
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Kern-Datenverarbeitung",
                    icon: Database,
                    text: "Lädt Daten von der Binance-API mit mehrfachem Endpunkt-Failover. Bereinigt automatisch fehlerhafte Datenpunkte und konvertiert Zeitstempel in lokale Zeitzonen für präzise Analysen.",
                  },
                  {
                    title: "Stündliche Volatilitätsanalyse",
                    icon: Clock,
                    text: "Berechnet prozentuale Preisveränderungen pro Stunde und identifiziert Bewegungen über konfigurierbaren Schwellenwerten (Standard 0,1%). Kategorisiert Bewegungen als 'Aufwärts' oder 'Abwärts' gruppiert nach Wochentag und Stunde.",
                  },
                  {
                    title: "Statistische Wahrscheinlichkeits-Engine",
                    icon: BarChart3,
                    text: "Ermittelt statistische Wahrscheinlichkeiten für Preisbewegungen basierend auf historischen Daten (1-12 Monate). Erstellt detaillierte Wahrscheinlichkeitsprofile für jede Wochentag-Stunden-Kombination mit präziser Genauigkeit.",
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
                    <div><strong>Timing-Strategien:</strong> Optimale Ein- und Ausstiegszeitpunkte identifizieren</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Risikomanagement:</strong> Volatile Handelsphasen vorhersagen</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Algorithmisches Trading:</strong> Datenbasis für automatisierte Systeme</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Portfolio-Optimierung:</strong> Zeitbasierte Umschichtungen nach Volatilitätsmustern</div>
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
                    <div><strong>Saisonalitätsanalyse:</strong> Wochentags- und zeitspezifische Trends</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Marktforschung:</strong> Volatilitätsmuster über Assets vergleichen</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Akademische Forschung:</strong> Studien zum Krypto-Marktverhalten</div>
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
                    <div><strong>Day-Trading:</strong> Handelszeiten für maximalen Profit optimieren</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div><strong>Swing-Trading:</strong> Wahrscheinliche Wendepunkte identifizieren</div>
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
                    Für Algorithmus-Entwickler
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Backtest mehrerer Parametersätze mit historischen Daten</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Statistische Vorteile in Marktmustern erkennen</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Analysen an spezifische Handelsstrategien anpassen</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Trading-Bots mit statistisch fundierten Entscheidungen entwickeln</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="maestro-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="mr-2 h-5 w-5 text-orange-400" />
                    Für aktive Trader
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Hochwahrscheinliche Trading-Zeitfenster mit präzisem Timing finden</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>Parameter für personalisiertes Risikomanagement anpassen</div>
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

        {/* Bitcoin Special Sektion */}
        <section className="py-20 maestro-section-alt" id="bitcoin-special">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 maestro-text-glow">
                Bitcoin Special: Ihr Weg zur digitalen Wertspeicherung
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tauchen Sie ein in unsere umfassende Serie über Bitcoin – von seiner Rolle als digitales Gold über die Technologie der Blockchain bis hin zu makroökonomischen Perspektiven und praktischen Spartipps.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
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
              ].map((post, index) => (
                <Card
                  key={index}
                  className="maestro-card h-full flex flex-col transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <CardHeader className="pb-4 flex-shrink-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white break-words">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400">{post.date}</p>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow mb-4">
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
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-lg"
                      >
                        Beitrag lesen
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-sm sm:text-base px-6 py-3 transition-all duration-300 ease-in-out hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  Mehr Bitcoin-Insights auf LinkedIn
                </Button>
              </a>
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
                  <li><Link href="#bitcoin-special" className="text-gray-400 hover:text-white transition-colors">Bitcoin Special</Link></li>
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
