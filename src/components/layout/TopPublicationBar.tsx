import React from 'react';
import { publicationData } from '../../data/publication';

export const TopPublicationBar: React.FC = () => {
  return (
    <div className="bg-navy-deep text-ivory-warm/80 border-b border-gold-muted/20 text-[11px] tracking-loose-editorial uppercase py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 text-center md:text-left font-sans font-medium">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-muted inline-block"></span>
          <span>{publicationData.currentIssue.topBarLeft}</span>
        </div>
        <div className="text-gold-muted/90 tracking-loose-editorial">
          {publicationData.currentIssue.topBarRight}
        </div>
      </div>
    </div>
  );
};
