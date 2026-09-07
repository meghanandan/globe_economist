import React from 'react';
import { Link } from 'react-router-dom';
import { IssueArticle } from '../../data/issue';

interface IssueItemProps {
  article: IssueArticle;
  index: number;
}

export const IssueItem: React.FC<IssueItemProps> = ({ article, index }) => {
  return (
    <article className="bg-ivory-paper border border-editorial-border hover:border-gold-muted/60 transition-all duration-200 group">
      <Link to={`/article/${article.id}`} className="block p-6 sm:p-8">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-6 rounded-full bg-navy-primary text-ivory-warm text-xs font-serif font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <span className="editorial-kicker text-gold-dark">
              {article.category}
            </span>
            {article.tag && (
              <>
                <span className="text-editorial-border">•</span>
                <span className="text-[11px] font-sans font-medium text-muted uppercase tracking-wider">
                  {article.tag}
                </span>
              </>
            )}
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-deep leading-snug group-hover:text-gold-dark transition-colors">
            {article.title}
          </h3>

          <div className="my-3 h-px bg-editorial-border w-24" />

          <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed font-sans max-w-4xl">
            {article.description}
          </p>
        </div>

        {(article.typeMetadata || article.volume) && (
          <div className="md:text-right pt-2 md:pt-0 shrink-0 flex flex-col gap-2 items-end">
            {article.typeMetadata && (
              <span className="inline-block px-3 py-1 bg-ivory-warm border border-editorial-border text-[11px] font-sans font-medium text-muted">
                {article.typeMetadata}
              </span>
            )}
            {article.volume && (
              <div className="text-[11px] font-sans text-muted/80 text-right">
                <p>{article.volume}, {article.issue}</p>
                <p>{article.month} {article.year}</p>
              </div>
            )}
          </div>
        )}
      </div>
      </Link>
    </article>
  );
};
