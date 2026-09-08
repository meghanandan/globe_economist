import React from 'react';
import { publicationData } from '../data/publication';
import { MetaTags } from '../components/seo/MetaTags';
import { Mail, ExternalLink, MapPin, Building, FileCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <MetaTags
        title="Contact the Editorial Office"
        description="Official correspondence details for The Globe Economist Editorial Office in New Delhi, India. Email and accreditation protocol."
      />

      {/* Header */}
      <div className="border-b-2 border-editorial-border pb-6">
        <span className="editorial-kicker text-gold-dark">EDITORIAL DESK & INQUIRIES</span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep mt-1 mb-2">
          Contact the Editorial Office
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-muted">
          Official correspondence, editorial verification, and institutional communications.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Publication & Office Information */}
        <section className="bg-ivory-paper border border-editorial-border p-8 space-y-6" aria-labelledby="office-info-heading">
          <div>
            <span className="editorial-kicker text-gold-dark">HEADQUARTERS</span>
            <h2 id="office-info-heading" className="font-serif text-2xl font-bold text-navy-deep mt-1">
              Editorial Office
            </h2>
          </div>

          <div className="space-y-4 text-sm font-sans">
            <div className="flex items-start gap-3">
              <Building size={18} className="text-gold-dark shrink-0 mt-0.5" />
              <div>
                <p className="font-serif font-bold text-base text-navy-deep">{publicationData.title}</p>
                <p className="text-muted text-xs">{publicationData.subtitle}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gold-dark shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy-deep">Location</p>
                <p className="text-charcoal/80">{publicationData.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ExternalLink size={18} className="text-gold-dark shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy-deep">Related Official Platform</p>
                <a
                  href={publicationData.relatedSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-dark hover:underline flex items-center gap-1 font-medium mt-0.5"
                >
                  <span>profdrgvr.com</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Correspondence */}
        <section className="bg-ivory-paper border border-editorial-border p-8 space-y-6" aria-labelledby="correspondence-heading">
          <div>
            <span className="editorial-kicker text-gold-dark">COMMUNICATIONS</span>
            <h2 id="correspondence-heading" className="font-serif text-2xl font-bold text-navy-deep mt-1">
              Direct Inquiries
            </h2>
          </div>

          <div className="space-y-4 text-sm font-sans">
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-gold-dark shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy-deep">Primary Editorial Email</p>
                <a
                  href={`mailto:${publicationData.emails.primary}`}
                  className="text-gold-dark hover:underline font-medium"
                >
                  {publicationData.emails.primary}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="text-gold-dark shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy-deep">Alternate Correspondence Email</p>
                <a
                  href={`mailto:${publicationData.emails.alternate}`}
                  className="text-gold-dark hover:underline font-medium"
                >
                  {publicationData.emails.alternate}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Official Correspondence Instruction Notice */}
      <section className="p-8 bg-ivory-paper border-2 border-gold-muted/40 relative" aria-labelledby="protocol-heading">
        <div className="flex items-start gap-4">
          <FileCheck size={24} className="text-gold-dark shrink-0 mt-1" />
          <div className="space-y-3">
            <h2 id="protocol-heading" className="font-serif text-xl font-bold text-navy-deep">
              Official Institutional Correspondence Protocol
            </h2>
            <p className="text-sm font-sans text-charcoal/90 leading-relaxed">
              For ISSN, indexing, media accreditation and institutional listing correspondence, write with the subject line:
            </p>
            <div className="p-4 bg-ivory-warm border border-editorial-border inline-block w-full">
              <code className="text-xs sm:text-sm font-serif font-bold text-navy-deep select-all">
                Publication Verification — The Globe Economist
              </code>
            </div>
            <p className="text-xs text-muted font-sans italic">
              Please direct all formal verification requests to the primary editorial email address.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
