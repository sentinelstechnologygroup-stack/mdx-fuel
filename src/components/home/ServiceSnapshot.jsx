import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fuel, Truck, Building2, Cpu, AlertTriangle, Container, Zap, Droplets, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const SERVICES = [
  { icon: Fuel, title: 'Bulk Fuel Delivery', desc: 'High-volume diesel and gasoline delivery to your facility, fleet yard, or job site on your schedule.', path: '/services#bulk', color: 'text-amber-600' },
  { icon: Truck, title: 'On-Site Fleet Fueling', desc: 'Mobile fueling for truck fleets and equipment yards — no detours, no downtime.', path: '/services#fleet', color: 'text-blue-600' },
  { icon: Fuel, title: 'Diesel Fuel Delivery', desc: 'On-highway and off-road diesel delivered to construction sites, fleets, and industrial facilities.', path: '/services#bulk', color: 'text-amber-600' },
  { icon: Building2, title: 'Gasoline Delivery', desc: 'Regular and premium gasoline supply for mixed-fleet operations and commercial facilities.', path: '/services#bulk', color: 'text-steel' },
  { icon: Droplets, title: 'Lubricants & Oils', desc: 'Motor oils, hydraulic fluids, gear oils, and greases delivered with your fuel or on a separate schedule.', path: '/services#lubricants', color: 'text-amber-700' },
  { icon: Container, title: 'Diesel Exhaust Fluid', desc: 'DEF supply for modern diesel equipment — keeping your fleet compliant and running clean.', path: '/services#def', color: 'text-blue-500' },
  { icon: Zap, title: 'Generator Fueling', desc: 'Reliable diesel delivery for standby generators — commercial buildings, data centers, and emergency backup systems.', path: '/services#generator', color: 'text-amber-500' },
  { icon: Cpu, title: 'Fuel Tanks & Equipment', desc: 'Storage tank supply, installation support, and on-site inventory monitoring solutions.', path: '/services#tanks', color: 'text-slate-500' },
  { icon: AlertTriangle, title: 'Emergency Fuel Support', desc: 'Rapid-response fuel delivery for disaster recovery, storm prep, and critical infrastructure continuity.', path: '/services#emergency', color: 'text-orange-600' },
];

export default function ServiceSnapshot() {
  return (
    <section className="py-20 bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionHeader
            eyebrow="What We Deliver"
            title="Fuel and Petroleum Services for Texas Businesses"
            subtitle="From scheduled bulk deliveries to emergency response fueling — MDX Fuel supports fleets, construction, industrial operations, and more."
            align="center"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={service.path} className="group block h-full bg-white border border-border shadow-sm rounded-xl p-6 hover:border-accent hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 bg-primary/5 border border-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                  <service.icon className={`w-5 h-5 ${service.color}`} />
                </div>
                <h3 className="font-display font-bold text-foreground text-base mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="text-accent font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}