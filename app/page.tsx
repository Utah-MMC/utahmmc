import Header from './components/Header'
import CompanySelector from './components/CompanySelector'
import HeroCarousel from './components/HeroCarousel'

export default function Home() {
  const partners = [
    {
      id: 1,
      name: 'LLC Company 1',
      logo: '/placeholder-logo.svg',
      description: 'One of our portfolio companies',
    },
    {
      id: 2,
      name: 'LLC Company 2',
      logo: '/placeholder-logo.svg',
      description: 'One of our portfolio companies',
    },
    {
      id: 3,
      name: 'LLC Company 3',
      logo: '/placeholder-logo.svg',
      description: 'One of our portfolio companies',
    },
    {
      id: 4,
      name: 'LLC Company 4',
      logo: '/placeholder-logo.svg',
      description: 'One of our portfolio companies',
    },
  ]

  const portfolio = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'Enterprise solution for digital transformation',
      category: 'Enterprise',
      image: '/placeholder-project.svg',
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'Mobile application with advanced features',
      category: 'Mobile',
      image: '/placeholder-project.svg',
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: 'Cloud infrastructure and migration',
      category: 'Cloud',
      image: '/placeholder-project.svg',
    },
    {
      id: 4,
      title: 'Project Delta',
      description: 'AI-powered analytics platform',
      category: 'AI/ML',
      image: '/placeholder-project.svg',
    },
    {
      id: 5,
      title: 'Project Epsilon',
      description: 'E-commerce platform with global reach',
      category: 'E-commerce',
      image: '/placeholder-project.svg',
    },
    {
      id: 6,
      title: 'Project Zeta',
      description: 'Healthcare management system',
      category: 'Healthcare',
      image: '/placeholder-project.svg',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section with Full Screen Background */}
      <div className="hero_area relative min-h-screen flex flex-col">
        {/* Carousel Background */}
        <HeroCarousel />
        
        {/* Fixed Header */}
        <Header />

        {/* Hero Content */}
        <section id="home" className="slider_section flex-1 flex items-center justify-center text-white pt-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="detail-box">
                <h3 className="text-2xl sm:text-3xl font-bold uppercase mb-2 text-gray-400">
                  CORPORATE PORTAL
                </h3>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-2">
                  UNIFIED ACCESS
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 tracking-wider">
                  CORPORATE ACCESS
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Centralized employee portal providing seamless access to resources, partners, and portfolio information across all Utah MMC entities. Manage your corporate ecosystem from one unified platform.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="#overview" className="btn-primary">
                    Learn More
                  </a>
                  <a href="#select-company" className="btn-primary">
                    Select Company
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Corporate Overview Section */}
      <section id="overview" className="layout_padding bg-white bg-cover bg-fixed" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(/images/overview-bg.jpg)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="heading_container mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl text-black">
              Corporate Overview
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Professional Introduction */}
              <div className="mb-12 bg-gradient-to-r from-gray-50 to-white p-8 rounded-lg border-l-4 border-indigo-600">
                <h3 className="text-2xl font-bold text-black mb-4">Welcome to Utah MMC</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Welcome to <strong>Utah MMC</strong>, a diversified holding company overseeing a wide portfolio of service-focused businesses. Our organization includes companies in financial lending, dredging, landscaping and pond services, dumpster rentals, digital solutions, real estate, and strategic asset holdings.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  While each business operates independently, they are united under one corporate vision: <strong>to build strong, reliable companies that deliver essential services and long-term value.</strong>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As part of our team, you&apos;ll be working in a collaborative environment where innovation, integrity, and operational excellence guide everything we do. We&apos;re excited to have you contribute to our continued growth across multiple industries.
                </p>
                <p className="text-xl font-semibold text-indigo-600 mt-6">
                  Welcome aboard!
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">Scope of Operations</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our operations span multiple industries and sectors, creating a robust and diversified corporate ecosystem. We leverage shared resources, technology platforms, and strategic partnerships to maximize value across our portfolio.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h4 className="font-semibold text-black mb-2 relative z-10">Financial Lending</h4>
                    <p className="text-gray-700 text-sm relative z-10">Financial services and lending solutions</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h4 className="font-semibold text-black mb-2 relative z-10">Dredging</h4>
                    <p className="text-gray-700 text-sm relative z-10">Marine and waterway dredging services</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h4 className="font-semibold text-black mb-2 relative z-10">Landscaping & Pond Services</h4>
                    <p className="text-gray-700 text-sm relative z-10">Professional landscaping and pond maintenance</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h4 className="font-semibold text-black mb-2 relative z-10">Dumpster Rentals</h4>
                    <p className="text-gray-700 text-sm relative z-10">Waste management and dumpster rental services</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h4 className="font-semibold text-black mb-2 relative z-10">Digital Solutions</h4>
                    <p className="text-gray-700 text-sm relative z-10">Technology solutions and digital services</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h4 className="font-semibold text-black mb-2 relative z-10">Real Estate</h4>
                    <p className="text-gray-700 text-sm relative z-10">Property development, management, and investment</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow overflow-hidden relative group md:col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-slate-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h4 className="font-semibold text-black mb-2 relative z-10">Strategic Asset Holdings</h4>
                    <p className="text-gray-700 text-sm relative z-10">Strategic investments and asset management</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4">What Unifies Us</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our portfolio companies are unified through a shared commitment to excellence, innovation, and strategic alignment. We operate under a cohesive ownership structure that enables:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                  <li>Centralized technology and development resources</li>
                  <li>Shared operational best practices and standards</li>
                  <li>Strategic cross-company collaboration and partnerships</li>
                  <li>Unified corporate governance and oversight</li>
                  <li>Collective investment in growth and innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Selection Section */}
      <section id="select-company" className="layout_padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CompanySelector />
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="us_section layout_padding bg-gray-50 bg-cover bg-fixed" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(/images/partners-bg.jpg)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="heading_container mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl text-black">
              Our Portfolio Companies
            </h2>
          </div>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Access information and resources for all portfolio companies under the Utah MMC corporate umbrella
          </p>
          <div className="us_container pt-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="box flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="img-box h-24 flex items-center justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      {partner.name.charAt(0)}
                    </div>
                  </div>
                  <div className="detail-box">
                    <h5 className="font-bold text-lg text-black mb-2 uppercase">
                      {partner.name}
                    </h5>
                    <p className="text-gray-700 text-sm">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="heathy_section layout_padding bg-cover bg-fixed" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(/images/portfolio-bg.jpg)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="heading_container mb-12">
            <h2 className="section-heading text-3xl sm:text-4xl text-white">
              Our Portfolio
            </h2>
          </div>
          <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Showcasing our successful projects and achievements
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
                  <div className="text-white text-5xl font-bold opacity-90 group-hover:opacity-100 transition-opacity">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 uppercase">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer_section bg-gray-100 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-800 font-medium">
              © {new Date().getFullYear()} Utah MMC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

