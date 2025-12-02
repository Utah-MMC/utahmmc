'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header_section fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container-fluid px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <a href="/" className="navbar-brand flex items-center">
            <img 
              src="/logo.png" 
              alt="Utah MMC Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="nav-link text-gray-800 uppercase text-sm font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#overview"
              className="nav-link text-gray-800 uppercase text-sm font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Overview
            </a>
            <a
              href="#partners"
              className="nav-link text-gray-800 uppercase text-sm font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio Companies
            </a>
            <a
              href="#select-company"
              className="nav-link text-gray-800 uppercase text-sm font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Select Company
            </a>
            <a
              href="#portfolio"
              className="nav-link text-gray-800 uppercase text-sm font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="/login"
              className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="nav-link text-gray-800 uppercase text-sm font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#overview"
                className="nav-link text-gray-800 uppercase text-sm font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Overview
              </a>
              <a
                href="#partners"
                className="nav-link text-gray-800 uppercase text-sm font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio Companies
              </a>
              <a
                href="#select-company"
                className="nav-link text-gray-800 uppercase text-sm font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Select Company
              </a>
              <a
                href="#portfolio"
                className="nav-link text-gray-800 uppercase text-sm font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="/login"
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

