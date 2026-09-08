import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Building2, UserCheck, ArrowRight } from 'lucide-react';
import { EditorialBoardMember } from '../../data/editorialBoard';

interface BoardMemberCardProps {
  member: EditorialBoardMember;
}

export const BoardMemberCard: React.FC<BoardMemberCardProps> = ({ member }) => {
  const hasDetailPage = !!member.areasOfContribution || !!member.academicBackground;

  return (
    <div className="bg-ivory-paper border border-editorial-border p-5 sm:p-6 flex flex-col h-full hover:shadow-md transition-all group">
      <div className="flex-1">
        <div className="flex flex-row gap-3.5 sm:gap-4 mb-5 items-start">
          {member.imageUrl ? (
            <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-sm overflow-hidden shrink-0 border border-gold-muted/40 shadow-sm bg-ivory-warm">
              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover object-top" />
            </div>
          ) : (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-ivory-warm border border-editorial-border shrink-0 flex items-center justify-center font-serif text-navy-deep font-bold text-base sm:text-lg">
              {member.name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('')}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-navy-deep group-hover:text-gold-dark transition-colors leading-snug">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-gold-dark font-medium mt-1 leading-tight">
              {member.designation}
            </p>
            {member.location && (
              <p className="text-[11px] sm:text-xs font-sans text-muted mt-0.5">
                {member.location}
              </p>
            )}
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <p className="text-xs sm:text-sm text-charcoal/90 font-sans font-medium line-clamp-2">
            {member.fullTitle || member.department}
          </p>
          <div className="flex items-start gap-2 text-xs text-charcoal/80 font-sans">
            <Building2 size={14} className="mt-0.5 shrink-0 text-muted" />
            <span className="line-clamp-2">{member.institution}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-editorial-border/60 flex flex-col gap-2.5 mt-auto">
        {member.email && (
          <a 
            href={`mailto:${member.email}`}
            className="text-xs font-sans text-navy-deep hover:text-gold-dark flex items-center gap-1.5 transition-colors"
          >
            <Mail size={13} className="text-gold-dark shrink-0" />
            <span className="truncate">{member.email}</span>
          </a>
        )}
        
        {member.profileLink && (
          <a 
            href={member.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans text-navy-deep hover:text-gold-dark flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink size={13} className="text-gold-dark shrink-0" />
            <span>Academic / Professional Profile</span>
          </a>
        )}

        {hasDetailPage && (
          <Link
            to={`/editorial-board/${member.id}`}
            className="mt-2 w-full py-2 px-3 bg-navy-deep text-ivory-warm hover:bg-gold-dark font-sans font-semibold text-xs tracking-wider uppercase text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
          >
            <UserCheck size={13} />
            <span>View Full Official Profile</span>
            <ArrowRight size={13} />
          </Link>
        )}
      </div>
    </div>
  );
};
