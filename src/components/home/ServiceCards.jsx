import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Truck, Calendar, Users, HardHat, Zap, AlertTriangle,
  Droplets, Package, Settings, Container, ArrowRight,
} from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const SERVICES = [
  {
    icon: Truck,
    title: 'Bulk Fuel Delivery',
    short: 'High-volume diesel, gasoline, and petroleum product delivery to commercial storage tanks and job site equipment.',
    helps: 'Fleets, industrial facilities, job sites',
    benefit: 'Consistent supply without managing your own logistics',
    cta: '/request-quote',
  },
  {
    icon: Calendar,
    title: 'Scheduled Fuel Delivery',
    short: 'Recurring delivery programs for qualifying commercial customers — structured around your tank capacity and fuel consumption.',
    helps: 'High-volume operations, fleet yards, facilities',
    benefit: 'Reduces emergency calls and keeps tanks above minimum',
    cta: '/request-quote',
  },
  {
    icon: Users,
    title: 'On-Site Fleet Fueling',
    short: 'Fuel delivered directly to your fleet yard or staging area. Supports commercial vehicles, heavy equipment, and mixed-use fleets.',
    helps: 'Trucking companies, contractors, logistics operators',
    benefit: 'Eliminates driver time at retail fuel stops',
    cta: '/services#fleet',
  },
  {
    icon: HardHat,
    title: 'Job Site Fueling',
    short: 'Off-road diesel, on-road diesel, and petroleum products delivered to active construction, energy, and industrial job sites.',
    helps: 'General contractors, earthwork crews, energy operators',
    benefit: 'Equipment stays running — fuel comes to your site',
    cta: '/services#jobsite',
  },
  {
    icon: Zap,
    title: 'Generator Fueling',
    short: 'Diesel delivery to backup generators for commercial facilities, data centers, hospitals, and critical infrastructure.',
    helps: 'Facility managers, industrial operators, municipalities',
    benefit: 'Generator tanks maintained before and during outages',
    cta: '/services#generator',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Fuel Support',
    short: 'MDX Fuel may support urgent fuel needs depending on location, product availability, and capacity. Contact MDX Fuel to confirm availability.',
    helps: 'Businesses facing supply disruptions or urgent delivery needs',
    benefit: 'Local partner to call when standard supply fails',
    cta: '/contact',
  },
  {
    icon: Droplets,
    title: 'Lubricant Delivery',
    short: 'Commercial motor oils, hydraulic fluids, gear oils, and greases for fleet, industrial, and equipment maintenance programs.',
    helps: 'Fleets, maintenance shops, industrial facilities',
    benefit: 'Single-source petroleum procurement with fuel orders',
    cta: '/products#lubricants',
  },
  {
    icon: Package,
    title: 'DEF Delivery',
    short: 'Diesel exhaust fluid supply for Tier 4 and SCR-equipped diesel engines. Bulk and packaged available for qualifying customers.',
    helps: 'Modern diesel fleets and equipment operators',
    benefit: 'Prevents DEF-related engine shutdowns and compliance issues',
    cta: '/products#def',
  },
  {
    icon: Settings,
    title: 'Fuel Management Support',
    short: 'Guidance on fuel consumption tracking, delivery scheduling, and tank management for commercial operations.',
    helps: 'Multi-site operators, fleet managers, facility directors',
    benefit: 'Better visibility into fuel usage and supply planning',
    cta: '/services#management',
  },
  {
    icon: Container,
    title: 'Tank & Equipment Support',
    short: 'MDX Fuel can assist with information about temporary and permanent fuel storage solutions for commercial operations.',
    helps: 'Job sites, fleet yards, industrial facilities',
    benefit: 'Infrastructure support as part of your fuel program',
    cta: '/contact',
  },
];

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="What We Do"
            title="Commercial Fuel and Petroleum Services"
            subtitle="Delivery programs, on-site fueling, and petroleum product support for businesses across Greater Houston."
            align="left"
          />
          <Link
            to="/services"
            className="shrink-0 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all uppercase tracking-wider"
          >
            All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex flex-col bg-muted/40 border border-border rounded-xl overflow-hidden hover:border-accent/60 hover:shadow-md hover:bg-white transition-all group"
            >
              <div className="p-5 flex-1">
                <div className="w-9 h-9 bg-primary/8 border border-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground text-sm mb-2 leading-snug">{s.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">{s.short}</p>
                <div className="space-y-1.5">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Helps: </span>{s.helps}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Benefit: </span>{s.benefit}
                  </div>
                </div>
              </div>
              <div className="border-t border-border px-5 py-3 bg-muted/20">
                <Link
                  to={s.cta}
                  className="text-accent font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider"
                >
                  {s.cta === '/contact' ? 'Contact MDX Fuel' : s.cta.includes('quote') ? 'Request Quote' : 'Learn More'}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}