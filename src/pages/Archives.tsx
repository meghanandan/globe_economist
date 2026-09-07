import React from 'react';
import { archiveIssues, archiveCollationNotice } from '../data/archives';
import { ArchiveItem } from '../components/editorial/ArchiveItem';
import { MetaTags } from '../components/seo/MetaTags';
import { Info } from 'lucide-react';

export const Archives: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <MetaTags
        title="Archives"
        description="Archives of The Globe Economist. Volume III issues (June–September 2026) covering integrated economics, coastal development, and purchasing power."
      />

      {/* Header */}
      <div className="border-b-2 border-editorial-border pb-6">
        <span className="editorial-kicker text-gold-dark">REPOSITORY</span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep mt-1 mb-2">
          Archives
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-muted">
          Volume III issues, June–September 2026
        </p>
      </div>

      {/* Archives Grid */}
      <div className="space-y-6">
        {archiveIssues.map((issue) => (
          <ArchiveItem key={issue.id} issue={issue} />
        ))}
      </div>

      {/* Migration / Collation Notice */}
      <div className="p-6 bg-ivory-paper border border-editorial-border flex items-start gap-4 text-xs font-sans text-charcoal/80">
        <Info size={18} className="text-gold-dark shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-navy-deep uppercase tracking-wider text-[11px] block mb-1">
            Archival Collation Notice
          </span>
          <p className="leading-relaxed">
            {archiveCollationNotice}
          </p>
        </div>
      </div>
    </div>
  );
};
