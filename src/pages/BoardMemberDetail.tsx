import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { editorialBoardMembers } from '../data/editorialBoard';
import { MetaTags } from '../components/seo/MetaTags';
import { ArrowLeft, Mail, ExternalLink, ShieldCheck, MapPin, Building2, Award } from 'lucide-react';

export const BoardMemberDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const member = editorialBoardMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center space-y-6">
        <h1 className="font-serif text-3xl font-bold text-navy-deep">Member Profile Not Found</h1>
        <p className="text-muted font-sans">The requested board member could not be located in our official listing.</p>
        <Link 
          to="/editorial-board"
          className="btn-editorial-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Return to Editorial Board</span>
        </Link>
      </div>
    );
  }

  const isInternational = member.category === 'Foreign';
  const pageTitle = `${member.name} — Editorial Board Official Listing`;
  const pageDesc = `Official profile, academic credentials and editorial responsibilities of ${member.name} for The Globe Economist.`;

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      <MetaTags title={pageTitle} description={pageDesc} />

      {/* Back navigation */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => navigate('/editorial-board')}
          className="text-xs font-sans font-semibold uppercase tracking-wider text-muted hover:text-navy-deep transition-colors flex items-center gap-2 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Editorial Board</span>
        </button>
      </div>

      {/* Official Sheet Container */}
      <div className="bg-ivory-paper border border-editorial-border sm:border-2 shadow-md p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-navy-deep" />

        {/* Clean Official Document Header */}
        <div className="border-b border-editorial-border pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="editorial-kicker text-gold-dark text-[10px] sm:text-xs">
                {isInternational ? 'INTERNATIONAL MEMBERS' : 'INDIAN EDITORIAL BOARD'}
              </span>
              <span className="text-muted text-xs">•</span>
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider text-muted uppercase">
                OFFICIAL RECORD
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-deep leading-tight">
              {isInternational ? 'International Members — Official Listing' : 'Indian Editorial Board — Official Listing'}
            </h1>
            <p className="font-serif italic text-xs sm:text-sm text-gold-dark mt-0.5">
              Founder &amp; Editor-in-Chief: Prof. Dr. GVR Shastri
            </p>
          </div>
        </div>

        {/* Status Subheading */}
        <div>
          <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-loose-editorial uppercase text-gold-dark block mb-2">
            {isInternational ? 'NEWLY APPOINTED INTERNATIONAL MEMBER' : 'NEWLY APPOINTED MEMBER'}
          </span>

          {/* Member Card Box (Golden Outline) */}
          <div className="border border-gold-dark/60 bg-white/70 p-4 sm:p-6 md:p-7 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start shadow-sm">
            {member.imageUrl ? (
              <div className="w-24 h-32 sm:w-32 sm:h-40 shrink-0 border border-gold-muted/50 overflow-hidden bg-ivory-warm shadow-sm mx-auto sm:mx-0">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ) : (
              <div className="w-24 h-32 sm:w-32 sm:h-40 shrink-0 border border-gold-muted/50 bg-ivory-warm flex items-center justify-center text-muted font-serif text-3xl font-bold mx-auto sm:mx-0">
                {member.name.slice(0, 2)}
              </div>
            )}

            <div className="space-y-2.5 sm:space-y-3 flex-1 text-center sm:text-left min-w-0 w-full">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-navy-deep leading-tight break-words">
                  {member.name} {member.honorific && <span className="text-sm sm:text-base font-normal font-sans text-muted">({member.honorific})</span>}
                </h2>
                <p className="font-serif italic text-xs sm:text-sm text-gold-dark font-medium mt-0.5">
                  {member.designation}
                </p>
              </div>

              {member.fullTitle && (
                <p className="text-xs sm:text-sm font-sans font-semibold text-charcoal/90 leading-snug break-words">
                  {member.fullTitle}
                </p>
              )}

              {/* Location & Contact */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1.5 gap-x-2.5 sm:gap-x-3 text-xs font-sans text-charcoal/80 pt-1">
                {member.location && (
                  <span className="inline-flex items-center gap-1 font-medium shrink-0">
                    <MapPin size={13} className="text-gold-dark" />
                    <span>{member.location}</span>
                  </span>
                )}
                {member.email && (
                  <>
                    {member.location && <span className="text-muted hidden sm:inline">•</span>}
                    <a href={`mailto:${member.email}`} className="inline-flex items-center gap-1 text-navy-deep font-medium hover:text-gold-dark transition-colors break-all">
                      <Mail size={13} className="text-gold-dark shrink-0" />
                      <span className="break-all">{member.email}</span>
                    </a>
                  </>
                )}
              </div>

              {/* Academic Background / Pedigree */}
              {member.academicBackground && (
                <p className="text-xs sm:text-sm font-sans text-charcoal/85 leading-relaxed pt-2.5 border-t border-editorial-border/60 break-words text-left">
                  {member.academicBackground}
                </p>
              )}

              {/* External Links */}
              {(member.profileLink || member.secondaryProfileLink) && (
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-2">
                  {member.profileLink && (
                    <a 
                      href={member.profileLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-sans font-medium text-navy-deep hover:text-gold-dark underline"
                    >
                      <ExternalLink size={12} />
                      <span>Official Profile Link</span>
                    </a>
                  )}
                  {member.secondaryProfileLink && (
                    <a 
                      href={member.secondaryProfileLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-sans font-medium text-navy-deep hover:text-gold-dark underline"
                    >
                      <ExternalLink size={12} />
                      <span>Institutional Profile</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section: Areas of Editorial Contribution */}
        {member.areasOfContribution && member.areasOfContribution.length > 0 && (
          <section className="space-y-2.5 sm:space-y-3" aria-labelledby="areas-contribution-heading">
            <h3 id="areas-contribution-heading" className="font-serif text-xs sm:text-sm md:text-base font-bold text-navy-deep tracking-wider uppercase border-b border-editorial-border pb-1.5 flex items-center gap-2">
              <Award size={16} className="text-gold-dark shrink-0" />
              <span>AREAS OF EDITORIAL CONTRIBUTION</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-sans text-charcoal/90 pt-1">
              {member.areasOfContribution.map((area, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-gold-dark font-serif font-bold text-base leading-none mt-0.5 shrink-0">•</span>
                  <span className="leading-snug break-words">{area}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Section: Professional Highlights */}
        {member.professionalHighlights && (
          <section className="space-y-2.5 sm:space-y-3" aria-labelledby="professional-highlights-heading">
            <h3 id="professional-highlights-heading" className="font-serif text-xs sm:text-sm md:text-base font-bold text-navy-deep tracking-wider uppercase border-b border-editorial-border pb-1.5 flex items-center gap-2">
              <Building2 size={16} className="text-gold-dark shrink-0" />
              <span>PROFESSIONAL HIGHLIGHTS (FOR BOARD RECORD)</span>
            </h3>
            <p className="text-xs sm:text-sm font-sans text-charcoal/90 leading-relaxed pt-1 text-left sm:text-justify break-words">
              {member.professionalHighlights}
            </p>
          </section>
        )}

        {/* Official Appointment Record Notice */}
        <div className="bg-ivory-warm/60 border border-editorial-border p-3.5 sm:p-5 text-xs font-sans text-charcoal/85 leading-relaxed space-y-3">
          <div className="flex items-start gap-2.5">
            <ShieldCheck size={16} className="text-gold-dark mt-0.5 shrink-0" />
            <p className="break-words">
              The Globe Economist welcomes {member.name} to the Editorial Board and records this association for all official, academic and public-facing listings.
            </p>
          </div>
          
          <div className="pt-3 border-t border-editorial-border/60 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 text-[10px] sm:text-[11px] text-muted">
            <div>
              <p className="font-serif italic">Issued by</p>
              <p className="font-bold text-navy-deep">Office of the Founder &amp; Editor-in-Chief</p>
              <p>The Globe Economist, New Delhi</p>
            </div>
            <p className="font-mono text-left sm:text-right">
              The Globe Economist · Editorial Board Listing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
