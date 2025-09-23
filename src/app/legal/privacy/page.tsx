import { DollarSign } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Data Protection at a Glance</h2>

              <h3 className="text-xl font-semibold text-white mb-3">General Information</h3>
              <p className="text-slate-300 mb-4">
                The following gives a simple overview of what happens to your personal information when you visit our website.
                Personal information is any data with which you could be personally identified. Detailed information on the subject
                of data protection can be found in our privacy policy found below.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Data Collection on our Website</h3>
              <p className="text-slate-300 mb-4">
                <strong>Who is responsible for the data collection on this website?</strong><br />
                The data collected on this website are processed by the website operator. The operator's contact details can be found
                in the website's required legal notice.
              </p>

              <p className="text-slate-300 mb-4">
                <strong>How do we collect your data?</strong><br />
                Some data are collected when you provide it to us. This could, for example, be data you enter on a contact form.
                Other data are collected automatically by our IT systems when you visit the website. These data are primarily
                technical data such as the browser and operating system you are using or when you accessed the page.
              </p>

              <p className="text-slate-300">
                <strong>What do we use your data for?</strong><br />
                Part of the data is collected to ensure the proper functioning of the website. Other data can be used to analyze
                how visitors use the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. General Information and Mandatory Information</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
              <p className="text-slate-300 mb-4">
                The operators of this website take the protection of your personal data very seriously. We treat your personal data
                as confidential and in accordance with the statutory data protection regulations and this privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Information about the Responsible Party</h3>
              <p className="text-slate-300 mb-4">
                The responsible party for data processing on this website is:
              </p>
              <div className="text-slate-300 mb-4">
                <p>Dennis Moskal</p>
                <p>Westpreußenstraße 26</p>
                <p>53119 Bonn, Germany</p>
                <p>Phone: +49 172 205 8855</p>
                <p>Email: dennismoskal@yahoo.com</p>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">Revocation of your Consent to Data Processing</h3>
              <p className="text-slate-300">
                Many data processing operations are only possible with your express consent. You may revoke your consent at any time
                with future effect. An informal email making this request is sufficient. The data processed before we receive your
                request may still be legally processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Data Collection on our Website</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Cookies</h3>
              <p className="text-slate-300 mb-4">
                Some of our web pages use cookies. Cookies do not harm your computer and do not contain any viruses. Cookies help
                make our website more user-friendly, efficient, and secure. Cookies are small text files that are stored on your
                computer and saved by your browser.
              </p>
              <p className="text-slate-300 mb-4">
                Most of the cookies we use are so-called "session cookies." They are automatically deleted after your visit. Other
                cookies remain in your device's memory until you delete them. These cookies make it possible to recognize your browser
                when you next visit the site.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Server Log Files</h3>
              <p className="text-slate-300 mb-4">
                The website provider automatically collects and stores information that your browser automatically transmits to us
                in "server log files". These are:
              </p>
              <ul className="text-slate-300 list-disc list-inside mb-4 space-y-1">
                <li>Browser type and browser version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Host name of the accessing computer</li>
                <li>Time of the server request</li>
                <li>IP address</li>
              </ul>
              <p className="text-slate-300">
                These data will not be combined with data from other sources. The basis for data processing is Art. 6 (1) (f) DSGVO,
                which allows the processing of data to fulfill a contract or for measures preliminary to a contract.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>

              <h3 className="text-xl font-semibold text-white mb-3">External Links</h3>
              <p className="text-slate-300 mb-4">
                Our website contains links to external third-party websites. We have no control over the contents and data protection
                practices of these linked websites. When you click on external links, you leave our website and are subject to the
                privacy policies of the respective external websites.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Telegram Integration</h3>
              <p className="text-slate-300">
                Our website provides links to Telegram bots and channels. When you click these links and interact with Telegram
                services, you are subject to Telegram's privacy policy and terms of service. We do not collect or process any data
                from your interactions with these external services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
              <p className="text-slate-300 mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="text-slate-300 list-disc list-inside space-y-2">
                <li>Right to information about your stored personal data</li>
                <li>Right to correction of incorrect personal data</li>
                <li>Right to deletion of your personal data</li>
                <li>Right to restriction of data processing</li>
                <li>Right to data portability</li>
                <li>Right to object to data processing</li>
              </ul>
              <p className="text-slate-300 mt-4">
                If you have any questions about data protection, please contact us at dennismoskal@yahoo.com.
              </p>
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
