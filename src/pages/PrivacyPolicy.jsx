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

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How MDX Fuel Services collects, uses, and protects information submitted through this website."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted-foreground text-sm mb-8">
            Effective Date: June 3, 2026 | MDX Fuel Services | Tomball, Texas
          </p>

          <LegalSection title="Overview">
            <p>
              MDX Fuel Services ("MDX Fuel," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information submitted through mdxfuel.com and related website forms.
            </p>
            <p>
              This website is intended for commercial fuel, petroleum product, delivery, account, and service inquiries. By using this website or submitting information through a form, you agree to the practices described in this Privacy Policy.
            </p>
          </LegalSection>

          <LegalSection title="Information We Collect">
            <p>We may collect information that you voluntarily submit through website forms, calls, emails, or other communications, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name, company name, job title, and contact details.</li>
              <li>Email address and phone number.</li>
              <li>Delivery address, service location, or business location.</li>
              <li>Fuel product interests, estimated gallons, delivery timeline, and service needs.</li>
              <li>Account inquiry details, quote request details, and messages submitted through forms.</li>
              <li>Any other information you choose to provide when contacting us.</li>
            </ul>
            <p>
              We may also collect basic technical information such as browser type, device type, pages visited, referral source, date and time of visit, and interactions with website links or forms.
            </p>
          </LegalSection>

          <LegalSection title="How We Use Information">
            <p>We use collected information to operate our business and respond to your requests, including to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to quote requests, service inquiries, and account inquiries.</li>
              <li>Contact you about fuel delivery, product availability, scheduling, pricing, and account setup.</li>
              <li>Evaluate whether we can serve your location, product need, or delivery volume.</li>
              <li>Provide customer support and service-related communications.</li>
              <li>Improve website performance, content, navigation, and customer experience.</li>
              <li>Maintain business records, comply with legal obligations, and protect our rights.</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </LegalSection>

          <LegalSection title="Phone, Email, and SMS Communications">
            <p>
              If you submit a form or contact us, you authorize MDX Fuel Services to respond using the contact information you provide. This may include phone calls, emails, and text messages related to your request, account, quote, delivery, or service inquiry.
            </p>
            <p>
              Message and data rates may apply for text messages. You may opt out of SMS communications by replying STOP where supported, or by contacting us directly.
            </p>
          </LegalSection>

          <LegalSection title="Analytics and Website Tracking">
            <p>
              We may use website analytics, event tracking, cookies, local storage, server logs, or similar technologies to understand how visitors use the website. This may include page views, referral sources, clicked links, form submission attempts, device information, and general usage patterns.
            </p>
            <p>
              These tools help us improve website performance, understand which services visitors are interested in, and evaluate marketing effectiveness. Analytics information is generally used in an aggregated or business-operational manner.
            </p>
          </LegalSection>

          <LegalSection title="Cookies and Local Storage">
            <p>
              The website may use cookies or browser storage to support functionality, analytics, session tracking, and website performance. You may be able to disable cookies or clear stored data through your browser settings. Some features may not work as intended if cookies or storage are disabled.
            </p>
          </LegalSection>

          <LegalSection title="How We Share Information">
            <p>We may share information only as needed for legitimate business purposes, including with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Employees, contractors, or service providers who assist with customer inquiries, website hosting, form processing, communications, analytics, or business operations.</li>
              <li>Payment, account, delivery, or operational partners where necessary to respond to or fulfill a request.</li>
              <li>Legal, regulatory, or government authorities when required by law or to protect our rights, safety, property, customers, or business.</li>
            </ul>
            <p>We do not authorize service providers to use your information for their own unrelated marketing purposes.</p>
          </LegalSection>

          <LegalSection title="Data Security">
            <p>
              We use reasonable administrative, technical, and organizational measures designed to protect information submitted through the website. However, no website, email system, or internet transmission is completely secure. Please do not submit sensitive financial, payment card, tax, or confidential business information through general website forms unless specifically requested through a secure process.
            </p>
          </LegalSection>

          <LegalSection title="Data Retention">
            <p>
              We retain information for as long as reasonably necessary to respond to inquiries, manage customer relationships, maintain business records, resolve disputes, comply with legal obligations, and operate our business.
            </p>
          </LegalSection>

          <LegalSection title="Your Choices">
            <p>
              You may contact us to request that we update, correct, or remove contact information associated with your inquiry, subject to records we are required or permitted to retain for business or legal purposes.
            </p>
            <p>
              You may opt out of non-essential communications by contacting us at the email address below.
            </p>
          </LegalSection>

          <LegalSection title="Children's Privacy">
            <p>
              This website is intended for business and commercial users. It is not directed to children under 13, and we do not knowingly collect personal information from children.
            </p>
          </LegalSection>

          <LegalSection title="Third-Party Links">
            <p>
              This website may link to third-party websites or services. We are not responsible for the privacy practices, content, or security of third-party websites.
            </p>
          </LegalSection>

          <LegalSection title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The effective date above reflects the latest version posted on this website. Continued use of the website after updates are posted means you accept the revised policy.
            </p>
          </LegalSection>

          <LegalSection title="Contact Us">
            <p>If you have questions about this Privacy Policy or how your information is handled, contact us:</p>
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
