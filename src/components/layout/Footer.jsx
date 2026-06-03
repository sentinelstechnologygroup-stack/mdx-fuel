import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const LOGO_SRC = '/images/logo/mdx-fuel-logo.png';

const FOOTER_LINKS = {
  company: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Service Area', path: '/service-area' },
    { label: 'About MDX Fuel', path: '/about' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' },
    { label: 'Request Quote', path: '/request-quote' },
    { label: 'Open an Account', path: '/open-account' },
    { label: 'Portal Access', path: '/portal' },
  ],
  products: [
    { label: 'Diesel Fuel', path: '/products#diesel' },
    { label: 'Off-Road Diesel', path: '/products#off-road' },
    { label: 'Gasoline', path: '/products#gasoline' },
    { label: 'Lubricants & Oils', path: '/products#lubricants' },
    { label: 'Diesel Exhaust Fluid', path: '/products#def' },
    { label: 'Fuel Additives', path: '/products#additives' },
    { label: 'Bulk Petroleum', path: '/products#bulk' },
  ],
  services: [
    { label: 'Bulk Fuel Delivery', path: '/services#bulk' },
    { label: 'On-Site Fleet Fueling', path: '/services#fleet' },
    { label: 'Generator Fueling', path: '/services#generator' },
    { label: 'Emergency Fuel Support', path: '/services#emergency' },
    { label: 'Fuel Management', path: '/services#management' },
    { label: 'Industries Served', path: '/industries' },
    { label: 'Service Area', path: '/service-area' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' },
    { label: 'Accessibility Statement', path: '/accessibility' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
    { label: 'SMS / Communications Policy', path: '/sms-policy' },
    { label: 'Sitemap', path: '/sitemap' },
  ],
};

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map(link => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="text-white/50 hover:text-accent text-sm transition-colors flex items-center gap-1.5 group"
            >
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-5" aria-label="MDX Fuel Services home">
              <img
                src={LOGO_SRC}
                alt="MDX Fuel Services"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Commercial fuel delivery and petroleum product distribution serving businesses across Tomball, Greater Houston, and surrounding Texas markets.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 bg-white/5 rounded-md flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-white/40 text-xs">Call Us</div>
                  <a href="tel:+17133333835" className="font-semibold text-white hover:text-accent transition-colors">1 (713) 333-FUEL (3835)</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 bg-white/5 rounded-md flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-white/40 text-xs">Email</div>
                  <div className="font-semibold text-white">Info@MDXFuel.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 bg-white/5 rounded-md flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-white/40 text-xs">Based In</div>
                  <div className="font-semibold text-white">Tomball, Texas</div>
                </div>
              </div>
            </div>
          </div>

          <FooterCol title="Pages" links={FOOTER_LINKS.company} />
          <FooterCol title="Products" links={FOOTER_LINKS.products} />
          <FooterCol title="Legal & Info" links={FOOTER_LINKS.legal} />
        </div>

        {/* Service area strip */}
        <div className="py-4 border-t border-white/10">
          <p className="text-white/30 text-xs text-center">
            <span className="text-white/50 font-medium">Service Areas: </span>
            Tomball · Houston · Spring · The Woodlands · Cypress · Conroe · Humble · Magnolia · Montgomery County · Harris County · Greater Houston Region
          </p>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} MDX Fuel. All rights reserved. Tomball, Texas. &nbsp;·&nbsp; mdxfuel.com
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {FOOTER_LINKS.legal.slice(0, 3).map(link => (
              <Link key={link.path} to={link.path} className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}