import React from 'react';
import { Link } from 'react-router-dom';
import { publicationData } from '../../data/publication';

export const PublicationMasthead: React.FC = () => {
  return (
    <div className="bg-ivory-warm border-b border-editorial-border">
      {/* Upper masthead institutional header (clean text without image) */}
      <div className="bg-navy-primary text-ivory-warm py-2 px-4 text-center border-b border-gold-muted/30">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <span className="text-[11px] uppercase tracking-loose-editorial font-medium text-ivory-warm/90">
            {publicationData.subtitle} · New Delhi
          </span>
        </div>
      </div>

      {/* Main Masthead Banner - Logo beside title */}
      <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4">
        <Link
          to="/"
          className="flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-6 md:gap-8 group focus:outline-none"
        >
          {/* Logo beside title */}
          <div className="shrink-0">
            <img
              src="/global-economist-logo.png"
              alt="The Globe Economist Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain mix-blend-multiply"
            />
          </div>

          {/* Typography block */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-1.5">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-loose-editorial uppercase text-gold-dark">
                ESTABLISHED 2024 · DIGITAL REVIEW
              </span>
              <div className="h-px w-8 md:w-12 bg-gold-muted/40 hidden sm:inline-block" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-navy-deep transition-colors duration-200 leading-[1.1]">
              THE GLOBE <span className="text-gold-dark font-serif font-bold group-hover:text-gold-muted transition-colors">ECONOMIST</span>
            </h1>

            <p className="mt-1.5 text-xs sm:text-sm md:text-base font-serif italic text-muted max-w-xl">
              {publicationData.mastheadTagline}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
