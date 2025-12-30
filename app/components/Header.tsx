'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header_section fixed top-0 left-0 w-full z-50 bg-[#f7f3ec]/92 backdrop-blur-xl border-b border-[#e6ddd0]">
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <a href="/" className="navbar-brand flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Utah MMC Logo" 
              className="h-12 md:h-14 w-auto scale-150 origin-left drop-shadow-[0_8px_22px_rgba(15,13,11,0.22)]"
            />
            <span className="hidden sm:inline text-xs tracking-[0.28em] text-[#7a604b] font-semibold uppercase">
              Utah MMC
            </span>
          </a>
          <div className="hidden lg:flex items-center space-x-8 text-sm">
            <a
              href="#home"
              className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#overview"
              className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
              onClick={() => setIsMenuOpen(false)}
            >
              Overview
            </a>
            <a
              href="#services"
              className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#partnerships"
              className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
              onClick={() => setIsMenuOpen(false)}
            >
              Partnerships
            </a>
            <a
              href="#companies"
              className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
              onClick={() => setIsMenuOpen(false)}
            >
              Companies
            </a>
            <a
              href="#portfolio"
              className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
              onClick={() => setIsMenuOpen(false)}
            >
              Highlights
            </a>
            <a
              href="#contact"
              className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/login"
              className="px-4 py-2 rounded-full border border-[#b65f36] text-[#b65f36] text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#b65f36] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner Portal
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#2f3f4a] focus:outline-none"
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
          <div className="lg:hidden mt-4 pb-6">
            <div className="flex flex-col space-y-4 text-sm">
              <a
                href="#home"
                className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#overview"
                className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
                onClick={() => setIsMenuOpen(false)}
              >
                Overview
              </a>
              <a
                href="#services"
                className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#partnerships"
                className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
                onClick={() => setIsMenuOpen(false)}
              >
                Partnerships
              </a>
              <a
                href="#companies"
                className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
                onClick={() => setIsMenuOpen(false)}
              >
                Companies
              </a>
              <a
                href="#portfolio"
                className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
                onClick={() => setIsMenuOpen(false)}
              >
                Highlights
              </a>
              <a
                href="#contact"
                className="nav-link text-[#1b1a17] uppercase tracking-[0.18em] text-sm font-semibold transition-all hover:text-[#b65f36]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/login"
                className="px-4 py-2 rounded-full border border-[#b65f36] text-[#b65f36] text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#b65f36] hover:text-white transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Partner Portal
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

