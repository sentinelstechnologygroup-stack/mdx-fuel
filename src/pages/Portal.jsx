import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, Shield, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Portal() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const atlasCrmUrl = import.meta.env.VITE_ATLAS_CRM_URL || 'https://mdx-fuel-atlas-crm.vercel.app/';
  const firebaseApiKey = 'AIzaSyAVLzfh6YrQgi_FFS6Ql8rPAPFX7f8SE3k';
  const sessionExchangeUrl = 'https://us-central1-mdx-fuel-atlas-crm-dev.cloudfunctions.net/createAtlasPortalSession';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSigningIn(true);
    try {
      const authResponse = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseApiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password, returnSecureToken: true }),
      });
      const authPayload = await authResponse.json();
      if (!authResponse.ok) throw new Error('Unable to sign in with that email and password.');

      const exchangeResponse = await fetch(sessionExchangeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: authPayload.idToken }),
      });
      const exchangePayload = await exchangeResponse.json();
      if (!exchangeResponse.ok || !exchangePayload.customToken) {
        throw new Error('This account is not authorized for the Atlas CRM.');
      }
      window.location.assign(`${atlasCrmUrl}?portalToken=${encodeURIComponent(exchangePayload.customToken)}`);
    } catch (signInError) {
      setError(signInError.message || 'Unable to sign in. Please try again.');
      setIsSigningIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Gold top accent */}
      <div className="h-1 bg-accent w-full shrink-0" />

      {/* Logo bar */}
      <div className="py-5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center shrink-0">
              <div className="w-4 h-4 border-2 border-primary rounded-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-sm" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-heading text-2xl tracking-widest text-white leading-none">MDX FUEL</div>
              <div className="text-[10px] text-white/40 tracking-widest uppercase leading-none">Tomball, Texas</div>
            </div>
          </Link>
          <Link to="/" className="text-white/50 hover:text-white text-sm transition-colors">
            ← Back to Website
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-accent/10 border border-accent/30 rounded-full flex items-center justify-center mx-auto mb-5">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-white tracking-wide mb-2">
              MDX Fuel Portal Access
            </h1>
            <p className="text-white/55 text-sm leading-relaxed">
              Secure access for approved MDX Fuel customers and administrative users.
            </p>
          </div>

          {/* Notice banner */}
          <div className="bg-accent/10 border border-accent/25 rounded-lg px-4 py-3 mb-6 flex items-start gap-3">
            <Shield className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <p className="text-white/70 text-xs leading-relaxed">
              Atlas CRM is the secure workspace for approved MDX Fuel employees. Select Sign In to continue to the CRM login.
            </p>
          </div>

          {/* Login card */}
          <div className="bg-secondary/70 border border-white/10 rounded-xl p-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && <p className="rounded-md border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">{error}</p>}
              <div className="space-y-1.5">
                <Label htmlFor="portal-email" className="text-white/75 text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                  <Input
                    id="portal-email"
                    type="email"
                    autoComplete="username"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    placeholder="you@company.com"
                    className="pl-10 h-11 bg-white/8 border-white/15 text-white placeholder:text-white/25 focus-visible:ring-accent focus-visible:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="portal-password" className="text-white/75 text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                  <Input
                    id="portal-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    placeholder="••••••••"
                    className="pl-10 pr-10 h-11 bg-white/8 border-white/15 text-white placeholder:text-white/25 focus-visible:ring-accent focus-visible:border-accent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSigningIn}
                className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg text-sm tracking-wide"
              >
                {isSigningIn ? 'Signing In…' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <span className="text-white/35 text-xs cursor-default">Forgot your password? Use the reset option below after signing in.</span>
            </div>
          </div>

          {/* Need access CTA */}
          <div className="mt-5 text-center border border-white/10 rounded-xl px-6 py-5 bg-white/5">
            <p className="text-white/50 text-sm mb-3">Don't have portal access yet?</p>
            <Link to="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold gap-2 text-sm rounded-lg">
                <ArrowRight className="w-4 h-4" />
                Need Access? Contact MDX Fuel
              </Button>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-6 text-center">
        <p className="text-white/25 text-xs">
          &copy; {new Date().getFullYear()} MDX Fuel. Tomball, Texas.&nbsp;&nbsp;·&nbsp;&nbsp;
          <Link to="/privacy-policy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <Link to="/terms-of-service" className="hover:text-white/50 transition-colors">Terms of Service</Link>
        </p>
      </div>
    </div>
  );
}
