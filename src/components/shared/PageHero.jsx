import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, subtitle, breadcrumbs = [], bgImage }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-primary">
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover opacity-60" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/40 to-transparent" />
        </div>
      )}
      {/* geometric accent */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-accent/5 skew-x-12 translate-x-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute left-0 bottom-0 w-full h-1 bg-accent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/40 mb-6">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={crumb.label}>
                <ChevronRight className="w-3 h-3" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white/70">{crumb.label}</span>
                ) : (
                  <Link to={crumb.path} className="hover:text-accent transition-colors">{crumb.label}</Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-accent" />
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">{eyebrow}</span>
            </div>
          )}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-wide leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/60 text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}