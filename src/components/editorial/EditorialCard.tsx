import React from 'react';
import { Link } from 'react-router-dom';

interface EditorialCardProps {
  category: string;
  title: string;
  description: string;
  metadata: string;
  to?: string;
  className?: string;
}

export const EditorialCard: React.FC<EditorialCardProps> = ({
  category,
  title,
  description,
  metadata,
  to = '/analyses',
  className = '',
}) => {
  const CardContent = (
    <article className="h-full flex flex-col justify-between p-6 sm:p-7 bg-ivory-paper border border-editorial-border hover:border-gold-muted/60 transition-all duration-200 group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="editorial-kicker text-[11px] text-gold-dark font-semibold tracking-loose-editorial">
            {category}
          </span>
          <span className="text-[11px] text-muted/70 font-sans">{metadata}</span>
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-deep group-hover:text-navy-primary transition-colors leading-snug">
          {title}
        </h3>

        <div className="mt-3 mb-4 h-px bg-editorial-border group-hover:bg-gold-muted/40 transition-colors" />

        <p className="text-sm text-charcoal/85 leading-relaxed font-sans">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-3 flex items-center justify-between text-xs text-navy-primary font-semibold tracking-wider uppercase font-sans border-t border-editorial-border/60 group-hover:text-gold-dark transition-colors">
        <span>Read Brief</span>
        <span className="text-gold-muted group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </article>
  );

  return (
    <div className={`h-full ${className}`}>
      {to ? (
        <Link to={to} className="block h-full focus:outline-none focus:ring-1 focus:ring-gold-muted">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </div>
  );
};
