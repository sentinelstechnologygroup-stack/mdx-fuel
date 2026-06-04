import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import PageHero from '@/components/shared/PageHero';
import CTABand from '@/components/shared/CTABand';
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


export default function OpenAccount() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    companyName: '', contactPerson: '', billingContact: '',
    phone: '', email: '',
    deliveryLocations: '', productsNeeded: '',
    monthlyVolume: '', fleetType: '', message: '',
  });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <>
      <PageHero
        eyebrow="Account Setup"
        title="Open a Commercial Fuel Account with MDX Fuel"
        subtitle="Start an account request to establish a recurring commercial fuel and petroleum product supply relationship with MDX Fuel for your business operations."
        breadcrumbs={[{ label: 'Open an Account' }]}
        bgImage={IMAGES.fleetYard}
      />

      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: '1', t: 'Submit Account Request', d: 'Complete this form with your company and operational details.' },
              { n: '2', t: 'MDX Fuel Review', d: 'Our team reviews your request and confirms service availability for your location.' },
              { n: '3', t: 'Account Setup', d: "We'll follow up to finalize delivery programs, pricing, and account terms." },
            ].map(step => (
              <div key={step.n} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                  <span className="font-heading text-accent-foreground text-lg">{step.n}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-sm mb-1">{step.t}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-muted/40 border border-border rounded-lg px-5 py-3 text-xs text-muted-foreground mb-8">
            <strong className="text-foreground">Note:</strong> Submitting this form initiates an account inquiry. MDX Fuel will review your request and follow up directly to discuss account setup, delivery programs, and terms. Account approval is subject to review.
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white border border-border rounded-xl p-14 text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-heading text-2xl text-primary tracking-wide mb-2">Account Request Received</h2>
              <p className="text-muted-foreground text-sm">A member of the MDX Fuel team will follow up with you to discuss your account setup and delivery programs.</p>
            </motion.div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="bg-white border border-border rounded-xl p-8 space-y-8">
              <div>
                <h3 className="font-heading text-lg text-primary tracking-wide mb-5 pb-3 border-b border-border">Company Information</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="acomp">Company Name <span className="text-accent">*</span></Label>
                    <Input id="acomp" placeholder="Your Company Name" value={form.companyName} onChange={e => set('companyName', e.target.value)} required className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="acontact">Primary Contact Person <span className="text-accent">*</span></Label>
                    <Input id="acontact" placeholder="Full Name" value={form.contactPerson} onChange={e => set('contactPerson', e.target.value)} required className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="abillingcontact">Billing Contact</Label>
                    <Input id="abillingcontact" placeholder="Name or Same as above" value={form.billingContact} onChange={e => set('billingContact', e.target.value)} className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="aphone">Phone <span className="text-accent">*</span></Label>
                    <Input id="aphone" type="tel" placeholder="Your phone number" value={form.phone} onChange={e => set('phone', e.target.value)} required className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="aemail">Email <span className="text-accent">*</span></Label>
                    <Input id="aemail" type="email" placeholder="you@company.com" value={form.email} onChange={e => set('email', e.target.value)} required className="h-11" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg text-primary tracking-wide mb-5 pb-3 border-b border-border">Fuel Requirements</h3>
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="alocations">Delivery Location(s) <span className="text-accent">*</span></Label>
                    <Textarea id="alocations" placeholder="List delivery address(es) — city and state, or full address" value={form.deliveryLocations} onChange={e => set('deliveryLocations', e.target.value)} required className="min-h-[80px]" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="aproducts">Products Needed</Label>
                    <Input id="aproducts" placeholder="e.g. Diesel, Off-Road Diesel, Lubricants, DEF" value={form.productsNeeded} onChange={e => set('productsNeeded', e.target.value)} className="h-11" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label>Est. Monthly Fuel Volume</Label>
                      <Select value={form.monthlyVolume} onValueChange={v => set('monthlyVolume', v)}>
                        <SelectTrigger className="h-11"><SelectValue placeholder="Select range" /></SelectTrigger>
                        <SelectContent>
                          {['Under 500 gallons/month', '500–2,000 gallons/month', '2,000–5,000 gallons/month', '5,000–15,000 gallons/month', '15,000+ gallons/month', 'Variable / not sure yet'].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="afleet">Fleet / Equipment Type</Label>
                      <Input id="afleet" placeholder="e.g. Class 8 trucks, excavators, generators" value={form.fleetType} onChange={e => set('fleetType', e.target.value)} className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="amessage">Additional Information</Label>
                    <Textarea id="amessage" placeholder="Any additional context about your operations, delivery requirements, or account needs..." value={form.message} onChange={e => set('message', e.target.value)} className="min-h-[90px]" />
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 border border-border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="aconsent" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 accent-amber-500" required />
                  <label htmlFor="aconsent" className="text-xs text-muted-foreground leading-relaxed">
                    I consent to MDX Fuel contacting me to discuss this account request. Message and data rates may apply for text communications. Consent is not a condition of account approval or service. View <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>.
                  </label>
                </div>
              </div>

              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-lg gap-2">
                <Send className="w-4 h-4" />
                Start Account Request
              </Button>
            </form>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}