import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { IMAGES } from '@/lib/images';

const PRODUCTS = [
  { title: 'Diesel Fuel', desc: 'On-highway diesel for commercial fleets, transportation, and heavy equipment.', badge: 'High Volume', path: '/products#diesel' },
  { title: 'Off-Road Diesel', desc: 'Tax-advantaged dyed diesel for construction, agriculture, and industrial equipment.', badge: 'Job Site Ready', path: '/products#off-road' },
  { title: 'Gasoline', desc: 'Regular and premium gasoline for mixed fleet operations and commercial use.', badge: 'Fleet Supply', path: '/products#gasoline' },
  { title: 'Lubricants & Oils', desc: 'Motor oils, hydraulic fluids, gear oils, and greases from trusted manufacturers.', badge: 'Full Line', path: '/products#lubricants' },
  { title: 'Diesel Exhaust Fluid', desc: 'DEF supply for Tier 4 and SCR-equipped diesel engines. Bulk and packaged available.', badge: 'Compliant', path: '/products#def' },
  { title: 'Fuel Additives', desc: 'Stability, cetane improvers, anti-gels, and tank conditioners for improved performance.', badge: 'Performance', path: '/products#additives' },
  { title: 'Bulk Petroleum', desc: 'Large-volume petroleum product distribution for industrial and commercial facilities.', badge: 'Bulk Ready', path: '/products#bulk' },
  { title: 'Specialty Products', desc: 'Specialty petroleum products for unique operational requirements. Inquire for details.', badge: 'Custom', path: '/products#specialty' },
];

const BADGE_COLORS = {
  'High Volume': 'bg-amber-100 text-amber-800',
  'Job Site Ready': 'bg-orange-100 text-orange-800',
  'Fleet Supply': 'bg-blue-100 text-blue-800',
  'Full Line': 'bg-yellow-100 text-yellow-800',
  'Compliant': 'bg-green-100 text-green-800',
  'Performance': 'bg-purple-100 text-purple-800',
  'Bulk Ready': 'bg-slate-100 text-slate-700',
  'Custom': 'bg-teal-100 text-teal-800',
};

export default function ProductsPreview() {
  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Our Product Line"
            title="Petroleum Products for Every Commercial Need"
            subtitle="From on-highway diesel to specialty lubricants — we supply what keeps your operation moving."
            align="left"
          />
          <Link
            to="/products"
            className="shrink-0 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all uppercase tracking-wider"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={product.path}
                className="group block bg-muted/40 border border-border rounded-xl p-5 hover:border-accent hover:shadow-md hover:bg-white transition-all h-full"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display font-bold text-foreground text-sm">{product.title}</h3>
                  <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-semibold ${BADGE_COLORS[product.badge]}`}>
                    {product.badge}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">{product.desc}</p>
                <span className="text-accent text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider">
                  Details <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}