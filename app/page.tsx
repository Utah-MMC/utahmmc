import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'

export default function Home() {
  const stats = [
    { label: 'Industries Served', value: '7+' },
    { label: 'Operating Companies', value: '19' },
    { label: 'Active Partnerships', value: '25+' },
  ]

  const focusAreas = [
    {
      title: 'Essential services',
      description: 'Lending, environmental, and property services that keep communities running.',
    },
    {
      title: 'Operator-first growth',
      description: 'Local leaders backed by shared capital, governance, and technology.',
    },
    {
      title: 'Long-term partnerships',
      description: 'Structured alliances that create durable, multi-market value.',
    },
  ]

  const services = [
    {
      title: 'Financial Lending',
      description: 'Consumer and asset-backed lending with disciplined underwriting and rapid deployment.',
      image: '/images/service-1.jpg',
      tag: 'Capital',
    },
    {
      title: 'Dredging + Waterways',
      description: 'Infrastructure support for municipalities, marinas, and water management partners.',
      image: '/images/photo-1454165804606-c3d57bc86b40.jpg',
      tag: 'Infrastructure',
    },
    {
      title: 'Landscaping + Pond Care',
      description: 'Commercial landscaping and water feature services that protect assets and brand.',
      image: '/images/photo-1552664730-d307ca884978.jpg',
      tag: 'Environmental',
    },
    {
      title: 'Dumpster Rentals',
      description: 'On-demand waste and logistics services for construction and municipal partners.',
      image: '/images/service-2.jpg',
      tag: 'Logistics',
    },
    {
      title: 'Digital Solutions',
      description: 'Modern marketing, automation, and analytics for portfolio and partner growth.',
      image: '/images/photo-1486406146926-c627a92ad1ab.jpg',
      tag: 'Technology',
    },
    {
      title: 'Real Estate + Assets',
      description: 'Development, management, and strategic asset holdings built for stability.',
      image: '/images/hero-business.jpg',
      tag: 'Holdings',
    },
  ]

  const partnerships = [
    {
      title: 'Operating Partnerships',
      description: 'We partner with proven operators ready to scale across regions or verticals.',
      focus: 'Equity + Growth Platforms',
    },
    {
      title: 'Municipal + Infrastructure',
      description: 'Public and private infrastructure alliances that support essential services.',
      focus: 'Long-Term Service Contracts',
    },
    {
      title: 'Technology + Data',
      description: 'Strategic tech partnerships that modernize operations and customer delivery.',
      focus: 'Automation + Insights',
    },
    {
      title: 'Capital + Advisory',
      description: 'Financial partners who value steady returns and transparent governance.',
      focus: 'Structured Capital',
    },
  ]

  const companies = [
    {
      name: 'Utah MMC Capital',
      focus: 'Financial Lending',
      description: 'Capital solutions tailored to regional operators and consumers.',
    },
    {
      name: 'Utah MMC Environmental',
      focus: 'Dredging + Waterways',
      description: 'Specialty services for waterways, marinas, and municipal assets.',
    },
    {
      name: 'Utah MMC Grounds',
      focus: 'Landscaping + Pond Care',
      description: 'Commercial landscaping, irrigation, and pond management teams.',
    },
    {
      name: 'Utah MMC Waste Solutions',
      focus: 'Dumpster Rentals',
      description: 'Flexible dumpster and waste logistics across growing metro areas.',
    },
    {
      name: 'Utah MMC Digital',
      focus: 'Digital Solutions',
      description: 'Design, development, and growth systems for service companies.',
    },
    {
      name: 'Utah MMC Realty',
      focus: 'Real Estate + Assets',
      description: 'Property development and strategic asset oversight.',
    },
    {
      name: 'Eco Water Services',
      focus: 'Water Services',
      description: 'Water service operations focused on maintenance, quality, and compliance.',
    },
    {
      name: 'Titan Enterprise',
      focus: 'Enterprise Services',
      description: 'Multi-site service delivery with operational scale and reliability.',
    },
    {
      name: 'Maguire Management',
      focus: 'Management Services',
      description: 'Operational leadership and management support for portfolio partners.',
    },
    {
      name: 'JDC Capital',
      focus: 'Capital Partners',
      description: 'Aligned capital support for growth and long-term investment.',
    },
  ]

  const portfolio = [
    {
      title: 'Project Alpha',
      description: 'Regional service expansion with unified operations and shared technology.',
      category: 'Scale',
    },
    {
      title: 'Project Beta',
      description: 'Municipal infrastructure partnership supporting long-term dredging programs.',
      category: 'Infrastructure',
    },
    {
      title: 'Project Gamma',
      description: 'Portfolio-wide digital modernization, CRM automation, and analytics.',
      category: 'Technology',
    },
  ]

  const principles = [
    {
      title: 'Local stewardship',
      description: 'Empowering regional operators with the resources to lead in their markets.',
    },
    {
      title: 'Operational clarity',
      description: 'Shared systems and consistent governance across every company.',
    },
    {
      title: 'Disciplined capital',
      description: 'Thoughtful growth built on sustainable cash flow and aligned incentives.',
    },
    {
      title: 'Partnership durability',
      description: 'Long-term relationships that compound value over time.',
    },
  ]

  const partnershipSteps = [
    {
      title: 'Discovery',
      description: 'We align on service scope, market needs, and partnership goals.',
    },
    {
      title: 'Structure',
      description: 'Capital, governance, and operational support built to scale.',
    },
    {
      title: 'Launch',
      description: 'Execution teams collaborate with leadership for fast, stable growth.',
    },
    {
      title: 'Scale',
      description: 'We expand footprints with shared tech, talent, and capital resources.',
    },
  ]

  return (
    <main className="bg-[#f7f3ec] text-[#1b1a17]">
      <section id="home" className="relative min-h-[92vh] overflow-hidden">
        <HeroCarousel />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_55%)]" />
        <div className="absolute -top-32 right-16 h-72 w-72 rounded-full bg-[#cbb18c]/45 blur-3xl float-slower" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#b65f36]/25 blur-3xl float-slow" />
        <Header />

        <div className="relative z-10 pt-32 pb-20">
          <div className="container mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8 fade-up">
              <p className="section-heading text-[#8b6f58] text-xs">Utah MMC Holdings</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#1b1a17]">
                Building essential service companies and partnerships across the Mountain West.
              </h1>
              <p className="text-lg text-[#4f473f] max-w-xl">
                Utah MMC is a diversified holding company guiding operators, infrastructure partners, and
                service leaders with capital, governance, and shared operational resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="btn-primary">
                  Explore Services
                </a>
                <a href="#partnerships" className="btn-secondary">
                  View Partnerships
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur"
                  >
                    <p className="text-2xl font-display text-[#1b1a17]">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6b5c52] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative fade-up" style={{ animationDelay: '140ms' }}>
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-white/70 border border-white/80 shadow-lg float-slow" />
              <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-2xl backdrop-blur">
                <div
                  className="h-44 w-full rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/photo-1486406146926-c627a92ad1ab.jpg)' }}
                />
                <div className="mt-6 space-y-4">
                  <p className="section-heading text-[#8b6f58] text-xs">Operating focus</p>
                  <h2 className="font-display text-2xl text-[#1b1a17]">
                    Multi-industry platform with aligned leadership.
                  </h2>
                  <ul className="space-y-3 text-sm text-[#4f473f]">
                    {focusAreas.map((area) => (
                      <li key={area.title} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#b65f36]" />
                        <div>
                          <p className="font-semibold text-[#2f3f4a]">{area.title}</p>
                          <p>{area.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8b6f58]">Headquarters</p>
                  <p className="mt-2 text-sm font-semibold text-[#2f3f4a]">Utah operations with regional reach</p>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8b6f58]">Partnerships</p>
                  <p className="mt-2 text-sm font-semibold text-[#2f3f4a]">Operator-first, long-term alignment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="relative py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <p className="section-heading text-[#8b6f58] text-xs">Corporate overview</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1b1a17]">
              A holding company built for durable, community-rooted services.
            </h2>
            <p className="text-lg text-[#4f473f]">
              Utah MMC oversees a portfolio of essential service businesses. We provide strategic leadership,
              shared systems, and disciplined capital so our teams can serve customers with consistency and care.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-2xl bg-white p-5 border border-[#e6ddd0] shadow-sm">
                  <p className="font-semibold text-[#2f3f4a]">{principle.title}</p>
                  <p className="mt-2 text-sm text-[#5b544e]">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e6ddd0] bg-white p-8 shadow-lg">
              <p className="section-heading text-[#8b6f58] text-xs">What unifies us</p>
              <ul className="mt-6 space-y-4 text-[#4f473f]">
                <li>Centralized governance that protects quality and compliance.</li>
                <li>Shared technology platforms for data, forecasting, and reporting.</li>
                <li>Cross-company talent programs and operational playbooks.</li>
                <li>Collaborative partnerships that unlock scale.</li>
              </ul>
            </div>
            <div
              className="h-56 rounded-3xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: 'url(/images/photo-1454165804606-c3d57bc86b40.jpg)' }}
            />
          </div>
        </div>
      </section>

      <section id="services" className="relative py-24 bg-[#efe6d9]">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <p className="section-heading text-[#8b6f58] text-xs">Services</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1b1a17]">
              A portfolio of service businesses built for essential needs.
            </h2>
            <p className="mt-4 text-lg text-[#4f473f]">
              Each company operates independently while sharing Utah MMC resources, systems, and leadership.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className="h-36 rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `linear-gradient(rgba(27, 26, 23, 0.1), rgba(27, 26, 23, 0.2)), url(${service.image})` }}
                />
                <div className="mt-6 space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8b6f58]">{service.tag}</p>
                  <h3 className="font-display text-2xl text-[#1b1a17]">{service.title}</h3>
                  <p className="text-sm text-[#5b544e]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partnerships" className="relative py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <p className="section-heading text-[#8b6f58] text-xs">Partnerships</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1b1a17]">
              Partnerships that compound value across markets.
            </h2>
            <p className="mt-4 text-lg text-[#4f473f]">
              We collaborate with operators, municipalities, and capital partners to expand essential services,
              improve infrastructure, and deliver long-term growth.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {partnerships.map((partnership) => (
                <div key={partnership.title} className="rounded-2xl border border-[#e6ddd0] bg-white p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8b6f58]">{partnership.focus}</p>
                  <h3 className="mt-3 font-display text-xl text-[#1b1a17]">{partnership.title}</h3>
                  <p className="mt-3 text-sm text-[#5b544e]">{partnership.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e6ddd0] bg-white p-8 shadow-lg">
              <p className="section-heading text-[#8b6f58] text-xs">How we partner</p>
              <div className="mt-6 space-y-5">
                {partnershipSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full border border-[#b65f36] text-[#b65f36] flex items-center justify-center font-semibold">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2f3f4a]">{step.title}</p>
                      <p className="text-sm text-[#5b544e]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="h-56 rounded-3xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: 'url(/images/photo-1552664730-d307ca884978.jpg)' }}
            />
          </div>
        </div>
      </section>

      <section id="companies" className="relative py-24 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <p className="section-heading text-[#8b6f58] text-xs">Operating companies</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1b1a17]">
              Portfolio companies focused on essential services.
            </h2>
            <p className="mt-4 text-lg text-[#4f473f]">
              Each company is led by experienced operators with Utah MMC support across finance, strategy, and technology.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {companies.map((company) => (
              <div key={company.name} className="rounded-3xl border border-[#e6ddd0] p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-[#efe6d9] flex items-center justify-center text-lg font-semibold text-[#b65f36]">
                    {company.name.charAt(0)}
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#8b6f58]">{company.focus}</span>
                </div>
                <h3 className="mt-4 font-display text-xl text-[#1b1a17]">{company.name}</h3>
                <p className="mt-3 text-sm text-[#5b544e]">{company.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative py-24 bg-[#1f2b2c] text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <p className="section-heading text-[#cbb18c] text-xs">Portfolio highlights</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white">
              Signature initiatives across the Utah MMC ecosystem.
            </h2>
            <p className="mt-4 text-lg text-white/75">
              A snapshot of the programs and partnerships driving measurable impact and growth.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {portfolio.map((project) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-[#cbb18c]">{project.category}</p>
                <h3 className="mt-3 font-display text-xl text-white">{project.title}</h3>
                <p className="mt-4 text-sm text-white/70">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 bg-[#161412] text-white">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="section-heading text-[#cbb18c] text-xs">Connect</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white">
              Ready to explore a partnership or service engagement?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              We welcome collaboration across industries, municipalities, and operating teams. Share your goals and
              we will connect you with the right leadership group.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#partnerships" className="btn-primary">
                Start a Partnership
              </a>
              <a href="#services" className="btn-secondary">
                View Service Lines
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#cbb18c]">Partnerships</p>
              <p className="mt-3 text-sm text-white/80">Collaborate on regional expansion and shared service delivery.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#cbb18c]">Media + Press</p>
              <p className="mt-3 text-sm text-white/80">Request company information, leadership interviews, or data.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#cbb18c]">Careers</p>
              <p className="mt-3 text-sm text-white/80">Explore leadership and operational roles across our companies.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#cbb18c]">Operations</p>
              <p className="mt-3 text-sm text-white/80">Access portfolio resources and operational support.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f0d0b] text-white/70 py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>c {new Date().getFullYear()} Utah MMC. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.3em]">
            <a href="#overview" className="hover:text-white transition-colors">
              Overview
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#partnerships" className="hover:text-white transition-colors">
              Partnerships
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
