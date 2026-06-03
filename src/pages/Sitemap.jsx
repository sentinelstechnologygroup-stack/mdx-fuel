import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';

const SITEMAP = [
  {
    category: 'Main Pages',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About MDX Fuel', path: '/about' },
      { label: 'Products', path: '/products' },
      { label: 'Services', path: '/services' },
      { label: 'Industries', path: '/industries' },
      { label: 'Service Area', path: '/service-area' },
      { label: 'Resources', path: '/resources' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    category: 'Get Started',
    links: [
      { label: 'Request a Fuel Quote', path: '/request-quote' },
      { label: 'Open a Commercial Account', path: '/open-account' },
    ],
  },
  {
    category: 'Products',
    links: [
      { label: 'Diesel Fuel', path: '/products#diesel' },
      { label: 'Off-Road Diesel', path: '/products#off-road' },
      { label: 'Gasoline', path: '/products#gasoline' },
      { label: 'Lubricants & Oils', path: '/products#lubricants' },
      { label: 'Diesel Exhaust Fluid', path: '/products#def' },
      { label: 'Fuel Additives', path: '/products#additives' },
      { label: 'Bulk Petroleum Products', path: '/products#bulk' },
      { label: 'Specialty Products', path: '/products#specialty' },
    ],
  },
  {
    category: 'Services',
    links: [
      { label: 'Bulk Fuel Delivery', path: '/services#bulk' },
      { label: 'On-Site Fleet Fueling', path: '/services#fleet' },
      { label: 'Job Site Fueling', path: '/services#jobsite' },
      { label: 'Generator Fueling', path: '/services#generator' },
      { label: 'Emergency Fuel Support', path: '/services#emergency' },
      { label: 'Lubricant Delivery', path: '/services#lubricants' },
      { label: 'DEF Delivery', path: '/services#def' },
      { label: 'Fuel Management Support', path: '/services#management' },
      { label: 'Tank & Equipment Support', path: '/services#tanks' },
    ],
  },
  {
    category: 'Industries',
    links: [
      { label: 'Construction', path: '/industries#construction' },
      { label: 'Trucking & Fleet', path: '/industries#trucking' },
      { label: 'Industrial & Manufacturing', path: '/industries#industrial' },
      { label: 'Agriculture', path: '/industries#agriculture' },
      { label: 'Municipal & Government', path: '/industries#municipal' },
      { label: 'Oilfield / Energy', path: '/industries#oilfield' },
      { label: 'Generator & Backup Power', path: '/industries#generator' },
      { label: 'Commercial Facilities', path: '/industries#commercial' },
    ],
  },
  {
    category: 'Portal Access',
    links: [
      { label: 'Portal Access', path: '/portal' },
    ],
  },
  {
    category: 'Legal & Compliance',
    links: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms of Service', path: '/terms-of-service' },
      { label: 'Accessibility Statement', path: '/accessibility' },
      { label: 'Cookie Policy', path: '/cookie-policy' },
      { label: 'SMS / Communications Policy', path: '/sms-policy' },
    ],
  },
];

export default function Sitemap() {
  return (
    <>
      <PageHero
        eyebrow="Navigation"
        title="Sitemap"
        subtitle="A complete listing of all pages on the MDX Fuel website."
        breadcrumbs={[{ label: 'Sitemap' }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {SITEMAP.map(section => (
              <div key={section.category}>
                <h2 className="font-heading text-xl text-primary tracking-wide mb-4 pb-2 border-b border-border">{section.category}</h2>
                <ul className="space-y-2.5">
                  {section.links.map(link => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-accent/50 group-hover:text-accent transition-colors shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}