import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LOGO_SRC = '/images/logo/mdx-fuel-logo.webp';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Products', path: '/products',
    children: [
      { label: 'Diesel Fuel', path: '/products#diesel' },
      { label: 'Off-Road Diesel', path: '/products#off-road' },
      { label: 'Gasoline', path: '/products#gasoline' },
      { label: 'Lubricants & Oils', path: '/products#lubricants' },
      { label: 'Diesel Exhaust Fluid', path: '/products#def' },
      { label: 'Fuel Additives', path: '/products#additives' },
    ]
  },
  {
    label: 'Services', path: '/services',
    children: [
      { label: 'Bulk Fuel Delivery', path: '/services#bulk' },
      { label: 'On-Site Fleet Fueling', path: '/services#fleet' },
      { label: 'Generator Fueling', path: '/services#generator' },
      { label: 'Emergency Fuel', path: '/services#emergency' },
      { label: 'Fuel Management', path: '/services#management' },
      { label: 'Tank & Equipment Support', path: '/services#tanks' },
    ]
  },
  {
    label: 'Industries', path: '/industries',
    children: [
      { label: 'Construction', path: '/industries#construction' },
      { label: 'Trucking & Fleet', path: '/industries#trucking' },
      { label: 'Industrial & Manufacturing', path: '/industries#industrial' },
      { label: 'Agriculture', path: '/industries#agriculture' },
      { label: 'Municipal & Government', path: '/industries#municipal' },
      { label: 'Oilfield / Energy', path: '/industries#oilfield' },
    ]
  },
  { label: 'Service Area', path: '/service-area' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

function DropdownMenu({ item, onClose }) {
  return (
    <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-border rounded-lg shadow-xl py-2 z-50">
      {item.children.map(child => (
        <Link
          key={child.path}
          to={child.path}
          onClick={onClose}
          className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
        >
          {child.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-secondary text-white text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-1 opacity-80">
            <span>MDX Fuel — Tomball, Texas</span>
            <span className="mx-2 opacity-40">|</span>
            <span>Serving Greater Houston & Surrounding Texas Markets</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+17133333835" className="flex items-center gap-1.5 font-medium text-white/80 hover:text-accent transition-colors">
              <Phone className="w-3 h-3" />
              1 (713) 333-FUEL (3835)
            </a>
            <Link to="/open-account" className="hover:text-accent transition-colors">Open an Account</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white border-b border-border'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" aria-label="MDX Fuel Services home">
            <img
              src={LOGO_SRC}
              alt="MDX Fuel Services"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-primary hover:bg-muted ${
                    location.pathname === item.path ? 'text-primary bg-muted' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 mt-0.5 opacity-60" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <DropdownMenu item={item} onClose={() => setOpenDropdown(null)} />
                )}
              </div>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <a href="tel:+17133333835" className="flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              1 (713) 333-FUEL (3835)
            </a>
            <Link to="/request-quote">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-5 rounded-lg shadow-sm">
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-border overflow-y-auto max-h-[80vh]">
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map(item => (
                <div key={item.path}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      className={`flex-1 block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        location.pathname === item.path ? 'text-primary bg-muted' : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="p-2 rounded-md hover:bg-muted"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.children && mobileExpanded === item.label && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-accent/30 pl-3">
                      {item.children.map(child => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-border space-y-2">
                <Link to="/request-quote" className="block">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg">
                    Request Quote
                  </Button>
                </Link>
                <Link to="/open-account" className="block">
                  <Button variant="outline" className="w-full font-semibold rounded-lg">
                    Open an Account
                  </Button>
                </Link>
                <a href="tel:+17133333835" className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground py-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  1 (713) 333-FUEL (3835)
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}