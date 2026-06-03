import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/images';

const TRUST_BADGES = [
  'Tomball-Based Operation',
  'Greater Houston Service Area',
  'Commercial Fuel Delivery',
  'Petroleum Product Distribution',
];

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroTruck}
          alt="MDX Fuel commercial tanker truck on Texas highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
      </div>

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" aria-hidden="true" />

      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">
                Fuel &amp; Petroleum Product Distribution — Tomball, TX
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white tracking-wide leading-[1.0] mb-5">
              Fuel Delivery and<br />
              Petroleum Solutions<br />
              <span className="text-accent">Built Around Your</span><br />
              <span className="text-accent">Operation.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Bulk diesel, gasoline, lubricants, DEF, and on-site fueling for commercial fleets, job sites, generators, and industrial operations across Tomball, Greater Houston, and surrounding Texas markets.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/request-quote">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-7 gap-2 rounded-lg text-base">
                  <ArrowRight className="w-5 h-5" />
                  Request Fuel Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-7 gap-2 rounded-lg text-base">
                  <Calendar className="w-5 h-5" />
                  Schedule Delivery
                </Button>
              </Link>
              <div className="inline-flex items-center gap-2 text-white/60 font-semibold px-4 text-sm">
                <Phone className="w-4 h-4" />
                1 (713) 333-FUEL (3835)
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {TRUST_BADGES.map(badge => (
                <div key={badge} className="flex items-center gap-1.5 bg-white/8 border border-white/15 rounded-full px-3 py-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="text-white/80 text-xs font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom stat bar */}
      <div className="relative z-10 bg-secondary/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <MapPin className="w-4 h-4 text-accent shrink-0" />
            <span>
              <span className="text-white/80 font-medium">Serving: </span>
              Tomball · Spring · The Woodlands · Cypress · Conroe · Humble · Magnolia · Greater Houston Region
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}