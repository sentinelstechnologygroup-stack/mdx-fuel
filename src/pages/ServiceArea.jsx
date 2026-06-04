import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
const IMAGES = {
  heroTruck: '/images/hero/hero-truck.webp',
  constructionSite: '/images/industries/construction-site.webp',
  fleetYard: '/images/industries/fleet-yard.webp',
  agriculture: '/images/industries/agriculture.webp',
  oilfield: '/images/industries/oilfield.webp',
  driver: '/images/services/driver.webp',
  generatorFueling: '/images/services/generator-fueling.webp',
  tankerFilling: '/images/services/tanker-filling.webp',
  lubricants: '/images/products/lubricants.webp',
  storageTanks: '/images/products/storage-tanks.webp',
  houstonAerial: '/images/backgrounds/houston-aerial.webp',
  tomballCommercial: '/images/backgrounds/tomball-commercial.webp',
  dieselFuel: '/images/hero/hero-truck.webp',
  offRoadDiesel: '/images/industries/construction-site.webp',
  gasoline: '/images/industries/fleet-yard.webp',
  dieselExhaustFluid: '/images/products/storage-tanks.webp',
  fuelAdditives: '/images/products/lubricants.webp',
  bulkPetroleum: '/images/services/tanker-filling.webp',
  specialtyPetroleum: '/images/industries/oilfield.webp',
};


const PRIMARY_AREAS = [
  {
    name: 'Tomball',
    county: 'Harris County',
    note: 'MDX Fuel is based in Tomball, Texas. Our primary operations and dispatch serve Tomball and surrounding communities first.',
    primary: true,
  },
  {
    name: 'Spring',
    county: 'Harris County',
    note: 'Commercial fuel delivery to Spring, TX businesses, fleets, and job sites — including the Spring / North Houston commercial corridor.',
  },
  {
    name: 'The Woodlands',
    county: 'Montgomery County',
    note: 'Fuel and petroleum product delivery for commercial operations in The Woodlands and surrounding Montgomery County communities.',
  },
  {
    name: 'Cypress',
    county: 'Harris County',
    note: 'Northwest Houston and Cypress area commercial fuel delivery for contractors, fleets, and industrial businesses.',
  },
  {
    name: 'Conroe',
    county: 'Montgomery County',
    note: 'Commercial fuel delivery to Conroe, TX and the broader Conroe / Montgomery County market.',
  },
  {
    name: 'Humble',
    county: 'Harris County',
    note: 'Northeast Houston and Humble area fuel delivery for fleets, job sites, and commercial facilities.',
  },
  {
    name: 'Magnolia',
    county: 'Montgomery County',
    note: 'Fuel delivery to Magnolia and western Montgomery County commercial customers.',
  },
  {
    name: 'Katy',
    county: 'Harris County / Fort Bend',
    note: 'Western Houston and Katy area commercial fuel delivery for fleets, job sites, and facilities.',
  },
  {
    name: 'Pearland',
    county: 'Brazoria County',
    note: 'Southern Houston and Pearland area commercial fuel delivery. Contact MDX Fuel to confirm availability.',
  },
  {
    name: 'Houston',
    county: 'Harris County',
    note: 'MDX Fuel serves commercial fuel and petroleum product customers throughout the Greater Houston metropolitan area.',
  },
];

const COUNTY_AREAS = [
  {
    name: 'Harris County',
    desc: 'MDX Fuel serves commercial customers throughout Harris County, including north, northwest, northeast, and central Houston markets.',
  },
  {
    name: 'Montgomery County',
    desc: 'We serve commercial fuel and petroleum needs across Montgomery County — including The Woodlands, Conroe, Magnolia, and surrounding areas.',
  },
  {
    name: 'Greater Houston Region',
    desc: 'Broader Greater Houston region service available for qualifying commercial customers. Contact MDX Fuel to discuss your delivery address.',
  },
];

export default function ServiceArea() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title="Fuel Delivery Across Tomball, Greater Houston, and Surrounding Texas Markets"
        subtitle="MDX Fuel is based in Tomball, Texas and delivers commercial fuel and petroleum products to businesses throughout Harris County, Montgomery County, and the Greater Houston region."
        breadcrumbs={[{ label: 'Service Area' }]}
        bgImage={IMAGES.houstonAerial}
      />

      {/* Intro section */}
      <section className="py-16 bg-muted/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-accent" />
                <span className="text-accent font-semibold text-xs uppercase tracking-widest">Based in Tomball, TX</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-primary tracking-wide leading-tight mb-5">
                Local Texas Fuel Delivery, Not a National Call Center
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                MDX Fuel is a Tomball-based commercial fuel distribution company — not a national brand routing orders through a regional dispatch. When you contact MDX Fuel, you're working with a local team that knows the Greater Houston commercial market and operates within it every day.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Our primary service area covers Tomball, Spring, The Woodlands, Cypress, Conroe, Humble, Magnolia, Katy, and Greater Houston across Harris County and Montgomery County. For businesses outside these core areas, contact MDX Fuel to discuss your delivery location.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Commercial fuel delivery, bulk petroleum distribution, lubricants, and diesel exhaust fluid — delivered to your fleet yard, construction site, industrial facility, or generator pad.
              </p>
              <Link to="/request-quote">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg gap-2">
                  Request Delivery Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div>
              <img
                src={IMAGES.houstonAerial}
                alt="Aerial view of Greater Houston Texas service area"
                className="rounded-xl shadow-md w-full object-cover h-72 mb-6"
              />
              <div className="bg-primary rounded-xl p-6">
                <h3 className="font-heading text-xl text-white tracking-wide mb-1">Primary Service Area</h3>
                <p className="text-white/50 text-sm mb-4">Harris County · Montgomery County · Greater Houston Region</p>
                <div className="grid grid-cols-2 gap-2">
                  {PRIMARY_AREAS.map(a => (
                    <div key={a.name} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${a.primary ? 'bg-accent/20 text-accent' : 'bg-white/5 text-white/70'}`}>
                      <MapPin className="w-3 h-3 shrink-0" />
                      {a.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual area cards */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-primary tracking-wide">Fuel Delivery Service Areas</h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-2xl mx-auto">
              MDX Fuel delivers commercial fuel and petroleum products to businesses in the following communities and regions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRIMARY_AREAS.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`bg-white rounded-xl border p-6 ${area.primary ? 'border-accent' : 'border-border'}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${area.primary ? 'bg-accent/15' : 'bg-muted'}`}>
                    <MapPin className={`w-4 h-4 ${area.primary ? 'text-accent' : 'text-muted-foreground'}`} />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-sm ${area.primary ? 'text-accent' : 'text-foreground'}`}>
                      {area.name} {area.primary && '★'}
                    </h3>
                    <p className="text-muted-foreground text-xs">{area.county}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* County coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl text-primary tracking-wide mb-8 text-center">County Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {COUNTY_AREAS.map(c => (
              <div key={c.name} className="bg-primary rounded-xl p-7">
                <CheckCircle className="w-7 h-7 text-accent mb-3" />
                <h3 className="font-heading text-xl text-white tracking-wide mb-2">{c.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confirm availability notice */}
      <section className="py-12 bg-accent/5 border-y border-accent/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-foreground font-semibold text-base mb-2">Not sure if MDX Fuel serves your location?</p>
          <p className="text-muted-foreground text-sm mb-4">
            Contact MDX Fuel to confirm service availability for your delivery address. Service depends on product type, delivery location, volume, and scheduling.
          </p>
          <Link to="/contact">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-2.5 rounded-lg text-sm inline-flex items-center gap-2 transition-colors">
              Confirm Service Availability <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* SEO content */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-2xl text-primary tracking-wide mb-6">Commercial Fuel Delivery in the Greater Houston Area</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>MDX Fuel provides commercial fuel delivery and petroleum product distribution for businesses operating across Tomball, Greater Houston, and surrounding Texas markets. Our service area is focused on commercial, industrial, and fleet-scale customers in Harris County and Montgomery County.</p>
            <p>If you're searching for fuel delivery in Tomball TX, bulk diesel delivery in Houston, commercial fuel delivery in Spring or The Woodlands, or a petroleum product distributor serving Montgomery County — MDX Fuel is a local Texas operator positioned to serve your commercial fuel needs.</p>
            <p>Our services include bulk diesel delivery, on-site fleet fueling, off-road diesel delivery, generator fueling, lubricant delivery, diesel exhaust fluid supply, and fuel management support for commercial operations across the Greater Houston region.</p>
            <p>To confirm service availability for your location or to request a commercial fuel delivery quote, contact MDX Fuel or use our online quote request form.</p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}