import React from 'react';
import { publicationData } from '../data/publication';
import { MetaTags } from '../components/seo/MetaTags';
import { Mail, Globe, MapPin, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <MetaTags
        title="About the Publication"
        description="About The Globe Economist — an independent digital review of integrated economics, coastal policy, food-system resilience, and Global South economic architecture edited from New Delhi."
      />

      {/* Title Header */}
      <div className="border-b-2 border-editorial-border pb-6">
        <span className="editorial-kicker text-gold-dark">INSTITUTIONAL IDENTITY</span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep mt-1 mb-2">
          About the Publication
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-muted">
          Journal of International Economics, Sustainable Development & Policy Redesign.
        </p>
      </div>

      {/* Main Narrative */}
      <section className="bg-ivory-paper border border-editorial-border p-8 sm:p-10 space-y-6">
        <p className="font-serif text-xl sm:text-2xl text-navy-deep leading-relaxed font-semibold">
          The Globe Economist is an independent digital review of integrated economics, coastal and blue-economy policy, food-system resilience, and national economic architecture for the Global South.
        </p>

        <p className="text-base text-charcoal/90 leading-relaxed font-sans">
          The publication is edited from New Delhi and presents original essays, policy briefs, research summaries and open letters by Prof. Dr. GVR Shastri and associated researchers. It is the official web publication associated with the Globe Economist platform.
        </p>

        <div className="my-6 h-px bg-editorial-border" />

        {/* Purpose */}
        <div className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-navy-deep flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-muted inline-block"></span>
            <span>Purpose</span>
          </h2>
          <p className="text-base text-charcoal/90 leading-relaxed font-sans bg-ivory-warm p-6 border-l-2 border-gold-muted">
            The review exists to move public debate from maximisation of isolated targets — GDP, throughput, headline investment — toward optimum integration: a design of policy in which livelihoods, coastal infrastructure, human capital and household purchasing power are treated as one system.
          </p>
        </div>

        {/* Scope */}
        <div className="space-y-4 pt-4">
          <h2 className="font-serif text-2xl font-bold text-navy-deep flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-muted inline-block"></span>
            <span>Scope of the Review</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Integrated / Optimum Integration Economics",
              "Coastal India and blue-economy development",
              "Multipurpose multilevel warehousing and food security",
              "Purchasing power of the common citizen",
              "Geoeconomic resilience and Global South policy"
            ].map((scopeItem, idx) => (
              <div key={idx} className="p-4 bg-ivory-warm border border-editorial-border flex items-start gap-3">
                <span className="text-gold-dark font-serif font-bold text-base leading-none mt-0.5">0{idx + 1}</span>
                <span className="text-sm font-sans font-medium text-navy-deep leading-snug">{scopeItem}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frequency and Format */}
        <div className="space-y-3 pt-4 border-t border-editorial-border">
          <h2 className="font-serif text-2xl font-bold text-navy-deep flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-muted inline-block"></span>
            <span>Frequency & Format</span>
          </h2>
          <p className="text-base text-charcoal/90 leading-relaxed font-sans">
            The Globe Economist is published as a digital edition with monthly issue packaging and rolling analyses. Print compilation of selected papers is reserved for later volumes. ISSN registration is in process.
          </p>
        </div>
      </section>

      {/* Publisher & Editorial Office */}
      <section className="bg-ivory-paper border border-editorial-border p-8 sm:p-10 space-y-6" aria-labelledby="editorial-office-heading">
        <span className="editorial-kicker text-gold-dark">ORGANISATIONAL STRUCTURE</span>
        <h2 id="editorial-office-heading" className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep">
          Publisher & Editorial Office
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 bg-ivory-warm border border-editorial-border space-y-3">
            <div className="flex items-center gap-2 text-gold-dark font-sans font-semibold text-xs tracking-loose-editorial uppercase">
              <MapPin size={14} />
              <span>Editorial Office</span>
            </div>
            <p className="font-serif font-bold text-xl text-navy-deep">{publicationData.location}</p>
            <p className="text-sm text-charcoal/80">Digital publishing and editorial operations directed from India's capital.</p>
          </div>

          <div className="p-6 bg-ivory-warm border border-editorial-border space-y-3">
            <div className="flex items-center gap-2 text-gold-dark font-sans font-semibold text-xs tracking-loose-editorial uppercase">
              <Award size={14} />
              <span>Editor-in-Chief</span>
            </div>
            <p className="font-serif font-bold text-lg text-navy-deep">{publicationData.editorInChief.fullName}</p>
            <p className="font-serif italic text-sm text-gold-dark">({publicationData.editorInChief.shortName})</p>
            <p className="text-xs text-muted font-sans">D.Litt. (Integrated Economics), Ph.D. (IIT Delhi)</p>
          </div>
        </div>

        <div className="pt-4 border-t border-editorial-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-muted">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-gold-dark" />
            <span>Correspondence:</span>
            <a href={`mailto:${publicationData.emails.primary}`} className="text-navy-deep font-semibold hover:underline">
              {publicationData.emails.primary}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-gold-dark" />
            <span>Domain:</span>
            <span className="text-navy-deep font-semibold">{publicationData.domain}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
