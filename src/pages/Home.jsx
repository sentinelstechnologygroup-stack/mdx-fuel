import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/home/Hero';
import ServiceSnapshot from '@/components/home/ServiceSnapshot';
import DowntimeBand from '@/components/home/DowntimeBand';
import ProductsPreview from '@/components/home/ProductsPreview';
import IndustriesStrip from '@/components/home/IndustriesStrip';
import WhyMDX from '@/components/home/WhyMDX';
import ServiceAreaStrip from '@/components/home/ServiceAreaStrip';
import ServiceCards from '@/components/home/ServiceCards';
import FAQAccordion from '@/components/shared/FAQAccordion';
import CTABand from '@/components/shared/CTABand';
import SectionHeader from '@/components/shared/SectionHeader';
const IMAGES = {
  heroTruck: '/images/hero/hero-truck.webp',
  constructionSite: '/images/industries/construction-site.webp',
  fleetYard: '/images/industries/fleet-yard.webp',
  agriculture: '/images/industries/agriculture.webp',
  oilfield: '/images/industries/oilfield.webp',
  driver: '/images/services/driver.webp',
  generatorFueling: '/images/services/generator-fueling.webp',
  tankerFilling: '/images/services/tanker-filling.webp',
  lubricants: '/images/products/lubricants.webp',
  storageTanks: '/images/products/storage-tanks.webp',
  houstonAerial: '/images/backgrounds/houston-aerial.webp',
  tomballCommercial: '/images/backgrounds/tomball-commercial.webp',
  dieselFuel: '/images/hero/hero-truck.webp',
  offRoadDiesel: '/images/industries/construction-site.webp',
  gasoline: '/images/industries/fleet-yard.webp',
  dieselExhaustFluid: '/images/products/storage-tanks.webp',
  fuelAdditives: '/images/products/lubricants.webp',
  bulkPetroleum: '/images/services/tanker-filling.webp',
  specialtyPetroleum: '/images/industries/oilfield.webp',
};


export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSnapshot />
      <DowntimeBand />
      <ProductsPreview />
      <ServiceCards />
      <IndustriesStrip />
      <WhyMDX />
      <ServiceAreaStrip />

      {/* FAQ Preview */}
      <section className="py-20 bg-primary border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeader
              eyebrow="FAQ"
              title="Common Questions About MDX Fuel"
              align="left"
              light={true}
            />
            <Link
              to="/resources#faq"
              className="shrink-0 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all uppercase tracking-wider"
            >
              All FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <FAQAccordion limit={5} dark={true} />
        </div>
      </section>

      <CTABand bgImage={IMAGES.tankerFilling} />
    </>
  );
}