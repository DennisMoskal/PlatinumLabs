import { DollarSign } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
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
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-300">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Risk Disclosure</h2>
              <p className="text-slate-300 mb-4">
                <strong>IMPORTANT: Cryptocurrency trading involves substantial risk of loss and is not suitable for every investor.</strong>
              </p>
              <p className="text-slate-300">
                Trading cryptocurrencies involves significant risk and can result in the loss of your invested capital.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Contact Information</h2>
              <div className="text-slate-300">
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
