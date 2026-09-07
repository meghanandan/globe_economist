import React from 'react';
import { allAnalyses } from '../data/analyses';
import { AnalysisItem } from '../components/editorial/AnalysisItem';
import { MetaTags } from '../components/seo/MetaTags';

export const Analyses: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <MetaTags
        title="Analyses"
        description="Selected lines of inquiry and policy frameworks of The Globe Economist covering coastal corridors, logistics architecture, macro diagnostics, and geoeconomic traps."
      />

      {/* Header */}
      <div className="border-b-2 border-editorial-border pb-6">
        <span className="editorial-kicker text-gold-dark">POLICY & STRATEGY</span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep mt-1 mb-2">
          Analyses
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-muted">
          Selected lines of inquiry of The Globe Economist.
        </p>
      </div>

      {/* List of Analyses */}
      <div className="bg-ivory-paper border border-editorial-border px-6 sm:px-10 divide-y divide-editorial-border">
        {allAnalyses.map((item) => (
          <AnalysisItem key={item.id} item={item} />
        ))}
      </div>

      {/* Reference note */}
      <div className="p-6 bg-ivory-paper border border-editorial-border text-center text-xs text-muted font-sans">
        <p>Inquiries and working papers directed by Prof. Dr. GVR Shastri · The Globe Economist Review</p>
      </div>
    </div>
  );
};
