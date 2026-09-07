import React from 'react';
import { Link } from 'react-router-dom';
import { AnalysisItemData } from '../../data/analyses';

interface AnalysisItemProps {
  item: AnalysisItemData;
}

export const AnalysisItem: React.FC<AnalysisItemProps> = ({ item }) => {
  return (
    <article className="py-8 sm:py-10 border-b border-editorial-border last:border-b-0 group">
      <Link to={`/article/${item.id}`} className="block">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
        <span className="editorial-kicker text-gold-dark">
          {item.category}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted font-sans">
            {item.metadata}
          </span>
          {item.volume && (
            <span className="text-[11px] text-muted/80 font-sans border-l border-editorial-border pl-3">
              {item.volume}, {item.issue} ({item.month} {item.year})
            </span>
          )}
        </div>
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep leading-snug hover:text-navy-light transition-colors">
        {item.title}
      </h3>

      <div className="my-3 h-px bg-gold-muted/20 w-16" />

      <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed font-sans max-w-4xl">
        {item.description}
      </p>
      </Link>
    </article>
  );
};
