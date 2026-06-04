import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
const IMAGES = {
  heroTruck: '/images/hero/products-hero.webp',
  dieselFuel: '/images/products/diesel-fuel.webp',
  offRoadDiesel: '/images/products/off-road-diesel.webp',
  gasoline: '/images/products/gasoline.webp',
  lubricants: '/images/products/lubricants.webp',
  dieselExhaustFluid: '/images/products/def.webp',
  fuelAdditives: '/images/products/fuel-additives.webp',
  bulkPetroleum: '/images/products/tanker-filling.webp',
  
  specialtyPetroleum: '/images/products/oilfield.webp',
};


const PRODUCTS = [
  {
    id: 'diesel',
    title: 'Diesel Fuel',
    subtitle: 'On-highway diesel for commercial fleets and transportation',
    image: IMAGES.dieselFuel,
    fallbackImage: IMAGES.heroTruck,
    description: 'MDX Fuel supplies commercial-grade on-highway diesel fuel for trucking fleets, transportation companies, and heavy-duty commercial vehicles operating across the Greater Houston region. We offer scheduled delivery, will-call fueling, and bulk supply options.',
    uses: ['Commercial truck fleets', 'Transportation and logistics companies', 'Delivery vehicles and service fleets', 'Mixed commercial vehicle operations'],
    customers: ['Trucking companies', 'Fleet managers', 'Logistics operators', 'Transportation contractors'],
    delivery: 'Bulk delivery, scheduled routes, and emergency supply available.',
  },
  {
    id: 'off-road',
    title: 'Off-Road Diesel',
    subtitle: 'Tax-advantaged dyed diesel for construction and industrial equipment',
    image: IMAGES.offRoadDiesel,
    fallbackImage: IMAGES.constructionSite,
    description: 'Off-road diesel (dyed diesel) is the tax-exempt diesel fuel used in non-road equipment — construction machinery, agricultural equipment, generators, and industrial operations. MDX Fuel delivers off-road diesel directly to job sites, farms, and facility yards across Tomball and Greater Houston.',
    uses: ['Construction equipment and machinery', 'Agricultural equipment', 'Industrial generators', 'Non-road fleet operations'],
    customers: ['Construction contractors', 'Agricultural operations', 'Industrial facilities', 'Generator operators'],
    delivery: 'Direct job site delivery. Scheduled and on-demand available.',
  },
  {
    id: 'gasoline',
    title: 'Gasoline',
    subtitle: 'Regular and premium gasoline for commercial and fleet use',
    image: IMAGES.gasoline,
    fallbackImage: IMAGES.fleetYard,
    description: 'MDX Fuel delivers regular and premium gasoline for mixed commercial fleets, service vehicles, and commercial facilities requiring gasoline supply at scale. Available in bulk delivery for commercial storage and operations.',
    uses: ['Mixed fleet vehicle operations', 'Service and utility vehicles', 'Commercial facility supply', 'Light commercial vehicle fleets'],
    customers: ['Fleet managers with mixed fleets', 'Commercial facility operators', 'Service contractors'],
    delivery: 'Bulk gasoline delivery to approved storage tanks.',
  },
  {
    id: 'lubricants',
    title: 'Lubricants & Oils',
    subtitle: 'Motor oils, hydraulic fluids, gear oils, and greases',
    image: IMAGES.lubricants,
    fallbackImage: IMAGES.lubricants,
    description: 'MDX Fuel supplies a comprehensive range of industrial and commercial lubricants from trusted manufacturers. From engine oils to hydraulic fluids, we deliver to job sites, fleet shops, and industrial facilities. Our lubricant line complements fuel delivery for consolidated petroleum procurement.',
    uses: ['Equipment and engine lubrication', 'Hydraulic systems maintenance', 'Gear and transmission lubrication', 'Heavy equipment servicing'],
    customers: ['Construction equipment operators', 'Fleet maintenance shops', 'Industrial facilities', 'Agricultural operations'],
    delivery: 'Packaged and bulk delivery. Combined delivery with fuel orders available.',
  },
  {
    id: 'def',
    title: 'Diesel Exhaust Fluid',
    subtitle: 'DEF supply for Tier 4 and SCR-equipped diesel engines',
    image: IMAGES.dieselExhaustFluid,
    fallbackImage: IMAGES.generatorFueling,
    description: 'Diesel Exhaust Fluid (DEF) is required by modern Tier 4 diesel engines and SCR emission systems. MDX Fuel provides DEF in bulk totes, drums, and packaged containers — delivered to your fleet yard, job site, or facility to keep your equipment running compliant and clean.',
    uses: ['Tier 4 diesel engine compliance', 'SCR-equipped heavy equipment', 'Commercial truck fleets', 'Construction and industrial machinery'],
    customers: ['Fleet operators', 'Construction companies', 'Industrial equipment operators'],
    delivery: 'Bulk totes, drums, and packaged delivery available.',
  },
  {
    id: 'additives',
    title: 'Fuel Additives',
    subtitle: 'Performance and stability additives for diesel and gasoline',
    image: IMAGES.fuelAdditives,
    fallbackImage: IMAGES.storageTanks,
    description: 'MDX Fuel supplies fuel additives for commercial operations including cetane improvers, anti-gel formulas, fuel stabilizers, injector cleaners, and storage tank conditioners. Additives help maintain fuel quality, extend equipment life, and improve performance — especially important for stored fuel and cold weather operations.',
    uses: ['Cold weather diesel treatment', 'Stored fuel stability', 'Engine performance optimization', 'Tank condition maintenance'],
    customers: ['Fleet operators', 'Facility managers', 'Construction companies', 'Agricultural operations'],
    delivery: 'Available with fuel delivery or as standalone supply order.',
  },
  {
    id: 'bulk',
    title: 'Bulk Petroleum Products',
    subtitle: 'High-volume petroleum distribution for industrial and commercial facilities',
    image: IMAGES.bulkPetroleum,
    fallbackImage: IMAGES.tankerFilling,
    description: 'For operations requiring high-volume and high-frequency petroleum product supply, MDX Fuel provides structured bulk distribution programs. We work with industrial facilities, large commercial operations, and distribution-scale customers to develop delivery schedules and supply agreements.',
    uses: ['Large industrial facilities', 'Commercial fleet operations', 'Multi-site business operations', 'Distribution centers and warehouses'],
    customers: ['Industrial plant operators', 'Large fleet managers', 'Multi-location businesses'],
    delivery: 'Structured bulk delivery programs. Contact MDX Fuel to discuss volume requirements.',
  },
  {
    id: 'specialty',
    title: 'Specialty Petroleum Products',
    subtitle: 'Specialty products for unique operational requirements',
    image: IMAGES.specialtyPetroleum,
    fallbackImage: IMAGES.oilfield,
    description: 'MDX Fuel can source specialty petroleum products for unique commercial and industrial needs. Contact our team to discuss your specific product requirements, and we will work to identify the right supply solution for your operation.',
    uses: ['Specialty industrial applications', 'Oilfield and energy sector', 'Unique commercial requirements'],
    customers: ['Industrial operators', 'Oilfield and energy companies', 'Specialty commercial users'],
    delivery: 'Contact MDX Fuel to discuss specialty product availability and delivery options.',
  },
];

function ProductSection({ product }) {
  return (
    <div id={product.id} className="scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <img
            src={product.image}
            alt={product.title}
            onError={(event) => {
              if (product.fallbackImage && event.currentTarget.src !== product.fallbackImage) {
                event.currentTarget.src = product.fallbackImage;
              }
            }}
            className="rounded-xl shadow-md w-full object-cover h-64 lg:h-72"
          />
        </div>
        <div>
          <div className="inline-block bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            {product.subtitle}
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-primary tracking-wide mb-4">{product.title}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-display font-bold text-foreground text-sm mb-3 uppercase tracking-wider">Common Uses</h4>
              <ul className="space-y-2">
                {product.uses.map(use => (
                  <li key={use} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    {use}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-foreground text-sm mb-3 uppercase tracking-wider">Who We Serve</h4>
              <ul className="space-y-2">
                {product.customers.map(c => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6">
            <h4 className="font-display font-bold text-foreground text-xs uppercase tracking-wider mb-1">Delivery Options</h4>
            <p className="text-muted-foreground text-sm">{product.delivery}</p>
          </div>

          <Link to="/request-quote">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg gap-2">
              Request Quote for {product.title} <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Petroleum Products for Every Commercial Need"
        subtitle="Diesel, off-road fuel, gasoline, lubricants, DEF, and more — delivered to your fleet yard, job site, generator, or facility across Greater Houston."
        breadcrumbs={[{ label: 'Products' }]}
        bgImage={IMAGES.storageTanks}
      />

      {/* Product nav */}
      <section className="bg-secondary border-b border-white/10 sticky top-[72px] z-30 overflow-hidden">
        <div className="relative py-3">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-[product-marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...PRODUCTS, ...PRODUCTS].map((product, index) => (
              <a
                key={`${product.id}-${index}`}
                href={`#${product.id}`}
                className="mx-2 text-xs font-semibold text-white/60 hover:text-accent whitespace-nowrap px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors uppercase tracking-wider"
              >
                {product.title}
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes product-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProductSection product={product} />
              {i < PRODUCTS.length - 1 && <div className="mt-24 border-t border-border" />}
            </motion.div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}