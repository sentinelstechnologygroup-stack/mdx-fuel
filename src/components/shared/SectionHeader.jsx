import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  const titleColor = light ? 'text-white' : 'text-primary';
  const subtitleColor = light ? 'text-white/60' : 'text-muted-foreground';
  const eyebrowColor = light ? 'text-accent' : 'text-accent';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${alignClass} max-w-3xl`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          {align !== 'center' && <div className="w-6 h-0.5 bg-accent" />}
          <span className={`${eyebrowColor} font-semibold text-xs uppercase tracking-widest`}>{eyebrow}</span>
          {align === 'center' && <div className="w-6 h-0.5 bg-accent" />}
        </div>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl ${titleColor} tracking-wide leading-tight`}>{title}</h2>
      {subtitle && <p className={`${subtitleColor} text-base md:text-lg mt-4 leading-relaxed`}>{subtitle}</p>}
    </motion.div>
  );
}