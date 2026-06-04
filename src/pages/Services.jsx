import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
const IMAGES = {
  heroTruck: '/images/hero/services-hero.webp',
  bulkfueldelivery: '/images/services/bulk-fuel-delivery.webp',
  fleetYard: '/images/services/fleet-yard.webp',
  jobSite: '/images/services/construction-site.webp',
  oilfield: '/images/services/generator-fueling.webp',
  driver: '/images/services/driver.webp',
  generatorFueling: '/images/services/generator-fueling.webp',
  emergencyFuel: '/images/services/emergency-fuel-support.webp',
  lubricants: '/images/services/lubricants.webp',
  dieselExhaustFluid: '/images/services/def.webp',
  fuelMonitoringSystem: '/images/services/fuel-monitoring-system.webp',
  storageTanks: '/images/services/storage-tanks.webp',
};


const SERVICES = [
  {
    id: 'bulk',
    title: 'Bulk Fuel Delivery',
    badge: 'Core Service',
    image: IMAGES.bulkfueldelivery,
    description: 'MDX Fuel provides bulk diesel and gasoline delivery for commercial customers requiring high-volume, frequent, or scheduled fuel supply. We deliver directly to fleet yards, facilities, tank farms, and large-scale operations across Greater Houston and surrounding markets.',
    whoItHelps: ['Fleet operators and trucking companies', 'Industrial facilities with on-site storage', 'Commercial facilities managing large fuel inventory', 'Multi-site business operations'],
    benefits: 'Consistent supply at scale without the overhead of managing multiple vendors. Competitive pricing for volume customers, reliable scheduling, and a dedicated account team that knows your operation.',
  },
  {
    id: 'fleet',
    title: 'On-Site Fleet Fueling',
    badge: 'Mobile Service',
    image: IMAGES.fleetYard,
    description: 'MDX Fuel brings fuel directly to your fleet — at your yard, facility, or job site. Mobile fueling eliminates the time and cost of sending vehicles to public fuel stations, reducing downtime and improving operational efficiency for mixed and heavy-duty fleets.',
    whoItHelps: ['Truck and transportation fleets', 'Construction and service vehicle fleets', 'Government and municipal vehicle pools', 'Mixed commercial vehicle operations'],
    benefits: 'Vehicles stay at your facility. Drivers stay on route. Operational time is preserved. On-site fueling works around your schedule — not around station hours.',
  },
  {
    id: 'jobsite',
    title: 'Job Site Fueling',
    badge: 'Construction',
    image: IMAGES.jobSite,
    description: 'Construction job sites require fuel for excavators, loaders, compactors, generators, and service vehicles — often across remote or restricted access locations. MDX Fuel delivers diesel and off-road fuel directly to active job sites in the Greater Houston area, keeping heavy equipment running.',
    whoItHelps: ['General contractors', 'Site development companies', 'Civil construction operations', 'Sub-contractors with heavy equipment'],
    benefits: 'No fuel haul-offs, no project delays, no lost equipment hours. MDX Fuel coordinates deliveries around your site schedule and access requirements.',
  },
  {
    id: 'generator',
    title: 'Generator Fueling',
    badge: 'Critical Power',
    image: IMAGES.generatorFueling,
    description: 'Backup generators are only as reliable as their fuel supply. MDX Fuel provides diesel delivery for standby and prime-power generators at commercial buildings, data centers, healthcare facilities, emergency response operations, and industrial sites. We support both routine tank maintenance and emergency pre-storm fueling.',
    whoItHelps: ['Commercial building owners and managers', 'Data centers and co-location facilities', 'Healthcare and emergency services', 'Industrial facilities with backup power systems'],
    benefits: 'When the grid goes down, your generator needs to be ready. MDX Fuel ensures your tank is full before storm season and responds quickly when demand increases.',
  },
  {
    id: 'emergency',
    title: 'Emergency Fuel Support',
    badge: 'Rapid Response',
    image: IMAGES.emergencyFuel,
    description: 'Natural disasters, severe weather, infrastructure failures, and operational emergencies create immediate fuel demand. MDX Fuel provides emergency fuel delivery to support disaster recovery operations, continuity-of-operations planning, and critical infrastructure fueling during high-demand events.',
    whoItHelps: ['Emergency management operations', 'Critical infrastructure operators', 'Commercial businesses during weather events', 'Industrial facilities in recovery mode'],
    benefits: 'Rapid response when it matters most. MDX Fuel is a local Texas operation — positioned to serve Greater Houston markets during regional weather and disaster events where national suppliers cannot respond.',
  },
  {
    id: 'lubricants',
    title: 'Lubricant Delivery',
    badge: 'Full Product Line',
    image: IMAGES.lubricants,
    description: 'MDX Fuel delivers motor oils, hydraulic fluids, gear oils, greases, and specialty lubricants alongside or separately from fuel orders. Consolidated petroleum procurement through a single vendor simplifies purchasing, reduces deliveries, and improves inventory management.',
    whoItHelps: ['Fleet maintenance shops', 'Construction equipment operators', 'Industrial facilities managing lubricant inventory', 'Agricultural operations'],
    benefits: 'One vendor for fuel and lubricants. Combined delivery schedules. Simplified ordering and invoicing. Product support for selecting the right lubricant for your equipment.',
  },
  {
    id: 'def',
    title: 'DEF Delivery',
    badge: 'Compliance',
    image: IMAGES.dieselExhaustFluid,
    description: "Diesel Exhaust Fluid is required for Tier 4 compliant diesel equipment and modern SCR systems. Running low on DEF stops equipment in its tracks. MDX Fuel provides DEF in bulk totes, drums, and packaged containers — delivered on schedule so your fleet stays compliant and operational.",
    whoItHelps: ['Operators of Tier 4 diesel equipment', 'Commercial fleets with SCR-equipped trucks', 'Construction companies with modern equipment'],
    benefits: 'Avoid costly downtime from DEF depletion. Bulk and packaged options available on your schedule or combined with fuel deliveries.',
  },
  {
    id: 'management',
    title: 'Fuel Management Support',
    badge: 'Operational',
    image: IMAGES.fuelMonitoringSystem,
    description: 'MDX Fuel provides structured fuel management support to help commercial operations manage inventory, reduce waste, and maintain consistent supply. From scheduled delivery programs to tank monitoring assistance, we help businesses take a more systematic approach to fuel procurement.',
    whoItHelps: ['Operations managers', 'Fleet managers managing multi-vehicle fuel supply', 'Facility managers with on-site fuel storage'],
    benefits: 'Predictable delivery schedules. Reduced risk of fuel shortfall or inventory gaps. A fuel partner that helps you plan, not just respond.',
  },
  {
    id: 'tanks',
    title: 'Tank & Equipment Support',
    badge: 'Infrastructure',
    image: IMAGES.storageTanks,
    description: 'MDX Fuel can assist commercial customers with portable and above-ground fuel storage tank sourcing, setup coordination, and ongoing supply for tanks on-site. Proper fuel storage infrastructure is essential for businesses that depend on continuous fuel availability.',
    whoItHelps: ['Businesses needing on-site fuel storage', 'Job sites requiring temporary storage tanks', 'Industrial facilities expanding storage capacity'],
    benefits: 'Right-sized storage for your volume. Coordination of delivery schedules to match storage capacity. Support from a fuel supplier that knows your infrastructure.',
  },
];

function ServiceSection({ service, reversed }) {
  return (
    <div id={service.id} className="scroll-mt-24">
      <div className={`grid lg:grid-cols-2 gap-12 items-start ${reversed ? '' : ''}`}>
        <div className={reversed ? 'lg:order-2' : ''}>
          <img
            src={service.image}
            alt={service.title}
            className="rounded-xl shadow-md w-full object-cover h-64"
          />
        </div>
        <div className={reversed ? 'lg:order-1' : ''}>
          <div className="inline-block bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            {service.badge}
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-primary tracking-wide mb-4">{service.title}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>

          <div className="mb-5">
            <h4 className="font-display font-bold text-foreground text-xs uppercase tracking-wider mb-3">Who This Serves</h4>
            <ul className="space-y-1.5">
              {service.whoItHelps.map(w => (
                <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6">
            <h4 className="font-display font-bold text-foreground text-xs uppercase tracking-wider mb-1">Operational Benefit</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.benefits}</p>
          </div>

          <Link to="/request-quote">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg gap-2">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Commercial Fuel Delivery and Petroleum Support Services"
        subtitle="Scheduled delivery, bulk fuel, on-site fueling, emergency response, and petroleum management — built for Texas commercial operations."
        breadcrumbs={[{ label: 'Services' }]}
        bgImage={IMAGES.heroTruck}
      />

      <section className="bg-secondary border-b border-white/10 sticky top-[72px] z-30 overflow-hidden">
        <div className="relative py-3">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-[service-marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...SERVICES, ...SERVICES].map((service, index) => (
              <a
                key={`${service.id}-${index}`}
                href={`#${service.id}`}
                className="mx-2 text-xs font-semibold text-white/60 hover:text-accent whitespace-nowrap px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors uppercase tracking-wider"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes service-marquee {
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
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ServiceSection service={service} reversed={i % 2 !== 0} />
              {i < SERVICES.length - 1 && <div className="mt-24 border-t border-border" />}
            </motion.div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}