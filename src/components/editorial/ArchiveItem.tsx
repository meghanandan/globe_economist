import React from 'react';
import { Link } from 'react-router-dom';
import { ArchiveIssue } from '../../data/archives';

interface ArchiveItemProps {
  issue: ArchiveIssue;
}

export const ArchiveItem: React.FC<ArchiveItemProps> = ({ issue }) => {
  return (
    <article className="p-6 sm:p-7 bg-ivory-paper border border-editorial-border hover:border-gold-muted/60 transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="editorial-kicker text-gold-dark font-bold">
            {issue.volume}, {issue.issue}
          </span>
          <span className="text-muted text-xs">•</span>
          <span className="text-xs font-sans text-muted font-medium">
            {issue.date}
          </span>
        </div>
        {issue.current && (
          <span className="inline-block px-2 py-0.5 bg-navy-primary text-ivory-warm text-[10px] font-sans font-semibold tracking-loose-editorial uppercase">
            Current Issue
          </span>
        )}
      </div>

      <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-deep leading-snug">
        {issue.title}
      </h3>

      <div className="my-3 h-px bg-editorial-border w-16" />

      <p className="text-sm text-charcoal/85 leading-relaxed font-sans mb-4">
        {issue.summary}
      </p>

      {issue.current ? (
        <Link
          to="/current-issue"
          className="inline-flex items-center gap-1 text-xs font-semibold text-navy-primary hover:text-gold-dark uppercase tracking-wider font-sans transition-colors"
        >
          <span>View Issue Contents</span>
          <span>→</span>
        </Link>
      ) : (
        <span className="text-xs text-muted/80 italic font-serif">
          Digital brief archived in Volume III record
        </span>
      )}
    </article>
  );
};
