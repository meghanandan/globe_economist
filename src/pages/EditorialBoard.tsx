import React from 'react';
import { ProfileCard } from '../components/editorial/ProfileCard';
import { BoardMemberCard } from '../components/editorial/BoardMemberCard';
import { editorialBoardMembers } from '../data/editorialBoard';
import { MetaTags } from '../components/seo/MetaTags';

export const EditorialBoard: React.FC = () => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto">
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

      {/* Editorial Board Members */}
      <section className="mt-12" aria-labelledby="board-members-heading">
        <div className="flex items-center gap-2 mb-6">
          <span className="editorial-kicker text-gold-dark">EDITORIAL BOARD</span>
        </div>
        <h2 id="board-members-heading" className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep mb-8 pb-3 border-b border-editorial-border">
          Board Members
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {editorialBoardMembers.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};
