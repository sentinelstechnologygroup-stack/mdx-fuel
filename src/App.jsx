import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import SiteLayout from './components/layout/SiteLayout';

import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Industries from './pages/Industries';
import ServiceArea from './pages/ServiceArea';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';
import OpenAccount from './pages/OpenAccount';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Accessibility from './pages/Accessibility';
import CookiePolicy from './pages/CookiePolicy';
import SMSPolicy from './pages/SMSPolicy';
import Sitemap from './pages/Sitemap';
import Portal from './pages/Portal';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/service-area" element={<ServiceArea />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/open-account" element={<OpenAccount />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/sms-policy" element={<SMSPolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Route>
          <Route path="/portal" element={<Portal />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
      <SonnerToaster />
    </QueryClientProvider>
  );
}

export default App;
