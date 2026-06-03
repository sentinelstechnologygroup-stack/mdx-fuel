import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
  {
    q: 'What areas does MDX Fuel serve?',
    a: 'MDX Fuel is based in Tomball, Texas and serves commercial customers across Tomball, Greater Houston, Harris County, Montgomery County, and surrounding Texas markets. Service availability depends on product type, delivery location, volume, and scheduling.',
  },
  {
    q: 'What products does MDX Fuel provide?',
    a: 'MDX Fuel supports commercial fuel and petroleum product needs including diesel fuel, off-road diesel, gasoline, lubricants and oils, diesel exhaust fluid, additives, and bulk petroleum products.',
  },
  {
    q: 'Can MDX Fuel deliver fuel directly to job sites?',
    a: 'Yes. MDX Fuel can support commercial job sites, fleet yards, industrial facilities, generator locations, and other approved delivery locations within the service area.',
  },
  {
    q: 'Does MDX Fuel offer scheduled delivery?',
    a: 'MDX Fuel can support scheduled delivery programs for qualifying commercial customers. Delivery frequency depends on fuel volume, location, tank capacity, product type, and account setup.',
  },
  {
    q: 'Does MDX Fuel provide emergency fuel support?',
    a: 'MDX Fuel may provide urgent or emergency fuel support depending on location, product availability, delivery capacity, and timing. Contact MDX Fuel directly to discuss your situation and confirm availability.',
  },
  {
    q: 'Can MDX Fuel help with lubricants and DEF?',
    a: 'Yes. MDX Fuel can support commercial lubricant, oil, and diesel exhaust fluid needs for fleets, equipment, industrial facilities, and job sites.',
  },
  {
    q: 'How do I request a quote?',
    a: 'Use the Request Quote page and provide your company information, product needed, estimated volume, delivery address, delivery frequency, and timeline. A member of the MDX Fuel team will follow up.',
  },
  {
    q: 'How do I open a commercial account?',
    a: 'Use the Open Account page to start the account request process. MDX Fuel will review the submitted information and follow up with next steps.',
  },
  {
    q: 'Is a quote request a confirmed delivery?',
    a: 'No. Submitting a quote request does not confirm delivery, pricing, product availability, or scheduling. MDX Fuel must review and confirm each request directly.',
  },
  {
    q: 'What information should I have ready before contacting MDX Fuel?',
    a: 'Helpful details include product type, delivery address, estimated gallons, tank or equipment details, delivery frequency, urgency, billing contact, and any site access requirements.',
  },
];

function FAQItem({ item, isOpen, onToggle, dark }) {
  return (
    <div className={`rounded-xl overflow-hidden border ${dark ? 'border-white/10' : 'border-border'}`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${
          dark
            ? 'bg-white/5 hover:bg-white/10 text-white'
            : 'bg-white hover:bg-muted/30 text-foreground'
        }`}
        aria-expanded={isOpen}
      >
        <span className={`font-display font-semibold text-sm leading-snug ${dark ? 'text-white' : 'text-foreground'}`}>{item.q}</span>
        <ChevronDown
          className={`w-4 h-4 text-accent shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`px-5 pb-5 pt-1 text-sm leading-relaxed border-t ${
              dark
                ? 'bg-white/5 text-white/65 border-white/10'
                : 'bg-muted/20 text-muted-foreground border-border'
            }`}>
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion({ limit, dark = false }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = limit ? FAQ_ITEMS.slice(0, limit) : FAQ_ITEMS;

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <FAQItem
          key={i}
          item={item}
          dark={dark}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}