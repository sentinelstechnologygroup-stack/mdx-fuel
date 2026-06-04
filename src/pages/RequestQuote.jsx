import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import PageHero from '@/components/shared/PageHero';
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


export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    fuelType: '', lubrication: '', def: '',
    deliveryAddress: '', tankDetails: '',
    estimatedVolume: '', deliveryFrequency: '', urgency: '', notes: '',
  });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  return (
    <>
      <PageHero
        eyebrow="Fuel Delivery"
        title="Fuel Delivery Request Builder"
        subtitle="Provide your delivery details below so MDX Fuel can prepare a quote for your operation. A team member will follow up directly."
        breadcrumbs={[{ label: 'Fuel Delivery Request Builder' }]}
        bgImage={IMAGES.heroTruck}
      />

      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-border rounded-xl p-16 text-center shadow-sm"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-heading text-3xl text-primary tracking-wide mb-3">Request Received</h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto mb-4">
                A member of the MDX Fuel team will review your delivery details and follow up with you directly.
              </p>
              <p className="text-muted-foreground/70 text-xs max-w-md mx-auto italic">
                Submitted quote requests are not confirmed deliveries. Pricing, product availability, delivery timing, and account terms must be reviewed and confirmed by MDX Fuel.
              </p>
            </motion.div>
          ) : (
            <div className="bg-white border border-border rounded-xl shadow-sm p-8 md:p-10">
              <div className="mb-8">
                <p className="text-muted-foreground text-sm bg-muted/50 border border-border rounded-lg px-4 py-3">
                  <strong className="text-foreground">Note:</strong> This form helps MDX Fuel understand your fuel delivery requirements. Submitting this form does not confirm delivery, pricing, or scheduling. A team member will follow up to discuss your request.
                </p>
              </div>
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-10">
              {/* Contact info */}
              <div>
                <h3 className="font-heading text-xl text-primary tracking-wide mb-5 pb-3 border-b border-border">Contact Information</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="qname">Full Name <span className="text-accent">*</span></Label>
                    <Input id="qname" placeholder="Jane Smith" value={form.name} onChange={e => set('name', e.target.value)} required className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="qcompany">Company Name <span className="text-accent">*</span></Label>
                    <Input id="qcompany" placeholder="Your Company" value={form.company} onChange={e => set('company', e.target.value)} required className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="qphone">Phone <span className="text-accent">*</span></Label>
                    <Input id="qphone" type="tel" placeholder="Your phone number" value={form.phone} onChange={e => set('phone', e.target.value)} required className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="qemail">Email <span className="text-accent">*</span></Label>
                    <Input id="qemail" type="email" placeholder="you@company.com" value={form.email} onChange={e => set('email', e.target.value)} required className="h-11" />
                  </div>
                </div>
              </div>

              {/* Products needed */}
              <div>
                <h3 className="font-heading text-xl text-primary tracking-wide mb-5 pb-3 border-b border-border">Products Needed</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label>Primary Fuel Type</Label>
                    <Select value={form.fuelType} onValueChange={v => set('fuelType', v)}>
                      <SelectTrigger className="h-11"><SelectValue placeholder="Select fuel type" /></SelectTrigger>
                      <SelectContent>
                        {['On-Highway Diesel', 'Off-Road Diesel', 'Gasoline', 'Multiple Fuel Types', 'Not Sure — Need Guidance'].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Lubricants / Oils Needed?</Label>
                    <Select value={form.lubrication} onValueChange={v => set('lubrication', v)}>
                      <SelectTrigger className="h-11"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {['Yes — Include in Quote', 'No', 'Not Sure'].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Diesel Exhaust Fluid (DEF) Needed?</Label>
                    <Select value={form.def} onValueChange={v => set('def', v)}>
                      <SelectTrigger className="h-11"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {['Yes — Include in Quote', 'No', 'Not Sure'].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Delivery details */}
              <div>
                <h3 className="font-heading text-xl text-primary tracking-wide mb-5 pb-3 border-b border-border">Delivery Details</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="qaddress">Delivery Address / Location <span className="text-accent">*</span></Label>
                    <Input id="qaddress" placeholder="Full address or city, TX" value={form.deliveryAddress} onChange={e => set('deliveryAddress', e.target.value)} required className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="qtank">Tank / Equipment Details</Label>
                    <Input id="qtank" placeholder="e.g. 500 gal above-ground tank, no tank on site" value={form.tankDetails} onChange={e => set('tankDetails', e.target.value)} className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="qvol">Estimated Volume Per Delivery</Label>
                    <Input id="qvol" placeholder="e.g. 1,000 gallons per delivery" value={form.estimatedVolume} onChange={e => set('estimatedVolume', e.target.value)} className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Delivery Frequency</Label>
                    <Select value={form.deliveryFrequency} onValueChange={v => set('deliveryFrequency', v)}>
                      <SelectTrigger className="h-11"><SelectValue placeholder="How often?" /></SelectTrigger>
                      <SelectContent>
                        {['One-time delivery', 'Weekly', 'Bi-weekly', 'Monthly', 'As-needed / will-call', 'To be discussed'].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Urgency</Label>
                    <Select value={form.urgency} onValueChange={v => set('urgency', v)}>
                      <SelectTrigger className="h-11"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {['Emergency — Within 24 hours', 'Urgent — Within 48–72 hours', 'This week', 'Within 2 weeks', 'Planning ahead — no rush'].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="qnotes">Additional Notes</Label>
                <Textarea id="qnotes" placeholder="Site access instructions, equipment types, special requirements, or other notes..." value={form.notes} onChange={e => set('notes', e.target.value)} className="min-h-[110px] mt-1.5" />
              </div>

              {/* Consent */}
              <div className="bg-muted/30 border border-border rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="qconsent" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 accent-amber-500" required />
                  <label htmlFor="qconsent" className="text-xs text-muted-foreground leading-relaxed">
                    I consent to MDX Fuel contacting me to discuss this quote request via phone, email, or text message. Message and data rates may apply. Consent is not a condition of any purchase or service. View our <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a> and <a href="/sms-policy" className="text-accent hover:underline">SMS Policy</a>.
                  </label>
                </div>
              </div>

              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-lg gap-2 text-base">
                <Send className="w-5 h-5" />
                Submit Fuel Delivery Request
              </Button>
            </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}