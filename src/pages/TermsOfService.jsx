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

export default function TermsOfService() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Terms governing use of the MDX Fuel Services website and submission of quote, delivery, and account requests."
        breadcrumbs={[{ label: 'Terms of Service' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-sm mb-8">
            Effective Date: June 3, 2026 | MDX Fuel Services | Tomball, Texas
          </p>

          <LegalSection title="Acceptance of Terms">
            <p>
              These Terms of Service ("Terms") govern your use of mdxfuel.com and any forms, content, pages, or features available through the website. By accessing or using the website, you agree to these Terms. If you do not agree, do not use the website.
            </p>
          </LegalSection>

          <LegalSection title="Website Purpose">
            <p>
              This website provides information about commercial fuel delivery, petroleum products, lubricants, diesel exhaust fluid, generator fueling, fleet fueling, bulk fuel, service areas, and related commercial services offered by MDX Fuel Services.
            </p>
            <p>
              Website content is provided for general informational and business inquiry purposes only. It does not create a customer account, confirmed order, confirmed delivery, credit approval, or binding agreement unless separately confirmed by MDX Fuel in writing or through direct business communication.
            </p>
          </LegalSection>

          <LegalSection title="Quote Requests and Service Inquiries">
            <p>
              Submitting a contact form, quote request, open-account request, or delivery inquiry does not guarantee pricing, product availability, account approval, delivery scheduling, or service availability.
            </p>
            <p>
              All requests are subject to review based on service area, product type, delivery location, access requirements, estimated volume, account status, delivery capacity, safety conditions, and other operational factors.
            </p>
          </LegalSection>

          <LegalSection title="Product and Service Availability">
            <p>
              Products and services may vary by location, volume, customer type, delivery schedule, season, supply conditions, and account qualification. MDX Fuel may modify, limit, suspend, or discontinue any product, service, route, or delivery option at any time.
            </p>
            <p>
              Website descriptions of services are not guarantees that a particular product or delivery option is available for every customer or location.
            </p>
          </LegalSection>

          <LegalSection title="Pricing and Payment">
            <p>
              Prices shown or discussed through the website, if any, are estimates only unless expressly confirmed by MDX Fuel. Final pricing may depend on fuel market conditions, product type, taxes, fees, delivery location, volume, account terms, and other commercial factors.
            </p>
            <p>
              Payment terms, credit terms, account limits, taxes, fees, delivery charges, and invoicing requirements are governed by the specific commercial account documents, quote terms, invoice terms, or written agreement provided by MDX Fuel.
            </p>
          </LegalSection>

          <LegalSection title="Customer Responsibilities">
            <p>Customers and requestors are responsible for providing accurate and complete information, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Correct contact information and company details.</li>
              <li>Accurate delivery location, access instructions, and site conditions.</li>
              <li>Correct product type, estimated volume, tank information, and delivery requirements.</li>
              <li>Safe site access for delivery vehicles and personnel.</li>
              <li>Any permits, site approvals, or operating requirements that apply to the customer's location.</li>
            </ul>
            <p>
              MDX Fuel may decline or delay service if information is incomplete, inaccurate, unsafe, or inconsistent with operational requirements.
            </p>
          </LegalSection>

          <LegalSection title="No Emergency Guarantee">
            <p>
              Website forms are not intended for guaranteed emergency response. If you have an urgent fuel-related request, call MDX Fuel directly. Submission of an online form does not guarantee immediate review, dispatch, delivery, or emergency service.
            </p>
          </LegalSection>

          <LegalSection title="Acceptable Use">
            <p>You agree not to misuse the website. Prohibited activity includes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Submitting false, misleading, fraudulent, or unauthorized information.</li>
              <li>Attempting to interfere with website operation, security, or availability.</li>
              <li>Using the website to transmit malicious code, spam, or abusive content.</li>
              <li>Copying, scraping, or using website content for unlawful or competitive misuse.</li>
              <li>Violating any applicable law, regulation, or third-party right.</li>
            </ul>
          </LegalSection>

          <LegalSection title="Intellectual Property">
            <p>
              Website content, branding, text, images, graphics, layout, logos, and design elements are owned by MDX Fuel or used with permission. You may view the website for legitimate business inquiry purposes. You may not copy, reproduce, distribute, modify, or commercially exploit website content without written permission.
            </p>
          </LegalSection>

          <LegalSection title="Third-Party Services and Links">
            <p>
              The website may use or link to third-party services such as form processors, hosting providers, analytics tools, maps, email systems, or other external resources. MDX Fuel is not responsible for third-party websites, services, terms, privacy practices, availability, or security.
            </p>
          </LegalSection>

          <LegalSection title="Disclaimer of Warranties">
            <p>
              The website is provided on an "as is" and "as available" basis. MDX Fuel makes reasonable efforts to keep website information accurate and current, but we do not warrant that the website will be uninterrupted, error-free, secure, complete, or free of outdated information.
            </p>
          </LegalSection>

          <LegalSection title="Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, MDX Fuel will not be liable for indirect, incidental, consequential, special, punitive, or exemplary damages arising from or related to use of the website, inability to use the website, reliance on website content, or submission of website forms.
            </p>
            <p>
              Nothing in these Terms limits liability that cannot be limited under applicable law.
            </p>
          </LegalSection>

          <LegalSection title="Indemnification">
            <p>
              You agree to defend, indemnify, and hold harmless MDX Fuel and its owners, employees, contractors, and service providers from claims, damages, liabilities, costs, and expenses arising from your misuse of the website, your violation of these Terms, or your submission of inaccurate or unauthorized information.
            </p>
          </LegalSection>

          <LegalSection title="Governing Law">
            <p>
              These Terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles. Any dispute relating to the website or these Terms shall be handled in a court of competent jurisdiction in Texas unless otherwise required by law.
            </p>
          </LegalSection>

          <LegalSection title="Changes to These Terms">
            <p>
              We may update these Terms from time to time. The effective date above reflects the latest version posted on this website. Continued use of the website after updates are posted means you accept the revised Terms.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>Questions about these Terms may be directed to:</p>
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
