import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/images';

const INDUSTRIES = [
  'Contractors & Construction',
  'Commercial Fleet Operations',
  'Construction Site Fueling',
  'Industrial Operators',
  'Municipal & Government',
  'Agriculture Operations',
  'Emergency & Disaster Response',
  'Commercial Facilities',
];

export default function DowntimeBand() {
  return (
    <section className="relative py-20 overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img src={IMAGES.constructionSite} alt="" className="w-full h-full object-cover opacity-15" aria-hidden="true" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="absolute left-0 top-0 w-1.5 h-full bg-accent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-accent" />
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">Who We Serve</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white tracking-wide leading-tight mb-5">
              Fuel and Petroleum Products for Businesses That Cannot Afford Downtime
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              MDX Fuel supports operations where fuel interruption is not an option. Whether you're running a job site in Montgomery County, managing a commercial fleet in Spring, or maintaining a backup generator in The Woodlands — we provide reliable, scheduled fuel delivery and petroleum product distribution across the Greater Houston area.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Our focus is commercial, industrial, and fleet-scale operations. We're built for businesses that need consistency, volume, and a dependable local partner — not one-time fill-ups.
            </p>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all uppercase tracking-wider"
            >
              View Industries We Serve <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            {INDUSTRIES.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}