import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABand({
  headline = 'Need Fuel Delivered to Your Fleet, Job Site, Generator, or Facility?',
  subtext = 'Contact MDX Fuel today for a no-obligation quote. We serve businesses across Tomball, Greater Houston, and surrounding Texas markets.',
  bgImage,
}) {
  return (
    <section className="relative py-20 overflow-hidden bg-secondary">
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover opacity-15" aria-hidden="true" />
        </div>
      )}
      <div className="absolute inset-0 bg-secondary/95" />
      <div className="absolute left-0 top-0 w-1 h-full bg-accent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white tracking-wide">
              {headline}
            </h2>
            <p className="text-white/50 mt-3 text-base leading-relaxed">{subtext}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/request-quote">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-7 gap-2 rounded-lg whitespace-nowrap">
                <ArrowRight className="w-4 h-4" />
                Request Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-7 gap-2 rounded-lg whitespace-nowrap">
                <Calendar className="w-4 h-4" />
                Schedule Delivery
              </Button>
            </Link>
            <div className="inline-flex items-center gap-2 text-white/50 font-semibold px-4 text-sm whitespace-nowrap">
              <Phone className="w-4 h-4" />
              1 (713) 333-FUEL (3835)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}