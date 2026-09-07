import React from 'react';
import { ProfileCard } from '../components/editorial/ProfileCard';
import { MetaTags } from '../components/seo/MetaTags';

export const EditorialBoard: React.FC = () => {
  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <MetaTags
        title="Editorial Board & Imprint"
        description="Editorial Board and Publication Imprint for The Globe Economist — Integrated Economics Review. Led by Editor-in-Chief Prof. Dr. GVR Shastri."
      />

      {/* Header */}
      <div className="border-b-2 border-editorial-border pb-6">
        <span className="editorial-kicker text-gold-dark">GOVERNANCE & LEADERSHIP</span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep mt-1 mb-2">
          Editorial Board & Imprint
        </h1>
        <p className="font-serif italic text-base sm:text-lg text-muted">
          Official editorial leadership, academic credentials, and publication registration records.
        </p>
      </div>

      {/* Profile & Imprint */}
      <ProfileCard />
    </div>
  );
};
