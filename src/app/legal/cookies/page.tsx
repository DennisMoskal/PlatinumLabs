import { FlaskConical, CircuitBoard, Cookie } from "lucide-react"
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

export default function CookiesPage() {
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
                <Cookie className="mr-2 h-4 w-4" />
                Cookie Policy
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 maestro-text-glow">Cookie Policy</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Learn how we use cookies to enhance your experience and improve our services.
              </p>
            </div>

            <Card className="maestro-card rounded-2xl border border-white/10">
              <CardContent className="p-8 space-y-8">
                <section>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white flex items-center">
                      <Cookie className="mr-2 h-6 w-6 text-purple-400" />
                      What are Cookies?
                    </CardTitle>
                  </CardHeader>
                  <p className="text-gray-300 mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used
                    to make websites work more efficiently and to provide information to website owners.
                  </p>
                  <p className="text-gray-300">
                    Cookies allow websites to recognize your device and store some information about your preferences or past actions.
                  </p>
                </section>

                <section>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">How We Use Cookies</CardTitle>
                  </CardHeader>
                  <p className="text-gray-300 mb-4">
                    We use cookies to enhance your browsing experience and to analyze how our website is used. Our website uses the following types of cookies:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                        Essential Cookies
                      </h3>
                      <p className="text-gray-300">
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to
                        secure areas of the website. The website cannot function properly without these cookies.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        Performance Cookies
                      </h3>
                      <p className="text-gray-300">
                        These cookies collect information about how visitors use our website, such as which pages are visited most often and if users
                        receive error messages. This information helps us improve our website's performance.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                        Functionality Cookies
                      </h3>
                      <p className="text-gray-300">
                        These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced,
                        more personalized features.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">Third-Party Cookies</CardTitle>
                  </CardHeader>
                  <p className="text-gray-300 mb-4">
                    Our website may contain links to third-party services (such as Telegram bots and external trading platforms). These third parties
                    may set their own cookies when you visit their websites. We do not control these cookies.
                  </p>
                  <p className="text-gray-300 mb-4">Third-party cookies may include:</p>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    <li>Analytics cookies from web analytics services</li>
                    <li>Social media cookies when you interact with social media content</li>
                    <li>Advertising cookies from advertising networks</li>
                  </ul>
                </section>

                <section>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">Managing Cookies</CardTitle>
                  </CardHeader>
                  <p className="text-gray-300 mb-4">
                    You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience
                    and parts of our website may no longer be fully accessible.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        Browser Settings
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
                        Here's how you can manage cookies in popular browsers:
                      </p>
                      <ul className="text-gray-300 list-disc list-inside space-y-2">
                        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                        <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                        <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                        Cookie Preferences
                      </h3>
                      <p className="text-gray-300">
                        You can choose to accept or decline cookies. If you choose to decline cookies, you may not be able to fully experience the
                        interactive features of our services or websites you visit.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">Specific Cookies We Use</CardTitle>
                  </CardHeader>
                  <div className="overflow-x-auto">
                    <table className="w-full text-gray-300 border-collapse">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-2">Cookie Name</th>
                          <th className="text-left py-3 px-2">Purpose</th>
                          <th className="text-left py-3 px-2">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-2">Session Cookies</td>
                          <td className="py-3 px-2">Essential website functionality</td>
                          <td className="py-3 px-2">Session</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-2">Preference Cookies</td>
                          <td className="py-3 px-2">Remember user preferences</td>
                          <td className="py-3 px-2">1 year</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-2">Analytics Cookies</td>
                          <td className="py-3 px-2">Website usage analytics</td>
                          <td className="py-3 px-2">2 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">Updates to This Policy</CardTitle>
                  </CardHeader>
                  <p className="text-gray-300">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you
                    of any material changes by posting the updated policy on our website.
                  </p>
                </section>

                <section>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">Contact Us</CardTitle>
                  </CardHeader>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about our Cookie Policy, please contact us at:
                  </p>
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
