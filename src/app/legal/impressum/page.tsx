import { DollarSign } from "lucide-react"
import Link from "next/link"

export default function ImpressumPage() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Impressum (Legal Notice)</h1>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information in accordance with Section 5 TMG</h2>
              <div className="text-slate-300 space-y-2">
                <p><strong>Dennis Moskal</strong></p>
                <p>Westpreußenstraße 26</p>
                <p>53119 Bonn</p>
                <p>Germany</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <div className="text-slate-300 space-y-2">
                <p><strong>Email:</strong> dennismoskal@yahoo.com</p>
                <p><strong>Phone:</strong> +49 172 205 8855</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Person responsible for editorial</h2>
              <div className="text-slate-300">
                <p>Dennis Moskal</p>
                <p>Westpreußenstraße 26</p>
                <p>53119 Bonn, Germany</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">EU Dispute Resolution</h2>
              <p className="text-slate-300">
                The European Commission provides a platform for online dispute resolution (ODR):
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-slate-300 mt-2">
                Our email address can be found above in the impressum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Dispute Resolution Proceedings in Front of a Consumer Arbitration Board</h2>
              <p className="text-slate-300">
                We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Liability for Contents</h2>
              <p className="text-slate-300">
                As service providers, we are liable for own contents of these websites according to Sec. 7, Para. 1, German Telemedia Act (TMG).
                However, according to Sec. 8 to 10, German Telemedia Act (TMG), service providers are not under obligation to permanently monitor
                submitted or stored information or to search for evidences that indicate illegal activities.
              </p>
              <p className="text-slate-300 mt-4">
                Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only
                possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get
                knowledge of them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Liability for Links</h2>
              <p className="text-slate-300">
                Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we
                cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for the contents of the
                linked websites. All linked websites have been checked for possible violations of law at the time of the establishment of the link.
                Illegal contents were not detected at the time of the linking.
              </p>
              <p className="text-slate-300 mt-4">
                A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a
                violation of law. Illegal links will be removed immediately at the time we get knowledge of them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Copyright</h2>
              <p className="text-slate-300">
                Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing,
                distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or
                originator. Downloads and copies of these websites are permitted for private use only.
              </p>
              <p className="text-slate-300 mt-4">
                The commercial use of our contents without permission of the originator is prohibited.
              </p>
              <p className="text-slate-300 mt-4">
                Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider.
                Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law,
                please inform us. Such contents will be removed immediately.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
