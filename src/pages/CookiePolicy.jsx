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

export default function CookiePolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="How MDX Fuel Services uses cookies, browser storage, and similar technologies on this website."
        breadcrumbs={[{ label: 'Cookie Policy' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-sm mb-8">
            Effective Date: June 3, 2026 | MDX Fuel Services | Tomball, Texas
          </p>

          <LegalSection title="Overview">
            <p>
              This Cookie Policy explains how MDX Fuel Services ("MDX Fuel," "we," "us," or "our") uses cookies, browser storage, analytics tools, and similar technologies on mdxfuel.com.
            </p>
            <p>
              These technologies help the website function properly, improve performance, understand visitor activity, evaluate marketing effectiveness, and support customer inquiry workflows.
            </p>
          </LegalSection>

          <LegalSection title="What Cookies and Browser Storage Are">
            <p>
              Cookies are small text files placed on your device when you visit a website. Browser storage, such as local storage or session storage, allows a website to store limited information in your browser for functionality, analytics, or session-related purposes.
            </p>
            <p>
              These technologies may remember basic preferences, support website features, measure site usage, and help us understand how visitors interact with pages, links, calls to action, and forms.
            </p>
          </LegalSection>

          <LegalSection title="Types of Technologies We May Use">
            <p>We may use the following types of cookies and similar technologies:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential technologies:</strong> Used to support website operation, routing, security, form behavior, and basic functionality.</li>
              <li><strong>Analytics technologies:</strong> Used to understand page views, visitor sessions, referral sources, clicks, scroll behavior, and general website performance.</li>
              <li><strong>Performance technologies:</strong> Used to help identify technical issues, improve load times, and understand device or browser compatibility.</li>
              <li><strong>Marketing and attribution technologies:</strong> Used to understand how visitors reach the site from campaigns, search engines, email, ads, QR codes, or referral links.</li>
            </ul>
          </LegalSection>

          <LegalSection title="SDL SIS Website Intelligence">
            <p>
              This website may use SDL SIS website intelligence tracking to collect basic interaction events such as page views, link clicks, phone clicks, email clicks, form submission attempts, scroll depth, time-on-page milestones, referral information, and session activity.
            </p>
            <p>
              SDL SIS is intended to help MDX Fuel and its website support team understand which pages and services generate interest so the website can be improved. SIS event data is used for website performance reporting and business intelligence. It is not intended to collect payment card data, sensitive personal information, or confidential business records through general page tracking.
            </p>
          </LegalSection>

          <LegalSection title="Information Collected Through These Technologies">
            <p>Depending on your interaction with the site, we may collect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pages visited and time of visit.</li>
              <li>Referral source or campaign parameters.</li>
              <li>Clicks on phone numbers, email links, buttons, and navigation items.</li>
              <li>Form submission attempts and general form interaction events.</li>
              <li>Device type, browser type, screen size, and general technical details.</li>
              <li>Session identifiers or visitor identifiers used for website analytics.</li>
            </ul>
          </LegalSection>

          <LegalSection title="How We Use This Information">
            <p>We use cookie and browser-storage information to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Operate and improve the website.</li>
              <li>Understand which services, products, and pages visitors use most.</li>
              <li>Evaluate marketing campaigns and referral sources.</li>
              <li>Improve contact, quote request, and open-account workflows.</li>
              <li>Identify technical issues, broken links, or user-experience friction.</li>
              <li>Prepare internal or client-facing website performance reports.</li>
            </ul>
          </LegalSection>

          <LegalSection title="How to Control Cookies">
            <p>
              Most browsers allow you to block, delete, or manage cookies and local storage through browser settings. You can usually find these controls in your browser's privacy or security settings.
            </p>
            <p>
              If you disable cookies or browser storage, some website features, analytics functionality, forms, or reporting behavior may not work as intended.
            </p>
          </LegalSection>

          <LegalSection title="Third-Party Services">
            <p>
              This website may use third-party services for hosting, forms, analytics, maps, security, email, or other website functionality. These third parties may use their own cookies or tracking technologies according to their own policies.
            </p>
            <p>
              We are not responsible for the cookie practices, privacy policies, or security practices of third-party websites or services.
            </p>
          </LegalSection>

          <LegalSection title="Updates to This Cookie Policy">
            <p>
              We may update this Cookie Policy as website tools, analytics systems, or business needs change. The effective date above reflects the latest version posted on this website.
            </p>
          </LegalSection>

          <LegalSection title="Contact">
            <p>If you have questions about this Cookie Policy, contact us:</p>
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
