import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HardHat, Truck, Factory, Tractor, Building, Zap, Flame, Warehouse, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const INDUSTRIES = [
  { icon: HardHat, title: 'Construction', desc: 'Diesel, off-road fuel, and lubricants for job sites and heavy equipment fleets.', path: '/industries#construction' },
  { icon: Truck, title: 'Trucking & Transportation', desc: 'Bulk diesel and fleet fueling for carriers, logistics, and transportation companies.', path: '/industries#trucking' },
  { icon: Factory, title: 'Industrial & Manufacturing', desc: 'Fuel and petroleum products for plants, facilities, and manufacturing operations.', path: '/industries#industrial' },
  { icon: Tractor, title: 'Agriculture', desc: 'Off-road diesel and lubricants for farms and agricultural equipment in the region.', path: '/industries#agriculture' },
  { icon: Building, title: 'Municipal & Government', desc: 'Reliable fuel supply for municipalities, county fleets, and government facilities.', path: '/industries#municipal' },
  { icon: Flame, title: 'Oilfield / Energy Support', desc: 'Petroleum product supply for oilfield operations, well service, and energy sector.', path: '/industries#oilfield' },
  { icon: Zap, title: 'Generator & Backup Power', desc: 'Standby generator fueling for commercial buildings, data centers, and critical systems.', path: '/industries#generator' },
  { icon: Warehouse, title: 'Commercial Facilities', desc: 'Ongoing fuel and petroleum product supply for warehouses, distribution centers, and campuses.', path: '/industries#commercial' },
];

export default function IndustriesStrip() {
  return (
    <section className="py-20 bg-secondary/5 border-t border-border" style={{background: 'hsl(215 30% 18%)'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Industries Served"
            title="Supporting Texas Businesses Across Every Sector"
            subtitle="MDX Fuel delivers fuel and petroleum products to diverse commercial industries across Greater Houston and surrounding markets."
            align="center"
            light={true}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={industry.path}
                className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/60 hover:bg-white/10 transition-all"
              >
                <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <industry.icon className="w-5 h-5 text-white/70 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display font-bold text-white text-sm mb-2">{industry.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed flex-1">{industry.desc}</p>
                <span className="mt-4 text-accent text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all uppercase tracking-wider border border-accent/40 px-6 py-3 rounded-lg hover:bg-accent/10"
          >
            View All Industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}