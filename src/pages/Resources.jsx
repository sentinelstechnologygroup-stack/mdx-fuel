import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText, ArrowRight, HelpCircle, Droplets, Zap, AlertTriangle,
  CheckSquare, Users, Package, HardHat, Truck, MapPin, Settings, ClipboardList
} from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import FAQAccordion from '@/components/shared/FAQAccordion';
const IMAGES = {
  heroTruck: '/images/hero/hero-truck.png',
  constructionSite: '/images/industries/construction-site.png',
  fleetYard: '/images/industries/fleet-yard.png',
  agriculture: '/images/industries/agriculture.png',
  oilfield: '/images/industries/oilfield.png',
  driver: '/images/services/driver.png',
  generatorFueling: '/images/services/generator-fueling.png',
  tankerFilling: '/images/services/tanker-filling.png',
  lubricants: '/images/products/lubricants.png',
  storageTanks: '/images/products/storage-tanks.png',
  houstonAerial: '/images/backgrounds/houston-aerial.png',
  tomballCommercial: '/images/backgrounds/tomball-commercial.png',
  dieselFuel: '/images/hero/hero-truck.png',
  offRoadDiesel: '/images/industries/construction-site.png',
  gasoline: '/images/industries/fleet-yard.png',
  dieselExhaustFluid: '/images/products/storage-tanks.png',
  fuelAdditives: '/images/products/lubricants.png',
  bulkPetroleum: '/images/services/tanker-filling.png',
  specialtyPetroleum: '/images/industries/oilfield.png',
};


const RESOURCES = [
  {
    icon: HelpCircle,
    title: 'Fuel Delivery FAQs',
    category: 'Getting Started',
    desc: 'Common questions about commercial fuel delivery — how to set up service, scheduling, minimum volumes, and what to expect from MDX Fuel.',
    topics: [
      'How does commercial fuel delivery work?',
      'What are typical order minimums?',
      'How far in advance should I schedule?',
      'What products does MDX Fuel deliver?',
    ],
    cta: { label: 'Contact MDX Fuel', to: '/contact' },
  },
  {
    icon: Users,
    title: 'Commercial Fuel Account Setup',
    category: 'Getting Started',
    desc: 'What to expect when setting up a commercial fuel account — the process, information needed, delivery programs available, and how to get started.',
    topics: [
      'Information required to open an account',
      'Types of delivery programs available',
      'Account billing and invoicing overview',
      'How to get started with MDX Fuel',
    ],
    cta: { label: 'Open an Account', to: '/open-account' },
  },
  {
    icon: FileText,
    title: 'Bulk Fuel Delivery Planning',
    category: 'Operations',
    desc: 'How to plan and manage bulk fuel delivery for high-volume operations — fleet yards, construction sites, industrial facilities, and storage tank programs.',
    topics: [
      'Estimating your monthly fuel volume',
      'Tank sizing and storage considerations',
      'Delivery frequency and scheduling options',
      'Managing supply with scheduled programs',
    ],
    cta: { label: 'Request a Quote', to: '/request-quote' },
  },
  {
    icon: HardHat,
    title: 'Job Site Fuel Readiness',
    category: 'Operations',
    desc: 'A guide for project managers ensuring fuel supply is in place before and during active construction, energy, or industrial job site operations.',
    topics: [
      'Fuel access planning for active job sites',
      'On-road vs. off-road diesel requirements',
      'Temporary tank and equipment options',
      'Setting up site delivery with MDX Fuel',
    ],
    cta: { label: 'Request a Quote', to: '/request-quote' },
  },
  {
    icon: Zap,
    title: 'Generator Fueling Checklist',
    category: 'Operations',
    desc: 'A practical checklist for commercial and industrial facility managers responsible for maintaining diesel backup generator fuel supply.',
    topics: [
      'Regular tank level inspection schedule',
      'Pre-storm generator fueling protocol',
      'Fuel quality and stability management',
      'Scheduling regular delivery with your fuel supplier',
    ],
    cta: { label: 'Contact MDX Fuel', to: '/contact' },
  },
  {
    icon: Droplets,
    title: 'Lubricants Selection Guide',
    category: 'Products',
    desc: 'An overview of commercial lubricants — motor oils, hydraulic fluids, gear oils, and greases — and guidance on matching the right product to your equipment.',
    topics: [
      'Motor oil viscosity grades explained',
      'Hydraulic fluid selection basics',
      'Gear oil and transmission fluid guidance',
      'Why lubricant quality matters for equipment',
    ],
    cta: { label: 'Request a Quote', to: '/request-quote' },
  },
  {
    icon: Package,
    title: 'Diesel Exhaust Fluid Basics',
    category: 'Products',
    desc: 'What DEF is, why modern diesel engines require it, how it works with SCR systems, and how to ensure consistent supply for your fleet or job site.',
    topics: [
      'What is Diesel Exhaust Fluid?',
      'Which engines require DEF?',
      'Storage and handling best practices',
      'Avoiding DEF-related equipment shutdowns',
    ],
    cta: { label: 'Request a Quote', to: '/request-quote' },
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Fuel Planning Guide',
    category: 'Operations',
    desc: 'How commercial businesses can prepare for fuel supply disruptions — including storm season preparation, generator fueling protocols, and establishing fuel contacts.',
    topics: [
      'Storm season fuel preparation checklist',
      'Generator tank capacity planning',
      'Establishing emergency fuel supply contacts',
      'Fuel storage best practices for backup power',
    ],
    cta: { label: 'Contact MDX Fuel', to: '/contact' },
  },
  {
    icon: ClipboardList,
    title: 'Tank & Equipment Information Checklist',
    category: 'Getting Started',
    desc: 'What tank and equipment details to have ready before requesting a fuel delivery quote — helps MDX Fuel understand your site and delivery requirements.',
    topics: [
      'Tank capacity and type (above or below ground)',
      'Fill connection type and access requirements',
      'Current tank level estimate',
      'Equipment and vehicle fuel types on site',
    ],
    cta: { label: 'Request a Quote', to: '/request-quote' },
  },
  {
    icon: MapPin,
    title: 'Delivery Address & Site Access Checklist',
    category: 'Getting Started',
    desc: 'Information to have ready when scheduling a fuel delivery — site access details, delivery contact, address specifics, and any restrictions.',
    topics: [
      'Full delivery address and gate access info',
      'On-site delivery contact name and phone',
      'Vehicle clearance and access road restrictions',
      'Preferred delivery hours and scheduling notes',
    ],
    cta: { label: 'Contact MDX Fuel', to: '/contact' },
  },
];

const CATEGORY_COLORS = {
  'Getting Started': 'bg-blue-50 text-blue-700 border-blue-100',
  'Products': 'bg-amber-50 text-amber-700 border-amber-100',
  'Operations': 'bg-green-50 text-green-700 border-green-100',
};

const CATEGORIES = ['All', 'Getting Started', 'Products', 'Operations'];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? RESOURCES
    : RESOURCES.filter(r => r.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Resource Center"
        title="MDX Fuel Resource Center"
        subtitle="Commercial fuel guides, checklists, FAQs, and operational information for fleet managers, facility operators, contractors, and business owners."
        breadcrumbs={[{ label: 'Resource Center' }]}
        bgImage={IMAGES.tankerFilling}
      />

      {/* Info note band */}
      <section className="bg-secondary border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-white/55 text-sm">
            <strong className="text-white/80">Note:</strong> These resources provide general commercial fuel and petroleum guidance. Contact MDX Fuel directly for product recommendations, delivery scheduling, and account setup specific to your operation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white text-muted-foreground border-border hover:border-accent hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Resource cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col bg-white border border-border shadow-sm rounded-xl overflow-hidden hover:shadow-md hover:border-accent/60 transition-all group"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-10 h-10 bg-primary/5 border border-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <r.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[r.category]}`}>
                      {r.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-base mb-2 leading-snug">{r.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{r.desc}</p>
                  <ul className="space-y-1.5">
                    {r.topics.map(t => (
                      <li key={t} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full mt-1.5 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border px-6 py-3 bg-muted/20">
                  <Link
                    to={r.cta.to}
                    className="text-accent font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider"
                  >
                    {r.cta.label} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-primary rounded-2xl p-10 text-center">
            <h2 className="font-heading text-3xl text-white tracking-wide mb-3">Need Help Planning Fuel Delivery for Your Operation?</h2>
            <p className="text-white/55 text-sm mb-6 max-w-xl mx-auto">
              Contact MDX Fuel directly or submit a quote request. A team member will follow up to discuss your fuel needs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/request-quote">
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 rounded-lg text-sm inline-flex items-center gap-2 transition-colors">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
                  Contact MDX Fuel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-0.5 bg-accent" />
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">FAQ</span>
              <div className="w-6 h-0.5 bg-accent" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-white tracking-wide">Frequently Asked Questions</h2>
            <p className="text-white/55 mt-3 text-sm max-w-xl mx-auto">
              Common questions about commercial fuel delivery, MDX Fuel services, and how to get started.
            </p>
          </div>
          <FAQAccordion dark={true} />
          <div className="mt-10 text-center">
            <p className="text-white/50 text-sm">
              Have a question not answered here?{' '}
              <Link to="/contact" className="text-accent font-semibold hover:underline">
                Contact MDX Fuel directly.
              </Link>
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}