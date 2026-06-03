import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
import SectionHeader from '@/components/shared/SectionHeader';
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


const DIFFERENTIATORS = [
  {
    title: 'Local Tomball / Houston-Area Operation',
    desc: 'MDX Fuel operates in the same markets we serve. Our team is based in Tomball, Texas — not managing accounts from a distant corporate office. Local presence means faster response, better market knowledge, and a partner who understands the operational realities of doing business in Greater Houston.',
  },
  {
    title: 'Commercial and Industrial Focus',
    desc: "We're structured for business customers — not consumer fill-ups. Our systems, pricing, delivery programs, and account management are built for commercial fleets, job sites, industrial facilities, and operations that depend on consistent petroleum product supply.",
  },
  {
    title: 'Safety-First Delivery Culture',
    desc: 'Every MDX Fuel delivery is executed with proper safety protocols, trained personnel, and correct handling procedures for petroleum product transport. We take compliance and safe delivery seriously — because our customers and the public depend on it.',
  },
  {
    title: 'Flexible, Customer-Structured Service',
    desc: "We don't force customers into one-size-fits-all delivery programs. We work to understand your operation, volume requirements, scheduling needs, and product mix — then build a supply arrangement that fits your business, not ours.",
  },
  {
    title: 'Single-Source Petroleum Procurement',
    desc: 'From diesel and gasoline to lubricants, DEF, and additives — MDX Fuel can consolidate your petroleum procurement into a single vendor relationship. Fewer invoices, fewer contacts, and a fuel partner who knows your full product needs.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About MDX Fuel"
        title="Local Fuel and Petroleum Distribution Built for Texas Businesses"
        subtitle="MDX Fuel is a Tomball-based commercial fuel distribution company focused on reliable, safe, and responsive petroleum product service across Greater Houston and surrounding markets."
        breadcrumbs={[{ label: 'About' }]}
        bgImage={IMAGES.driver}
      />

      {/* Who we are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeader
                eyebrow="Who We Are"
                title="A Commercial Fuel Distributor Serving the Greater Houston Market"
                align="left"
              />
              <div className="mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  MDX Fuel is a commercial fuel and petroleum product distribution company based in Tomball, Texas. We serve businesses across Greater Houston, Montgomery County, Harris County, and surrounding Texas markets that require dependable fuel delivery, bulk petroleum supply, and petroleum product support.
                </p>
                <p>
                  Our focus is straightforward: deliver the right fuel products, to the right location, at the right time — with the communication, safety, and commercial structure that business customers require.
                </p>
                <p>
                  MDX Fuel serves contractors, fleet operators, industrial facilities, agricultural operations, municipal customers, generator operators, and commercial businesses that need a consistent, local petroleum product partner — not a national call center with a local phone number.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Based In', value: 'Tomball, Texas' },
                  { label: 'Service Area', value: 'Greater Houston' },
                  { label: 'Counties Served', value: 'Harris & Montgomery + Surrounding' },
                  { label: 'Operation Type', value: 'Commercial & Industrial' },
                ].map(item => (
                  <div key={item.label} className="bg-muted/40 rounded-lg p-4">
                    <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="font-display font-bold text-foreground text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src={IMAGES.driver}
                alt="MDX Fuel professional delivery team"
                className="rounded-xl shadow-lg w-full object-cover h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we serve */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="What We Serve"
            title="Products and Services for Commercial Operations"
            align="center"
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Bulk Diesel Fuel Delivery',
              'Off-Road Diesel for Job Sites',
              'Gasoline Supply',
              'On-Site Fleet Fueling',
              'Generator Fueling',
              'Emergency Fuel Response',
              'Lubricants & Oils',
              'Diesel Exhaust Fluid',
              'Fuel Additives',
              'Tank & Equipment Support',
              'Fuel Management Programs',
              'Commercial Account Programs',
            ].map(item => (
              <div key={item} className="bg-white border border-border rounded-lg px-4 py-3 flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <SectionHeader
              eyebrow="What Makes MDX Fuel Different"
              title="Built for Commercial Operations. Focused on Reliability."
              align="left"
            />
          </div>
          <div className="space-y-8">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-5 pb-8 border-b border-border last:border-0"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-heading text-accent text-lg">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2">{d.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl text-white tracking-wide mb-5">
                Safety and Reliability Are Not Optional
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Petroleum product delivery involves hazardous materials, strict transport regulations, and the need for consistent compliance. MDX Fuel takes safety seriously at every stage — from product handling and vehicle maintenance to driver training and delivery execution.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                We communicate proactively with customers about delivery timing, product specifications, and any operational issues. Reliability is built into how we operate — not just how we market ourselves.
              </p>
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg gap-2">
                  Contact MDX Fuel <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div>
              <img
                src={IMAGES.tankerFilling}
                alt="MDX Fuel safe delivery operations"
                className="rounded-xl shadow-lg w-full object-cover h-72"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}