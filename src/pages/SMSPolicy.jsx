import React from 'react';
import PageHero from '@/components/shared/PageHero';

function LegalSection({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-2xl text-primary tracking-wide mb-4">{title}</h2>
      <div className="text-muted-foreground text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function SMSPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="SMS / Communications Policy"
        subtitle="How MDX Fuel Services handles phone, email, and text-message communications related to website inquiries."
        breadcrumbs={[{ label: 'SMS / Communications Policy' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-sm mb-8">
            Effective Date: June 3, 2026 | MDX Fuel Services | Tomball, Texas
          </p>

          <LegalSection title="Overview">
            <p>
              This SMS / Communications Policy explains how MDX Fuel Services ("MDX Fuel," "we," "us," or "our") may contact individuals or businesses that submit forms, request quotes, open account inquiries, or otherwise contact us through mdxfuel.com.
            </p>
            <p>
              Communications may relate to commercial fuel delivery, bulk fuel, petroleum products, lubricants, diesel exhaust fluid, generator fueling, fleet fueling, account setup, quote requests, delivery scheduling, customer support, or service follow-up.
            </p>
          </LegalSection>

          <LegalSection title="Consent to Communications">
            <p>
              When you submit a website form, call us, email us, request a quote, or provide your contact information, you authorize MDX Fuel to respond using the contact information you provide. This may include phone calls, emails, and text messages related to your inquiry or account.
            </p>
            <p>
              If a form includes a communications-consent checkbox, checking that box confirms that you agree to be contacted by phone, email, or SMS regarding your request. Consent is not a condition of purchase unless specifically required for a particular communication workflow.
            </p>
          </LegalSection>

          <LegalSection title="Types of Messages">
            <p>Messages may include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Responses to contact forms, quote requests, and open-account requests.</li>
              <li>Questions about delivery location, product type, fuel volume, timing, or site access.</li>
              <li>Quote follow-up, account setup information, and scheduling coordination.</li>
              <li>Delivery status, service updates, or customer-support communications.</li>
              <li>Operational or administrative messages related to your inquiry or account.</li>
            </ul>
          </LegalSection>

          <LegalSection title="Message Frequency">
            <p>
              Message frequency varies based on your request, account activity, delivery coordination needs, and whether additional follow-up is required. MDX Fuel does not use website form consent as permission to send unrelated high-volume text marketing.
            </p>
          </LegalSection>

          <LegalSection title="Message and Data Rates">
            <p>
              Message and data rates may apply for SMS or mobile communications. Charges are determined by your mobile carrier and plan. MDX Fuel is not responsible for carrier charges, delayed messages, blocked messages, or mobile service limitations.
            </p>
          </LegalSection>

          <LegalSection title="How to Opt Out">
            <p>
              You may opt out of SMS communications at any time by replying <strong className="text-foreground">STOP</strong> to a text message where supported. You may also contact MDX Fuel directly and request that we stop sending text messages to your number.
            </p>
            <p>
              To request help by SMS, you may reply <strong className="text-foreground">HELP</strong> where supported. To opt out of non-essential email communications, contact us directly or use any unsubscribe method included in an email, if available.
            </p>
          </LegalSection>

          <LegalSection title="Important Service Communications">
            <p>
              Even if you opt out of marketing or non-essential communications, MDX Fuel may still contact you when necessary for active service requests, delivery coordination, account administration, safety issues, billing matters, or legally required communications.
            </p>
          </LegalSection>

          <LegalSection title="No Sensitive Information by SMS">
            <p>
              Please do not send payment card numbers, bank information, tax identification numbers, passwords, or other sensitive confidential information by text message. If sensitive information is required, MDX Fuel will provide an appropriate process for collecting it.
            </p>
          </LegalSection>

          <LegalSection title="Data Privacy">
            <p>
              Communications data may be used to respond to your request, manage customer service, maintain business records, and operate our commercial fuel delivery business. For more information, please review our Privacy Policy.
            </p>
          </LegalSection>

          <LegalSection title="Carrier Disclaimer">
            <p>
              Mobile carriers are not liable for delayed or undelivered messages. SMS availability may vary by carrier, device, service area, and network conditions.
            </p>
          </LegalSection>

          <LegalSection title="Changes to This Policy">
            <p>
              MDX Fuel may update this SMS / Communications Policy as communication tools, business practices, or legal requirements change. The effective date above reflects the latest version posted on this website.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>For questions about this policy or to update your communication preferences, contact us:</p>
            <div className="space-y-1">
              <p><strong className="text-foreground">MDX Fuel Services</strong></p>
              <p>Tomball, Texas</p>
              <p>
                Email:{' '}
                <a href="mailto:Info@MDXFuel.com" className="text-accent hover:underline">
                  Info@MDXFuel.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+17133333835" className="text-accent hover:underline">
                  1 (713) 333-FUEL (3835)
                </a>
              </p>
            </div>
          </LegalSection>
        </div>
      </section>
    </>
  );
}
