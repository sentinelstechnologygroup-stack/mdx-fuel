export const servicePages = {
  'diesel-delivery-houston': {
    title: 'Commercial Diesel Delivery in Greater Houston',
    description: 'Request on-road or off-road diesel delivery for a commercial operation in Greater Houston. MDX Fuel reviews location, volume, access and scheduling before confirming service.',
    eyebrow: 'Commercial diesel', image: '/images/products/diesel-fuel.webp',
    intro: 'MDX Fuel supplies diesel for qualifying fleets, equipment, facilities and on-site tanks. Tell us where fuel is needed, the product and estimated volume, and whether you need a planned program or a single delivery.',
    sections: [
      ['Products and use cases', 'Discuss on-highway diesel for vehicles and off-road diesel for qualifying equipment. Specify the equipment and intended use so the right product and delivery requirements can be reviewed.'],
      ['Delivery planning', 'Share the delivery address, access instructions, tank or equipment details, expected gallons and preferred delivery window. MDX will confirm the available product, service area and scheduling with you.'],
      ['A commercial quote', 'A quote request starts a conversation. Final pricing, minimum volume, tax treatment, credit terms and delivery timing depend on the order and MDX review.'],
    ], questions: ['On-highway or off-road diesel?', 'What volume and delivery frequency do you expect?', 'Is there a tank on site, and can a delivery truck access it?'],
    related: ['bulk-fuel-delivery-houston', 'fleet-fueling-houston', 'construction-job-site-fueling'],
  },
  'bulk-fuel-delivery-houston': {
    title: 'Bulk Fuel Delivery for Houston Businesses',
    description: 'Plan commercial bulk diesel or gasoline supply for tanks, facilities and job sites around Greater Houston. Request an MDX Fuel supply quote.',
    eyebrow: 'Bulk supply', image: '/images/services/bulk-fuel-delivery.webp',
    intro: 'For operations that store fuel on site, MDX Fuel can discuss bulk delivery programs for diesel and gasoline. A useful supply plan starts with your tank, consumption pattern and delivery location.',
    sections: [
      ['Tank and product fit', 'Tell us the fuel grade, tank type, usable capacity, fill connection and site access. MDX can review whether the requested product and delivery arrangement fit your operation.'],
      ['Supply cadence', 'Share recent usage, seasonal changes and the minimum stock level you need to maintain. Scheduled and will-call options can be discussed according to delivery capacity.'],
      ['Procurement details', 'Ask about account setup, invoicing, delivery documentation and how the quote handles product, freight and applicable taxes. Terms are confirmed during account review.'],
    ], questions: ['Where is the tank and what is its usable capacity?', 'Which fuel products and approximate gallons are needed?', 'Do you need recurring supply or a one-time fill?'],
    related: ['diesel-delivery-houston', 'generator-fueling-emergency-support'],
  },
  'fleet-fueling-houston': {
    title: 'On-Site Fleet Fueling in Greater Houston',
    description: 'Explore on-site fleet fueling for commercial vehicles based around Greater Houston. Discuss fleet size, yard access, products and operating windows with MDX Fuel.',
    eyebrow: 'Fleet programs', image: '/images/services/fleet-yard.webp',
    intro: 'On-site fueling can bring product to a qualifying fleet yard or staging area. MDX Fuel reviews your vehicle mix, parking pattern, site access and fuel usage before proposing a workable program.',
    sections: [
      ['Map the fueling window', 'Describe when vehicles are parked, how they are identified, and who can grant access. The right window depends on your operation and MDX scheduling.'],
      ['Match products to the fleet', 'Identify diesel, gasoline, DEF and any lubricant needs separately. The team can confirm which products and delivery formats are available for your location.'],
      ['Measure the program', 'Track gallons delivered, stop frequency and the administrative burden of fueling. Evaluate actual results rather than assuming a fixed time or cost saving.'],
    ], questions: ['How many vehicles are fueled at one site?', 'When is the fleet parked and accessible?', 'What product mix and estimated weekly gallons do you need?'],
    related: ['diesel-delivery-houston', 'def-lubricant-delivery'],
  },
  'construction-job-site-fueling': {
    title: 'Construction and Job Site Fueling',
    description: 'Request commercial diesel and off-road fuel delivery for construction equipment and job sites in MDX Fuel’s Greater Houston service area.',
    eyebrow: 'Construction operations', image: '/images/services/construction-site.webp',
    intro: 'Construction fueling depends on changing equipment, site access and project schedules. MDX Fuel can review planned deliveries to qualifying sites for equipment, vehicles, generators or temporary storage.',
    sections: [
      ['Equipment and fuel', 'Provide an equipment list and distinguish on-road vehicles from off-road machinery. Product and tax treatment must match the actual use.'],
      ['Access and safety', 'Identify the site entrance, ground conditions, gate hours, point of contact and any site-specific delivery requirements before arranging a visit.'],
      ['Project cadence', 'Tell us the expected project duration, weekly consumption and whether a temporary tank is being considered. Availability and delivery windows are confirmed by MDX.'],
    ], questions: ['Which machines, vehicles or tanks need fuel?', 'Can a delivery truck safely reach the fueling point?', 'What are the project dates and estimated gallons?'],
    related: ['diesel-delivery-houston', 'bulk-fuel-delivery-houston'],
  },
  'generator-fueling-emergency-support': {
    title: 'Generator Fueling and Urgent Fuel Requests',
    description: 'Plan generator diesel refills or ask MDX Fuel to assess an urgent commercial fuel need in Greater Houston. Availability depends on location, product and capacity.',
    eyebrow: 'Generator readiness', image: '/images/services/generator-fueling.webp',
    intro: 'A planned generator refill is easier to coordinate than a last-minute request. MDX Fuel can review routine supply needs and assess urgent inquiries, subject to location, product availability and delivery capacity.',
    sections: [
      ['Prepare before an outage', 'Record tank capacity, current level, expected run time, access restrictions and the on-site contact. Schedule a review before severe weather when possible.'],
      ['How urgent requests are handled', 'Call MDX with the site address, product, gallons needed and deadline. A request does not reserve product or guarantee an arrival time; dispatch must confirm the order.'],
      ['Keep the quote practical', 'Describe whether the generator serves a facility, job site or temporary operation, and whether recurring checks or refills would reduce last-minute demand.'],
    ], questions: ['What is the generator tank capacity and current level?', 'Where can the truck connect or access the tank?', 'What is the deadline and who can authorize the delivery?'],
    related: ['bulk-fuel-delivery-houston', 'diesel-delivery-houston'],
  },
  'def-lubricant-delivery': {
    title: 'DEF and Lubricant Supply for Commercial Operations',
    description: 'Discuss diesel exhaust fluid and lubricant delivery alongside commercial fuel service around Greater Houston. MDX Fuel reviews formats and availability by order.',
    eyebrow: 'Support products', image: '/images/services/def.webp',
    intro: 'Fuel is only part of a commercial supply plan. MDX Fuel can discuss DEF and lubricant needs for fleets, equipment and facilities, with product specifications and delivery formats reviewed for each account.',
    sections: [
      ['DEF requirements', 'Provide the requested DEF volume, preferred package or storage format, and how often you need replenishment. The team will confirm available formats.'],
      ['Lubricant specifications', 'List the exact equipment manufacturer specifications, grade and quantity before ordering. Product compatibility should be confirmed rather than assumed.'],
      ['Coordinate orders', 'If you already receive fuel, ask whether DEF or lubricants can be scheduled alongside deliveries. Combined service depends on product and route availability.'],
    ], questions: ['Which exact DEF or lubricant specification is needed?', 'What quantity and package size works for your site?', 'Are there existing fuel deliveries to coordinate with?'],
    related: ['fleet-fueling-houston', 'bulk-fuel-delivery-houston'],
  },
};

export const locationPages = {
  tomball: {name:'Tomball', description:'MDX Fuel is based in Tomball. Commercial customers here can discuss bulk tank replenishment, fleet yard fueling and job site diesel from a local operating base.', detail:'For a Tomball request, include the street address, tank or vehicle access, product and expected delivery frequency. The team will confirm the service arrangement and timing.'},
  spring: {name:'Spring', description:'Spring-area fleets, facilities and contractors can request commercial fuel delivery through MDX Fuel’s Greater Houston service area.', detail:'Tell MDX whether the destination is a fleet yard, facility or active job site, along with the product, gallons and access window. Service is confirmed for the specific address.'},
  'the-woodlands': {name:'The Woodlands', description:'Commercial facilities, fleet operations and standby generator sites in The Woodlands can inquire about MDX Fuel supply options.', detail:'For generator or facility supply, include tank capacity, current level, delivery access and any scheduled maintenance window. MDX reviews product and route availability before committing.'},
  conroe: {name:'Conroe', description:'Conroe-area industrial, construction and fleet operators can ask MDX Fuel about planned commercial diesel, bulk fuel and support products.', detail:'Share the site location, equipment or tank details and project schedule. Conroe-area deliveries are assessed against the specific route, volume and product requested.'},
  cypress: {name:'Cypress', description:'Cypress and northwest Houston businesses can request fuel supply for qualifying fleet yards, job sites and on-site storage.', detail:'An address and access details help MDX evaluate a Cypress request. Identify whether you need recurring tank supply, on-site fleet fueling or a project delivery.'},
};
