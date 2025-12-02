'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
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

          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Register for Employee Portal
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Contact your administrator to request access to the employee portal.
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <p className="text-sm text-blue-800">
                <strong>Need Access?</strong>
              </p>
              <p className="text-sm text-blue-700 mt-2">
                Please contact your HR department or system administrator to request an account. You will need your employee ID and company email address.
              </p>
            </div>

            <div className="mt-6 text-center space-y-2">
              <Link
                href="/login"
                className="text-sm text-blue-600 hover:text-blue-800 block"
              >
                Already have an account? Sign in
              </Link>
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-gray-800 block"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

