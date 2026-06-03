import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Shield, Repeat, Package, MessageSquare, TrendingUp, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { IMAGES } from '@/lib/images';

const REASONS = [
  { icon: MapPin, title: 'Local Tomball / Houston-Area Team', desc: "We operate in the same markets we serve. Response times are short because we're nearby — not managing your account from across the country." },
  { icon: Shield, title: 'Safety-First Delivery Mindset', desc: 'Every driver trained for hazmat transport, every delivery executed with proper safety protocols, documentation, and communication.' },
  { icon: Repeat, title: 'Flexible Delivery Options', desc: 'Scheduled deliveries, will-call fueling, emergency response, and bulk supply — structured around what your operation actually requires.' },
  { icon: Package, title: 'Fuel and Lubricant Product Support', desc: 'Single-source petroleum distribution covering diesel, gasoline, DEF, lubricants, and additives — consolidated procurement and delivery.' },
  { icon: MessageSquare, title: 'Clear Communication', desc: "No guessing games on delivery status or product availability. We communicate proactively so you're never left without fuel." },
  { icon: TrendingUp, title: 'Scalable as You Grow', desc: 'Whether you operate 5 trucks or 50, a single job site or multiple facilities — MDX Fuel can scale supply alongside your business.' },
];

export default function WhyMDX() {
  return (
    <section className="py-20 bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <img
              src={IMAGES.driver}
              alt="MDX Fuel delivery professional at job site"
              className="rounded-xl shadow-lg w-full object-cover"
              style={{ maxHeight: 520 }}
            />
            <div className="absolute -bottom-5 -right-5 bg-primary rounded-xl px-6 py-5 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <div className="text-white font-bold text-sm">Commercial Reliability</div>
                  <div className="text-white/50 text-xs">Every delivery, every time</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Why MDX Fuel"
              title="A Local Fuel Partner Built for Commercial Operations"
              subtitle="MDX Fuel is structured to serve businesses — not consumers. Our focus is commercial, industrial, and fleet-scale fuel delivery in the Greater Houston region."
              align="left"
              light={true}
            />

            <div className="mt-8 grid gap-5">
              {REASONS.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-accent/15 border border-accent/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <r.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-sm mb-1">{r.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}