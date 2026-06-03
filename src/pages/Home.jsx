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
  heroTruck: '/images/hero/hero-truck.png',
  constructionSite: '/images/industries/construction-site.png',
  fleetYard: '/images/industries/fleet-yard.png',
  agriculture: '/images/industries/agriculture.png',
  oilfield: '/images/industries/oilfield.png',
  driver: '/images/services/driver.png',
  generatorFueling: '/images/services/generator-fueling.png',
  tankerFilling: '/images/services/tanker-filling.png',
  lubricants: '/images/products/lubricants.png',
  storageTanks: '/images/products/storage-tanks.png',
  houstonAerial: '/images/backgrounds/houston-aerial.png',
  tomballCommercial: '/images/backgrounds/tomball-commercial.png',
  dieselFuel: '/images/hero/hero-truck.png',
  offRoadDiesel: '/images/industries/construction-site.png',
  gasoline: '/images/industries/fleet-yard.png',
  dieselExhaustFluid: '/images/products/storage-tanks.png',
  fuelAdditives: '/images/products/lubricants.png',
  bulkPetroleum: '/images/services/tanker-filling.png',
  specialtyPetroleum: '/images/industries/oilfield.png',
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