import { DollarSign } from "lucide-react"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 backdrop-blur-sm bg-slate-900/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">PlatinumLabs</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What are Cookies?</h2>
              <p className="text-slate-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used
                to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-slate-300">
                Cookies allow websites to recognize your device and store some information about your preferences or past actions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
              <p className="text-slate-300 mb-4">
                We use cookies to enhance your browsing experience and to analyze how our website is used. Our website uses the following types of cookies:
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Essential Cookies</h3>
              <p className="text-slate-300 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to
                secure areas of the website. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Performance Cookies</h3>
              <p className="text-slate-300 mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited most often and if users
                receive error messages. This information helps us improve our website's performance.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Functionality Cookies</h3>
              <p className="text-slate-300">
                These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced,
                more personalized features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-slate-300 mb-4">
                Our website may contain links to third-party services (such as Telegram bots and external trading platforms). These third parties
                may set their own cookies when you visit their websites. We do not control these cookies.
              </p>
              <p className="text-slate-300">
                Third-party cookies may include:
              </p>
              <ul className="text-slate-300 list-disc list-inside space-y-2 mt-2">
                <li>Analytics cookies from web analytics services</li>
                <li>Social media cookies when you interact with social media content</li>
                <li>Advertising cookies from advertising networks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
              <p className="text-slate-300 mb-4">
                You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience
                and parts of our website may no longer be fully accessible.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Browser Settings</h3>
              <p className="text-slate-300 mb-4">
                Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
                Here's how you can manage cookies in popular browsers:
              </p>
              <ul className="text-slate-300 list-disc list-inside space-y-2 mb-4">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Cookie Preferences</h3>
              <p className="text-slate-300">
                You can choose to accept or decline cookies. If you choose to decline cookies, you may not be able to fully experience the
                interactive features of our services or websites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-slate-300 border-collapse">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-3 px-2">Cookie Name</th>
                      <th className="text-left py-3 px-2">Purpose</th>
                      <th className="text-left py-3 px-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-2">Session Cookies</td>
                      <td className="py-3 px-2">Essential website functionality</td>
                      <td className="py-3 px-2">Session</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-2">Preference Cookies</td>
                      <td className="py-3 px-2">Remember user preferences</td>
                      <td className="py-3 px-2">1 year</td>
                    </tr>
                    <tr className="border-b border-slate-700">
                      <td className="py-3 px-2">Analytics Cookies</td>
                      <td className="py-3 px-2">Website usage analytics</td>
                      <td className="py-3 px-2">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
              <p className="text-slate-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you
                of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-slate-300">
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <div className="text-slate-300 mt-4">
                <p>Dennis Moskal</p>
                <p>Email: dennismoskal@yahoo.com</p>
                <p>Phone: +49 172 205 8855</p>
              </div>
            </section>

            <div className="border-t border-slate-700 pt-6">
              <p className="text-slate-400 text-sm">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
