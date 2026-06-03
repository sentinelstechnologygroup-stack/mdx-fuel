import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/images';

const AREAS = [
  { name: 'Tomball', primary: true, note: 'Headquarters' },
  { name: 'Houston', note: 'Greater Houston' },
  { name: 'Spring', note: 'North Houston' },
  { name: 'The Woodlands', note: 'Montgomery Co.' },
  { name: 'Cypress', note: 'NW Houston' },
  { name: 'Conroe', note: 'Montgomery Co.' },
  { name: 'Humble', note: 'NE Houston' },
  { name: 'Magnolia', note: 'Montgomery Co.' },
  { name: 'Katy', note: 'W Houston' },
  { name: 'Pearland', note: 'S Houston' },
  { name: 'Harris County', note: 'County-wide' },
  { name: 'Montgomery County', note: 'County-wide' },
];

export default function ServiceAreaStrip() {
  return (
    <section className="py-20 bg-muted/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-accent" />
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">Service Area</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-primary tracking-wide leading-tight mb-5">
              Fuel Delivery Across Tomball, Greater Houston, and Surrounding Texas Markets
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              MDX Fuel is based in Tomball, Texas and delivers commercial fuel, petroleum products, and lubricants to businesses throughout the Greater Houston region. Our primary service area covers Harris County, Montgomery County, and surrounding commercial markets.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {AREAS.map(area => (
                <div
                  key={area.name}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border ${
                    area.primary
                      ? 'border-accent bg-accent/5'
                      : 'border-border bg-muted/30'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 shrink-0 ${area.primary ? 'text-accent' : 'text-muted-foreground'}`} />
                  <div>
                    <div className={`text-xs font-semibold ${area.primary ? 'text-accent' : 'text-foreground'}`}>{area.name}</div>
                    <div className="text-muted-foreground text-[10px]">{area.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/service-area"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all uppercase tracking-wider"
            >
              View Full Service Area <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={IMAGES.houstonAerial}
              alt="Aerial view of Greater Houston Texas"
              className="rounded-xl shadow-lg w-full object-cover"
              style={{ height: 440 }}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white text-sm font-semibold">Greater Houston Service Area</p>
              <p className="text-white/50 text-xs mt-0.5">Harris County · Montgomery County · And Surrounding Texas Markets</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}