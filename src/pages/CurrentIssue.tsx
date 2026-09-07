import React from 'react';
import { currentIssueData } from '../data/issue';
import { SectionHeading } from '../components/editorial/SectionHeading';
import { IssueItem } from '../components/editorial/IssueItem';
import { MetaTags } from '../components/seo/MetaTags';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

export const CurrentIssue: React.FC = () => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <MetaTags
        title="Current Issue — September 2026"
        description="The Globe Economist September 2026 Issue (Vol. III · Issue 09). Research and policy papers on Optimum Integration, Blue Economy Warehousing, and Food Security."
      />

      {/* Header Banner */}
      <div className="bg-ivory-paper border border-editorial-border p-8 sm:p-10 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-navy-primary" />
        
        <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-gold-dark font-medium tracking-loose-editorial uppercase mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{currentIssueData.month} {currentIssueData.year}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <BookOpen size={14} />
            <span>{currentIssueData.identifier}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            <span>New Delhi Edition</span>
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep">
          {currentIssueData.title}
        </h1>

        <p className="font-serif italic text-base sm:text-lg text-muted mt-2">
          {currentIssueData.metadata}
        </p>

        <div className="my-6 h-px bg-editorial-border" />

        <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed font-sans max-w-3xl">
          {currentIssueData.summary}
        </p>
      </div>

      {/* Table of Contents / Articles */}
      <section aria-label="Issue Contents">
        <SectionHeading
          kicker="TABLE OF CONTENTS"
          title="Articles & Policy Papers in this Issue"
          description="Peer-reviewed research, editorial essays, and strategic briefs in Vol. III, Issue 09."
        />

        <div className="space-y-6">
          {currentIssueData.articles.map((article, index) => (
            <IssueItem key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

      {/* Issue Note */}
      <div className="p-6 bg-ivory-subtle/50 border border-editorial-border text-center text-xs text-muted font-sans space-y-1">
        <p className="font-medium text-navy-deep">The Globe Economist · Integrated Economics Review</p>
        <p>Digital Edition · Published from New Delhi, India · ISSN: Application in process</p>
      </div>
    </div>
  );
};
