import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import Seo from '@/components/shared/Seo';
import PageNotFound from '@/lib/PageNotFound';
import { locationPages, servicePages } from '@/lib/landingPages';

export default function LocationLanding() {
  const { slug } = useParams();
  const page = locationPages[slug];
  if (!page) return <PageNotFound />;
  const title = `Commercial Fuel Delivery in ${page.name}, TX`;
  return <>
    <Seo title={title} description={`${page.description} Ask MDX Fuel to confirm availability for your address and product.`} path={`/fuel-delivery/${slug}`} index={false} />
    <PageHero eyebrow="Greater Houston service area" title={title} subtitle={page.description} breadcrumbs={[{label:'Service Area', path:'/service-area'}, {label:page.name}]} bgImage="/images/backgrounds/houston-aerial.webp" />
    <section className="py-16 bg-white"><div className="max-w-5xl mx-auto px-6">
      <h2 className="font-heading text-3xl text-primary mb-5">Plan a delivery in {page.name}</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">{page.detail}</p>
      <p className="text-muted-foreground leading-relaxed mb-10">Coverage and timing depend on the exact location, product, gallons and MDX capacity. An inquiry does not confirm service or reserve a delivery window.</p>
      <h2 className="font-heading text-2xl text-primary mb-5">Discuss the right service</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-10">{['diesel-delivery-houston','bulk-fuel-delivery-houston','fleet-fueling-houston'].map(key => <Link key={key} to={`/fuel-services/${key}`} className="rounded-xl border border-border p-6 hover:border-accent"><h3 className="font-semibold text-primary mb-2">{servicePages[key].title}</h3><p className="text-sm text-muted-foreground">{servicePages[key].intro}</p><ArrowRight className="w-5 h-5 text-accent mt-4" /></Link>)}</div>
      <Link to={`/request-quote?location=${encodeURIComponent(page.name)}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-lg px-6 py-3 font-bold">Request a {page.name} quote <ArrowRight className="w-4 h-4" /></Link>
    </div></section>
  </>;
}
