import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {kicker && (
        <div className="flex items-center gap-2 mb-1.5 justify-start">
          {centered && <div className="h-px w-6 bg-gold-muted/50 inline-block" />}
          <span className="editorial-kicker">{kicker}</span>
          {centered && <div className="h-px w-6 bg-gold-muted/50 inline-block" />}
        </div>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy-deep">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm sm:text-base text-muted font-serif italic max-w-3xl">
          {description}
        </p>
      )}
      <div className={`mt-3 h-[2px] bg-gold-muted/30 w-16 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
