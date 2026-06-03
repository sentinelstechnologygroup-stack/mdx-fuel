import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
const IMAGES = {
  heroTruck: '/images/hero/industries-hero.png',
  constructionSite: '/images/industries/construction-site.png',
  fleetYard: '/images/industries/fleet-yard.png',
  industrialManufacturing: '/images/industries/industrial-manufacturing.png',
  agriculture: '/images/industries/agriculture.png',
  oilfield: '/images/industries/oilfield.png',
  municipalVehicles: '/images/industries/municipal-vehicles.png',
  generatorFueling: '/images/industries/generator-fueling.png',
  commercialFacilities: '/images/industries/commercial-facilities.png',

};


const INDUSTRIES = [
  {
    id: 'construction',
    title: 'Construction',
    image: IMAGES.constructionSite,
    painPoint: 'Construction crews lose productivity when equipment, generators, and job-site tanks are not fueled when needed. Job-site access is often restricted, terrain is challenging, and delivery windows are narrow. Fuel shortfalls stop equipment and delay projects.',
    howMDX: 'MDX Fuel can support job-site fueling, diesel delivery, off-road diesel, lubricants, DEF, and scheduled delivery programs for qualifying commercial customers in Greater Houston and Montgomery County. Contact MDX Fuel to discuss your site requirements.',
    products: ['Off-Road Diesel', 'Diesel Fuel', 'Lubricants & Oils', 'Diesel Exhaust Fluid', 'Fuel Additives'],
    services: ['Job Site Fueling', 'Bulk Fuel Delivery', 'Scheduled Delivery', 'Tank & Equipment Support'],
    useCases: [
      'Scheduled diesel delivery to active construction sites',
      'Off-road diesel for heavy equipment and generators',
      'Lubricant delivery alongside fuel for fleet equipment',
    ],
  },
  {
    id: 'trucking',
    title: 'Trucking & Fleet Operations',
    image: IMAGES.fleetYard,
    painPoint: 'Trucking and transportation fleets operate on tight margins where fuel cost and availability are operational priorities. Sending drivers to public stations wastes time, drains productivity, and adds unpredictable cost variables.',
    howMDX: 'MDX Fuel can support on-site bulk diesel delivery for fleet yards and terminals for qualifying commercial customers. Scheduled delivery programs may be available depending on volume, location, and account setup. Contact MDX Fuel to confirm availability.',
    products: ['Diesel Fuel', 'Gasoline', 'Diesel Exhaust Fluid', 'Lubricants & Oils'],
    services: ['On-Site Fleet Fueling', 'Bulk Fuel Delivery', 'Scheduled Delivery', 'DEF Supply'],
    useCases: [
      'Bulk diesel delivery to fleet yards and terminal locations',
      'Scheduled fueling programs for large carrier fleets',
      'DEF supply alongside diesel for Tier 4 engine compliance',
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    image: IMAGES.industrialManufacturing,
    painPoint: 'Industrial facilities depend on uninterrupted fuel supply for plant operations, backup power, equipment lubrication, and process machinery. Procurement complexity increases when fuel and lubricants are managed through separate vendors.',
    howMDX: 'MDX Fuel can support consolidated petroleum product delivery for industrial facilities — diesel, lubricants, DEF, and related products managed through coordinated delivery schedules for qualifying customers. Contact MDX Fuel to discuss supply requirements.',
    products: ['Diesel Fuel', 'Lubricants & Oils', 'Diesel Exhaust Fluid', 'Bulk Petroleum'],
    services: ['Bulk Fuel Delivery', 'Lubricant Delivery', 'Scheduled Programs', 'Generator Fueling'],
    useCases: [
      'Consolidated diesel and lubricant delivery to industrial facilities',
      'Backup generator diesel supply for manufacturing plants',
      'DEF supply for on-site equipment with SCR systems',
    ],
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    image: IMAGES.agriculture,
    painPoint: 'Agricultural operations depend on tractors, irrigation systems, harvest equipment, and utility vehicles. Fuel is a direct input cost. Remote locations and seasonal demand peaks make consistent supply difficult to manage through retail channels.',
    howMDX: 'MDX Fuel can support off-road diesel delivery to farms and agricultural operations in and around Montgomery County and the Greater Houston region for qualifying commercial customers. Seasonal scheduling available depending on volume and location.',
    products: ['Off-Road Diesel', 'Diesel Fuel', 'Lubricants & Oils', 'Fuel Additives'],
    services: ['Bulk Fuel Delivery', 'Job Site Fueling', 'Scheduled Delivery'],
    useCases: [
      'Off-road diesel delivery aligned to harvest seasons',
      'Lubricant supply for tractors and farm equipment',
      'Bulk fuel delivery to remote agricultural locations',
    ],
  },
  {
    id: 'municipal',
    title: 'Municipal & Government',
    image: IMAGES.municipalVehicles,
    painPoint: 'Municipal fleets, county vehicle pools, public works departments, and government facilities require reliable, compliant fuel supply. Procurement processes require vendor reliability, documentation, and consistent service.',
    howMDX: 'MDX Fuel can support municipal and government fuel needs with scheduled delivery and bulk fuel programs for qualifying public entities in Harris County, Montgomery County, and surrounding Texas markets. Contact MDX Fuel to discuss procurement requirements.',
    products: ['Diesel Fuel', 'Gasoline', 'Off-Road Diesel', 'Diesel Exhaust Fluid'],
    services: ['Bulk Fuel Delivery', 'Scheduled Delivery', 'Account Programs'],
    useCases: [
      'Scheduled fuel delivery for municipal vehicle fleets',
      'Bulk diesel for public works and road maintenance equipment',
      'Government facility generator fueling support',
    ],
  },
  {
    id: 'oilfield',
    title: 'Oilfield / Energy Support',
    image: IMAGES.oilfield,
    painPoint: 'Oilfield and energy sector operations require reliable fuel for drilling equipment, well service vehicles, production machinery, and remote site generators. Supply interruptions in energy operations carry significant operational and financial consequences.',
    howMDX: 'MDX Fuel may support oilfield and energy sector operations with diesel, off-road fuel, and lubricant delivery for field operations and production sites within the service area, depending on location, volume, and scheduling. Contact MDX Fuel to discuss supply requirements.',
    products: ['Diesel Fuel', 'Off-Road Diesel', 'Lubricants & Oils', 'Fuel Additives'],
    services: ['Bulk Fuel Delivery', 'Job Site Fueling', 'Lubricant Delivery'],
    useCases: [
      'Diesel supply for drilling equipment and well service trucks',
      'Lubricant delivery for production and field machinery',
      'Remote site fueling for energy sector operations',
    ],
  },
  {
    id: 'generator',
    title: 'Generator & Backup Power',
    image: IMAGES.generatorFueling,
    painPoint: 'Backup generators are only effective if they have fuel. Commercial buildings, data centers, healthcare facilities, and critical infrastructure sites depend on diesel generator fuel availability — particularly during weather events and grid disruptions common in Texas.',
    howMDX: 'MDX Fuel can support routine tank maintenance fueling and storm-prep delivery for commercial generators across Greater Houston for qualifying commercial customers. MDX Fuel is a local Texas operation. Contact MDX Fuel to confirm availability and scheduling.',
    products: ['Diesel Fuel', 'Fuel Additives'],
    services: ['Generator Fueling', 'Scheduled Delivery', 'Emergency Fuel Support'],
    useCases: [
      'Routine diesel tank top-off for standby generators',
      'Pre-storm generator fueling for commercial facilities',
      'Diesel additive supply for long-term fuel storage stability',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Facilities',
    image: IMAGES.commercialFacilities,
    painPoint: 'Commercial facilities — warehouses, distribution centers, office campuses, retail centers — often manage fuel for backup generators, fleet vehicles, ground maintenance equipment, and service vehicles. Managing multiple fuel needs through retail channels is inefficient.',
    howMDX: 'MDX Fuel can support commercial account programs for facilities requiring ongoing diesel, gasoline, and lubricant supply, depending on location, volume, and account qualification. Consolidated delivery and scheduled service available across Greater Houston.',
    products: ['Diesel Fuel', 'Gasoline', 'Lubricants & Oils', 'Diesel Exhaust Fluid'],
    services: ['Bulk Fuel Delivery', 'Generator Fueling', 'Scheduled Programs', 'Lubricant Delivery'],
    useCases: [
      'Generator and facility backup diesel supply',
      'Consolidated fuel account for warehouses and distribution centers',
      'Lubricant delivery for facility and ground maintenance equipment',
    ],
  },
];

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries Served"
        title="Fuel and Petroleum Solutions Across Texas Industries"
        subtitle="MDX Fuel supports commercial operations in construction, trucking, industrial, agriculture, municipal, energy, and more across Greater Houston."
        breadcrumbs={[{ label: 'Industries' }]}
        bgImage={IMAGES.constructionSite}
      />

      {/* Quick nav */}
      <section className="bg-secondary border-b border-white/10 sticky top-[72px] z-30 overflow-hidden">
        <div className="relative py-3">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-[industry-marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...INDUSTRIES, ...INDUSTRIES].map((industry, index) => (
              <a
                key={`${industry.id}-${index}`}
                href={`#${industry.id}`}
                className="mx-2 text-xs font-semibold text-white/60 hover:text-accent whitespace-nowrap px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors uppercase tracking-wider"
              >
                {industry.title}
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes industry-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`scroll-mt-28 py-16 ${i < INDUSTRIES.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-start`}>
                {/* Image */}
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <img src={industry.image} alt={industry.title} className="rounded-xl shadow-md w-full object-cover h-64 lg:h-80" />
                  {/* Products & Services */}
                  <div className="mt-5 p-5 bg-muted/40 border border-border rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-display font-bold text-foreground text-xs uppercase tracking-wider mb-2">Products</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {industry.products.map(p => (
                          <span key={p} className="bg-primary/5 border border-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-medium">{p}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground text-xs uppercase tracking-wider mb-2">Services</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {industry.services.map(s => (
                          <span key={s} className="bg-accent/10 border border-accent/20 text-amber-800 text-xs px-2.5 py-1 rounded-full font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <h2 className="font-heading text-3xl md:text-4xl text-primary tracking-wide mb-5">{industry.title}</h2>

                  <div className="mb-5 p-4 bg-muted/30 border-l-2 border-accent rounded-r-lg">
                    <div className="flex items-start gap-2 mb-1">
                      <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <h4 className="font-display font-bold text-foreground text-xs uppercase tracking-wider">The Challenge</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{industry.painPoint}</p>
                  </div>

                  <div className="mb-5">
                    <h4 className="font-display font-bold text-foreground text-xs uppercase tracking-wider mb-2">How MDX Fuel May Help</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{industry.howMDX}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-display font-bold text-foreground text-xs uppercase tracking-wider mb-3">Example Use Cases</h4>
                    <ul className="space-y-2">
                      {industry.useCases.map(uc => (
                        <li key={uc} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-muted-foreground/70 text-xs italic mb-4">
                    Service availability depends on location, product type, volume, and scheduling. Contact MDX Fuel to confirm.
                  </p>

                  <Link to="/request-quote">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg gap-2">
                      Request a Quote <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}