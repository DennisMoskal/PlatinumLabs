import { FlaskConical, CircuitBoard, FileText } from "lucide-react"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Reusing the same button styles as HomePage
const btnPrimary = "btn-primary inline-flex items-center justify-center select-none"

export default function TermsPage() {
  return (
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
            <Link href="/" className="flex items-center space-x-3">
              <div className="maestro-logo-glow w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center gap-1">
                <FlaskConical className="h-5 w-5 text-white" />
                <CircuitBoard className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white maestro-text-glow">PlatinumLabs</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#tools" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">Trading Tools</Link>
              <Link href="#bots" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">Trading Bots</Link>
              <Link href="#cryptopulse" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">CryptoPulse Pro</Link>
              <Link href="/legal/impressum" className="text-gray-300 hover:text-white transition-colors hover:drop-shadow">Legal</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30 text-sm px-4 py-2">
                <FileText className="mr-2 h-4 w-4" />
                Terms of Service
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 maestro-text-glow">Terms of Service</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Understand the terms governing your use of our platform and services.
              </p>
            </div>

            <Card className="maestro-card rounded-2xl border border-white/10">
              <CardContent className="p-8 space-y-8">
                <section>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white flex items-center">
                      <FileText className="mr-2 h-6 w-6 text-purple-400" />
                      Agreement to Terms
                    </CardTitle>
                  </CardHeader>
                  <p className="text-gray-300">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white flex items-center">
                      <FileText className="mr-2 h-6 w-6 text-purple-400" />
                      Risk Disclosure
                    </CardTitle>
                  </CardHeader>
                  <p className="text-gray-300 mb-4">
                    <strong>IMPORTANT: Cryptocurrency trading involves substantial risk of loss and is not suitable for every investor.</strong>
                  </p>
                  <p className="text-gray-300">
                    Trading cryptocurrencies involves significant risk and can result in the loss of your invested capital.
                  </p>
                </section>

                <section>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white flex items-center">
                      <FileText className="mr-2 h-6 w-6 text-purple-400" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <div className="text-gray-300">
                    <p>Dennis Moskal</p>
                    <p>Email: dennismoskal@yahoo.com</p>
                    <p>Phone: +49 172 205 8855</p>
                  </div>
                </section>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-gray-400 text-sm">
                    Last updated: January 2025
                  </p>
                </div>
              </CardContent>
            </Card>
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
  )
}
