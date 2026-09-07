import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/editorial/SectionHeading';
import { EditorialCard } from '../components/editorial/EditorialCard';
import { EditorialNote } from '../components/editorial/EditorialNote';
import { featuredHomeAnalyses, briefingNames } from '../data/analyses';
import { currentIssueData } from '../data/issue';
import { MetaTags } from '../components/seo/MetaTags';
import { ArrowRight, BookOpen } from 'lucide-react';

export const Home: React.FC = () => {
  const { coverEssay } = currentIssueData;

  return (
    <div className="space-y-16">
      <MetaTags
        title="Home"
        description="The Globe Economist is an independent digital review covering integrated economics, sustainable development, coastal and blue-economy policy, food-system resilience and Global South economic policy."
      />

      {/* Hero Section: Two-column editorial layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch" aria-label="Lead Story and Current Issue">
        {/* Left Column: Cover Essay (8 cols) */}
        <div className="lg:col-span-8 p-8 sm:p-10 md:p-12 bg-ivory-paper border border-editorial-border flex flex-col justify-between relative shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-1 bg-navy-primary" />
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="editorial-kicker text-gold-dark font-bold">
                {coverEssay.category}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep leading-[1.15] tracking-tight">
              {coverEssay.title}
            </h2>

            <div className="my-6 h-px bg-gold-muted/30 w-24" />

            <p className="text-base sm:text-lg text-charcoal/90 leading-relaxed font-sans font-normal">
              {coverEssay.description}
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-editorial-border flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-serif font-bold text-lg text-navy-deep">
                By {coverEssay.author}
              </p>
              <p className="text-xs text-muted font-sans mt-0.5 max-w-md">
                {coverEssay.authorCredentials}
              </p>
            </div>

            <Link
              to="/current-issue"
              className="btn-editorial-primary inline-flex items-center gap-2 shrink-0 self-start sm:self-end"
            >
              <span>Read Full Essay</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Column: Current Issue (4 cols) */}
        <div className="lg:col-span-4 p-8 bg-navy-primary text-ivory-warm flex flex-col justify-between border-t-4 border-gold-muted relative shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={16} className="text-gold-muted" />
              <span className="text-[11px] font-sans font-bold tracking-loose-editorial uppercase text-gold-muted">
                CURRENT ISSUE
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-warm">
              {currentIssueData.title}
            </h3>

            <p className="text-xs font-sans text-ivory-warm/70 tracking-wider uppercase mt-1 mb-6">
              {currentIssueData.identifier}
            </p>

            <div className="h-px bg-gold-muted/25 mb-6" />

            <p className="text-sm text-ivory-warm/85 leading-relaxed font-sans font-light">
              {currentIssueData.summary}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gold-muted/20">
            <Link
              to="/current-issue"
              className="w-full py-3 px-4 bg-gold-muted text-navy-deep hover:bg-gold-light font-sans font-semibold text-xs tracking-loose-editorial uppercase text-center transition-all flex items-center justify-center gap-2"
            >
              <span>READ THE ISSUE</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Analyses Section */}
      <section aria-labelledby="featured-analyses-heading">
        <SectionHeading
          kicker="SELECTED FROM THE REVIEW"
          title="Featured Analyses"
          description="Key inquiries and policy frameworks published across current and recent editions of The Globe Economist."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredHomeAnalyses.map((item) => (
            <EditorialCard
              key={item.id}
              category={item.category}
              title={item.title}
              description={item.description}
              metadata={item.metadata}
              to="/analyses"
            />
          ))}
        </div>
      </section>

      {/* Editor's Desk Section */}
      <EditorialNote />

      {/* Briefing Names Section */}
      <section className="bg-ivory-paper border border-editorial-border p-8 sm:p-10" aria-labelledby="briefing-names-heading">
        <div className="flex items-center gap-2 mb-2">
          <span className="editorial-kicker text-gold-dark">POLICY LINES</span>
        </div>
        
        <h2 id="briefing-names-heading" className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep mb-6 pb-3 border-b border-editorial-border">
          Briefing Names
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {briefingNames.map((item, idx) => (
            <div key={idx} className="border-l-2 border-gold-muted/50 pl-4 py-1 space-y-1">
              <p className="font-serif text-base sm:text-lg font-bold text-navy-deep leading-snug">
                "{item.statement}"
              </p>
              <p className="text-xs text-muted font-sans uppercase tracking-wider">
                {item.attribution}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
