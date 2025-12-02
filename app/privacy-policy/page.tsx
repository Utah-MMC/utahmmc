import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Utah MMC Logo"
                width={200}
                height={80}
                className="mx-auto h-16 w-auto"
              />
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
              <p>
                Utah MMC collects information necessary to provide employee portal services, including but not limited to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Employee identification and contact information</li>
                <li>Login credentials and authentication data</li>
                <li>Usage data and portal activity</li>
                <li>Company and department information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
              <p>
                We use the information collected to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Provide and maintain the employee portal</li>
                <li>Authenticate user access</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact your HR department or system administrator.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

