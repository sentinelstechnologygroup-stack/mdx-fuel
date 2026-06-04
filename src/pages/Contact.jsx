import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
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


const REQUEST_TYPES = [
  'Request Fuel Quote',
  'Schedule Delivery',
  'Open Commercial Account',
  'Lubricants Inquiry',
  'Generator Fueling',
  'Emergency Fuel Support',
  'General Question',
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjyqqke';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '', requestType: '',
    deliveryAddress: '', product: '', estimatedGallons: '', timeline: '', message: '',
  });

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.requestType || !agreed) return;

    setSubmitting(true);
    setError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          consent: agreed ? 'Yes' : 'No',
          source: 'MDXFuel.com Contact Page',
        }),
      });

      if (!response.ok) throw new Error('Form submission failed');
      setSubmitted(true);
    } catch (err) {
      setError('There was a problem submitting your request. Please call MDX Fuel directly at 1 (713) 333-FUEL (3835).');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact MDX Fuel"
        subtitle="Reach out to request a quote, schedule a delivery, open a commercial account, or ask a question about fuel and petroleum products in the Greater Houston area."
        breadcrumbs={[{ label: 'Contact' }]}
        bgImage={IMAGES.heroTruck}
      />

      {/* Info cards */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Phone, label: 'Call Us', value: '1 (713) 333-FUEL (3835)', sub: 'Available for commercial customers', href: 'tel:+17133333835' },
              { icon: Mail, label: 'Email', value: 'Info@MDXFuel.com', sub: 'Contact us for general inquiries', href: null },
              { icon: MapPin, label: 'Location', value: '12124 Zion Rd, Tomball, TX 77375', sub: 'Serving Greater Houston region', href: null },
              { icon: Clock, label: 'Business Hours', value: 'Mon–Fri 7AM–6PM CST', sub: 'Emergency inquiries: call anytime', href: null },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl bg-muted/30 border border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="font-display font-bold text-foreground text-sm hover:text-accent transition-colors">{item.value}</a>
                    : <div className="font-display font-bold text-foreground text-sm">{item.value}</div>
                  }
                  <div className="text-muted-foreground text-xs mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-14">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl text-primary tracking-wide mb-2">Send a Request</h2>
              <p className="text-muted-foreground text-sm mb-8">
                Complete the form below and an MDX Fuel team member will follow up with you directly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-muted/40 border border-border rounded-xl p-12 text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl text-primary tracking-wide mb-2">Request Received</h3>
                  <p className="text-muted-foreground text-sm">
                    A member of the MDX Fuel team will follow up with you directly. Thank you for reaching out.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST" className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full Name <span className="text-accent">*</span></Label>
                      <Input id="name" name="name" placeholder="Jane Smith" value={form.name} onChange={e => set('name', e.target.value)} required className="h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Your Company Name" value={form.company} onChange={e => set('company', e.target.value)} className="h-11" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Your phone number" value={form.phone} onChange={e => set('phone', e.target.value)} className="h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email <span className="text-accent">*</span></Label>
                      <Input id="email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={e => set('email', e.target.value)} required className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Request Type <span className="text-accent">*</span></Label>
                    <input type="hidden" name="requestType" value={form.requestType} />
                    <Select value={form.requestType} onValueChange={v => set('requestType', v)} required>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select a request type" />
                      </SelectTrigger>
                      <SelectContent>
                        {REQUEST_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="deliveryAddress">Service Address / Delivery Location</Label>
                    <Input id="deliveryAddress" name="deliveryAddress" placeholder="City, TX or full address" value={form.deliveryAddress} onChange={e => set('deliveryAddress', e.target.value)} className="h-11" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="product">Product Needed</Label>
                      <Input id="product" name="product" placeholder="e.g. Diesel, DEF, Lubricants" value={form.product} onChange={e => set('product', e.target.value)} className="h-11" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="gallons">Estimated Gallons / Volume</Label>
                      <Input id="gallons" name="estimatedGallons" placeholder="e.g. 500 gallons" value={form.estimatedGallons} onChange={e => set('estimatedGallons', e.target.value)} className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="timeline">Timeline / Urgency</Label>
                    <Input id="timeline" name="timeline" placeholder="e.g. Within 48 hours, weekly scheduled delivery" value={form.timeline} onChange={e => set('timeline', e.target.value)} className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message / Notes</Label>
                    <Textarea id="message" name="message" placeholder="Additional details about your fuel needs, location, access requirements, or questions..." value={form.message} onChange={e => set('message', e.target.value)} className="min-h-[110px]" />
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="consent" name="consent" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 accent-amber-500" required />
                    <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                      I consent to MDX Fuel contacting me regarding my request via phone, email, or text message. Message and data rates may apply. I understand this is not a condition of any purchase or service. See our <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a> and <a href="/sms-policy" className="text-accent hover:underline">SMS Policy</a>.
                    </label>
                  </div>
                  {error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}
                  <Button type="submit" disabled={submitting} className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-lg gap-2">
                    <Send className="w-4 h-4" />
                    {submitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-primary rounded-xl p-7">
                <h3 className="font-heading text-xl text-white tracking-wide mb-4">What Happens Next</h3>
                <div className="space-y-4">
                  {[
                    { n: '1', t: 'Form Received', d: 'Your request is submitted to the MDX Fuel team immediately.' },
                    { n: '2', t: 'Team Follow-Up', d: 'An MDX Fuel team member will follow up to discuss your request.' },
                    { n: '3', t: 'Quote or Scheduling', d: "We'll discuss your fuel needs, delivery location, and provide a quote or schedule." },
                    { n: '4', t: 'Delivery Confirmed', d: 'Once confirmed, your delivery or account setup is scheduled and documented.' },
                  ].map(step => (
                    <div key={step.n} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center shrink-0">
                        <span className="text-accent-foreground font-bold text-xs">{step.n}</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-xs">{step.t}</div>
                        <div className="text-white/50 text-xs mt-0.5">{step.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/40 border border-border rounded-xl p-6">
                <h4 className="font-display font-bold text-foreground text-sm mb-4 uppercase tracking-wider">Service Area</h4>
                <div className="space-y-1.5">
                  {['Tomball', 'Houston', 'Spring', 'The Woodlands', 'Cypress', 'Conroe', 'Humble', 'Magnolia', 'Harris County', 'Montgomery County'].map(a => (
                    <div key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}