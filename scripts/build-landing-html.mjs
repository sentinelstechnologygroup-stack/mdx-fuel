import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { servicePages, locationPages } from '../src/lib/landingPages.js';

const origin = 'https://mdxfuel.com';
const base = await readFile('dist/index.html', 'utf8');
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

async function output(path, title, description, content, index = true) {
  const url = `${origin}${path}`;
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)} | MDX Fuel</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${esc(description)}" />`)
    .replace(/<meta name="robots" content="[^"]*"\s*\/>/, `<meta name="robots" content="${index ? 'index, follow' : 'noindex, follow'}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${esc(title)} | MDX Fuel" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${esc(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${esc(title)} | MDX Fuel" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${esc(description)}" />`)
    .replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  const dir = join('dist', path);
  await mkdir(dir, {recursive:true});
  await writeFile(join(dir, 'index.html'), html);
}

for (const [slug, page] of Object.entries(servicePages)) {
  const path = `/fuel-services/${slug}`;
  const content = `<main class="max-w-5xl mx-auto px-6 py-16"><a href="/services">Services</a><h1 class="text-4xl font-bold">${esc(page.title)}</h1><p class="mt-5">${esc(page.intro)}</p>${page.sections.map(([h,p])=>`<section class="mt-8"><h2 class="text-2xl font-bold">${esc(h)}</h2><p>${esc(p)}</p></section>`).join('')}<h2 class="mt-8 text-2xl font-bold">What to have ready</h2><ul>${page.questions.map(q=>`<li>${esc(q)}</li>`).join('')}</ul><p class="mt-8"><a href="/request-quote?service=${encodeURIComponent(page.title)}">Request a commercial quote</a> · <a href="tel:+17133333835">Call MDX Fuel</a></p></main>`;
  await output(path, page.title, page.description, content);
}
for (const [slug, page] of Object.entries(locationPages)) {
  const path = `/fuel-delivery/${slug}`;
  const title = `Commercial Fuel Delivery in ${page.name}, TX`;
  const description = `${page.description} Ask MDX Fuel to confirm availability for your address and product.`;
  const content = `<main class="max-w-5xl mx-auto px-6 py-16"><a href="/service-area">Service area</a><h1 class="text-4xl font-bold">${esc(title)}</h1><p class="mt-5">${esc(page.description)}</p><h2 class="mt-8 text-2xl font-bold">Plan a delivery in ${esc(page.name)}</h2><p>${esc(page.detail)}</p><p>Coverage and timing depend on the exact location, product, gallons and MDX capacity. An inquiry does not confirm service.</p><p class="mt-8"><a href="/request-quote?location=${encodeURIComponent(page.name)}">Request a ${esc(page.name)} quote</a></p></main>`;
  await output(path, title, description, content, false);
}
const sitemapPaths = ['/', '/products','/services','/industries','/service-area','/about','/resources','/contact','/request-quote','/open-account',...Object.keys(servicePages).map(k=>`/fuel-services/${k}`)];
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapPaths.map(p=>`  <url><loc>${origin}${p}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Built ${Object.keys(servicePages).length} service and ${Object.keys(locationPages).length} location landing HTML files`);
