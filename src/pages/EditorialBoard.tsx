import React, { useState } from 'react';
import { ProfileCard } from '../components/editorial/ProfileCard';
import { BoardMemberCard } from '../components/editorial/BoardMemberCard';
import { editorialBoardMembers } from '../data/editorialBoard';
import { MetaTags } from '../components/seo/MetaTags';

export const EditorialBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Foreign' | 'Core' | 'Research'>('Foreign');

  const coreCount = editorialBoardMembers.filter(m => m.category === 'Core').length;
  const foreignCount = editorialBoardMembers.filter(m => m.category === 'Foreign').length;
  const researchCount = editorialBoardMembers.filter(m => m.category === 'Research').length;

  const tabs = [
    { 
      id: 'Foreign' as const, 
      title: 'International Members', 
      subtitle: 'Foreign Members of the Editorial Board',
      count: foreignCount 
    },
    { 
      id: 'Core' as const, 
      title: 'Indian Editorial Board', 
      subtitle: 'Indian Members of the Editorial Board',
      count: coreCount 
    },
    { 
      id: 'Research' as const, 
      title: 'Economics Department', 
      subtitle: 'Studies & Research Faculty',
      count: researchCount 
    },
  ];

  const currentMembers = editorialBoardMembers.filter(m => m.category === activeTab);

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

      {/* Board Members Tabs */}
      <section className="mt-12" aria-labelledby="board-tabs-heading">
        <div className="mb-4">
          <span className="editorial-kicker text-gold-dark">BOARD ROSTER & SECTIONS</span>
          <h2 id="board-tabs-heading" className="font-serif text-2xl font-bold text-navy-deep mt-0.5">
            Select Board Section
          </h2>
        </div>

        {/* Fully Responsive Tabs (Adapts cleanly from mobile 320px to desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 mb-8">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`p-3.5 sm:p-4 text-left transition-all border flex flex-col justify-between relative shadow-sm cursor-pointer select-none ${
                  isActive
                    ? 'bg-navy-deep text-ivory-warm border-navy-deep ring-1 ring-gold-dark/40'
                    : 'bg-ivory-paper hover:bg-white text-charcoal/90 hover:text-navy-deep border-editorial-border hover:border-gold-muted/50'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold-dark" />
                )}
                <div className="flex items-center justify-between gap-2 w-full">
                  <span className={`font-serif font-bold text-base sm:text-lg leading-tight ${isActive ? 'text-ivory-warm' : 'text-navy-deep'}`}>
                    {tab.title}
                  </span>
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    isActive ? 'bg-gold-dark text-navy-deep' : 'bg-ivory-warm border border-editorial-border text-muted'
                  }`}>
                    {tab.count}
                  </span>
                </div>
                <p className={`text-xs font-sans mt-1.5 ${
                  isActive ? 'text-gold-light/90' : 'text-muted'
                }`}>
                  {tab.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentMembers.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};
