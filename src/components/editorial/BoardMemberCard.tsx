import React from 'react';
import { ExternalLink, Mail, Building2 } from 'lucide-react';
import { EditorialBoardMember } from '../../data/editorialBoard';

interface BoardMemberCardProps {
  member: EditorialBoardMember;
}

export const BoardMemberCard: React.FC<BoardMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-ivory-paper border border-editorial-border p-6 flex flex-col h-full hover:shadow-sm transition-shadow">
      <div className="flex-1 flex flex-col sm:flex-row gap-4 mb-6">
        {member.imageUrl && (
          <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border border-gold-muted/40 shadow-sm">
            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h3 className="font-serif text-xl font-bold text-navy-deep">{member.name}</h3>
          <p className="text-sm font-sans text-gold-dark font-medium mt-1">{member.designation}</p>
        </div>
      </div>
        
      <div className="space-y-2 mb-6">
          <p className="text-sm text-charcoal/90 font-sans font-semibold">
            {member.department}
          </p>
          <div className="flex items-start gap-2 text-sm text-charcoal/80 font-sans">
            <Building2 size={16} className="mt-0.5 shrink-0 text-muted" />
            <span>{member.institution}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-editorial-border/60 flex flex-col gap-2 mt-auto">
        <a 
          href={`mailto:${member.email}`}
          className="text-xs font-sans text-navy-deep hover:text-gold-dark flex items-center gap-1.5 transition-colors"
        >
          <Mail size={14} />
          <span className="truncate">{member.email}</span>
        </a>
        
        {member.profileLink ? (
          <a 
            href={member.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans text-navy-deep hover:text-gold-dark flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink size={14} />
            <span>View Academic Profile</span>
          </a>
        ) : (
          <span className="text-[11px] font-sans text-muted flex items-center gap-1.5 uppercase tracking-wider font-semibold">
            <ExternalLink size={14} />
            <span>Profile Link Pending</span>
          </span>
        )}
      </div>
    </div>
  );
};
