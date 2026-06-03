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

export default function Accessibility() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Accessibility Statement"
        subtitle="MDX Fuel Services is committed to providing a website experience that is accessible and usable for all visitors."
        breadcrumbs={[{ label: 'Accessibility Statement' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-sm mb-8">
            Effective Date: June 3, 2026 | MDX Fuel Services | Tomball, Texas
          </p>

          <div className="space-y-10">
            <LegalSection title="Our Commitment">
              <p>
                MDX Fuel Services is committed to making mdxfuel.com accessible to the widest possible audience, including people who use assistive technologies such as screen readers, screen magnifiers, voice recognition software, keyboard navigation, and other accessibility tools.
              </p>
              <p>
                Our goal is to provide a clear, readable, and navigable website experience for customers, vendors, job-site contacts, fleet operators, and other visitors seeking information about commercial fuel delivery, petroleum products, account setup, and service availability.
              </p>
            </LegalSection>

            <LegalSection title="Accessibility Standard">
              <p>
                We use the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as a guiding standard for website accessibility. These guidelines help make web content more accessible for people with visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.
              </p>
            </LegalSection>

            <LegalSection title="Accessibility Features">
              <p>We work to support accessibility through practical design and development practices, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Clear page structure and readable headings.</li>
                <li>Keyboard-accessible navigation where technically feasible.</li>
                <li>Readable color contrast between text and backgrounds.</li>
                <li>Responsive layouts for desktop, tablet, and mobile users.</li>
                <li>Alternative text or descriptive context for meaningful images where appropriate.</li>
                <li>Consistent navigation, page titles, links, and calls to action.</li>
                <li>Forms designed with labels, required-field indicators, and confirmation messaging.</li>
              </ul>
            </LegalSection>

            <LegalSection title="Ongoing Improvement">
              <p>
                Accessibility is an ongoing process. We periodically review the website and make updates as issues are identified, as technology changes, and as new content or functionality is added.
              </p>
              <p>
                Some third-party tools, embedded content, browser settings, or user devices may affect accessibility in ways outside our direct control. When we become aware of an accessibility barrier that we can reasonably address, we work to correct it.
              </p>
            </LegalSection>

            <LegalSection title="Need Assistance?">
              <p>
                If you have difficulty accessing any part of this website, need help completing a form, or would like information in another format, please contact us. We will make reasonable efforts to assist you and provide the information you need.
              </p>
              <div className="mt-3 space-y-1">
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

            <LegalSection title="Feedback">
              <p>
                When contacting us about an accessibility issue, please include the page URL, a brief description of the issue, the device and browser you are using, and the assistive technology involved if applicable. This information helps us investigate and respond more effectively.
              </p>
            </LegalSection>
          </div>
        </div>
      </section>
    </>
  );
}
