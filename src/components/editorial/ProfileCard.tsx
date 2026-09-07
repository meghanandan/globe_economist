import React from 'react';
import { publicationData } from '../../data/publication';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export const ProfileCard: React.FC = () => {
  const { editorInChief, imprint, emails, phone, relatedSite } = publicationData;

  return (
    <div className="space-y-12">
      {/* Editor-in-Chief Profile */}
      <section className="bg-ivory-paper border border-editorial-border p-6 sm:p-8 md:p-10 relative">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-editorial-border">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-2 border-gold-muted/40 shadow-sm">
              <img src="/shastri.jpg" alt={editorInChief.fullName} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="editorial-kicker text-gold-dark">EDITOR-IN-CHIEF</span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-deep mt-1">
                {editorInChief.fullName}
              </h2>
              <p className="font-serif text-lg text-gold-dark italic mt-0.5">
                ({editorInChief.shortName})
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:self-center">
            <a
              href={`mailto:${emails.primary}`}
              className="btn-editorial-primary text-xs flex items-center gap-1.5"
            >
              <Mail size={14} />
              <span>Contact Editor</span>
            </a>
            <a
              href={relatedSite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-outline text-xs flex items-center gap-1.5"
            >
              <span>Personal Site</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          {/* Academic & Professional Credentials */}
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-loose-editorial uppercase text-navy-deep border-b border-gold-muted/30 pb-2 mb-4">
              Academic & Professional Credentials
            </h3>
            <ul className="space-y-2.5 text-sm text-charcoal font-sans">
              {editorInChief.credentials.map((cred, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-gold-dark font-serif font-bold text-base leading-none mt-0.5">•</span>
                  <span className="leading-snug">{cred}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Roles */}
          <div>
            <h3 className="text-xs font-sans font-semibold tracking-loose-editorial uppercase text-navy-deep border-b border-gold-muted/30 pb-2 mb-4">
              Institutional Leadership & Appointments
            </h3>
            <ul className="space-y-2.5 text-sm text-charcoal font-sans">
              {editorInChief.roles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-gold-dark font-serif font-bold text-base leading-none mt-0.5">•</span>
                  <span className="leading-snug">{role}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-editorial-border text-xs text-muted space-y-1">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-navy-deep">Primary Office:</span>
                <span>New Delhi, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-navy-deep">Official Correspondence:</span>
                <a href={`mailto:${emails.primary}`} className="text-gold-dark hover:underline">{emails.primary}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Imprint */}
      <section className="bg-ivory-paper border border-editorial-border p-6 sm:p-8" aria-labelledby="imprint-heading">
        <span className="editorial-kicker text-gold-dark">OFFICIAL RECORD</span>
        <h2 id="imprint-heading" className="font-serif text-2xl font-bold text-navy-deep mt-1 mb-6">
          Publication Imprint & Registration
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="border-l-2 border-gold-muted/40 pl-3">
            <span className="text-[11px] uppercase tracking-wider text-muted font-sans block mb-1">Publication</span>
            <p className="font-serif font-bold text-navy-deep">{imprint.title}</p>
          </div>

          <div className="border-l-2 border-gold-muted/40 pl-3">
            <span className="text-[11px] uppercase tracking-wider text-muted font-sans block mb-1">Place of Publication</span>
            <p className="font-sans font-semibold text-navy-deep">{imprint.place}</p>
          </div>

          <div className="border-l-2 border-gold-muted/40 pl-3">
            <span className="text-[11px] uppercase tracking-wider text-muted font-sans block mb-1">Medium & Language</span>
            <p className="font-sans text-navy-deep">{imprint.medium} · {imprint.language}</p>
          </div>

          <div className="border-l-2 border-gold-muted/40 pl-3">
            <span className="text-[11px] uppercase tracking-wider text-muted font-sans block mb-1">ISSN Identifier</span>
            <p className="font-sans font-semibold text-gold-dark">{imprint.issn}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-editorial-border text-xs text-muted font-sans flex flex-col sm:flex-row justify-between gap-2">
          <p>Official digital review published in New Delhi, India.</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${emails.primary}`} className="hover:text-gold-dark flex items-center gap-1">
              <Mail size={12} /> {emails.primary}
            </a>
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-gold-dark flex items-center gap-1">
              <Phone size={12} /> {phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
