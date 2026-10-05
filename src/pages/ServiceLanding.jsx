import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import Seo from '@/components/shared/Seo';
import { servicePages } from '@/lib/landingPages';
import PageNotFound from '@/lib/PageNotFound';

export default function ServiceLanding() {
  const { slug } = useParams();
  const page = servicePages[slug];
  if (!page) return <PageNotFound />;
  const quote = `/request-quote?service=${encodeURIComponent(page.title)}`;
  return <>
    <Seo title={page.title} description={page.description} path={`/fuel-services/${slug}`} />
    <PageHero eyebrow={page.eyebrow} title={page.title} subtitle={page.description} breadcrumbs={[{label:'Services', path:'/services'}, {label:page.eyebrow}]} bgImage={page.image} />
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[minmax(0,1fr)_19rem] gap-12">
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10">{page.intro}</p>
          <div className="space-y-10">
            {page.sections.map(([heading, body]) => <section key={heading}>
              <h2 className="font-heading text-2xl md:text-3xl text-primary mb-3">{heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </section>)}
          </div>
          <section className="mt-12 rounded-xl bg-muted/50 border border-border p-7">
            <h2 className="font-heading text-2xl text-primary mb-4">What to have ready</h2>
            <ul className="space-y-3">{page.questions.map(q => <li key={q} className="flex gap-3 text-muted-foreground"><CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-accent" />{q}</li>)}</ul>
          </section>
          <section className="mt-12">
            <h2 className="font-heading text-2xl text-primary mb-4">Related commercial fuel services</h2>
            <div className="grid sm:grid-cols-2 gap-3">{page.related.map(key => <Link key={key} to={`/fuel-services/${key}`} className="flex items-center justify-between border border-border rounded-lg px-5 py-4 hover:border-accent text-primary font-medium">{servicePages[key].title}<ArrowRight className="w-4 h-4 shrink-0 ml-2" /></Link>)}</div>
          </section>
        </div>
        <aside className="lg:sticky lg:top-28 self-start bg-primary text-white rounded-xl p-7">
          <h2 className="font-heading text-2xl mb-3">Discuss your delivery</h2>
          <p className="text-white/75 text-sm leading-relaxed mb-6">Tell us your location, product, estimated gallons and timing. MDX confirms availability, pricing and delivery details before accepting an order.</p>
          <Link to={quote} className="flex justify-center items-center gap-2 bg-accent text-accent-foreground rounded-lg px-4 py-3 font-bold hover:bg-accent/90">Request a commercial quote <ArrowRight className="w-4 h-4" /></Link>
          <a href="tel:+17133333835" className="flex justify-center items-center gap-2 mt-4 text-white hover:text-accent"><Phone className="w-4 h-4" />1 (713) 333-FUEL</a>
        </aside>
      </div>
    </section>
  </>;
}
