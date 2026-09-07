import React from 'react';
import { editorDeskNote } from '../../data/analyses';

export const EditorialNote: React.FC = () => {
  return (
    <section className="my-12 p-6 sm:p-8 md:p-10 bg-ivory-paper border border-editorial-border relative" aria-labelledby="editors-desk-heading">
      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gold-muted" />

      <div className="pl-3 sm:pl-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="editorial-kicker text-gold-dark">STATEMENT</span>
        </div>

        <h2 id="editors-desk-heading" className="font-serif text-2xl sm:text-3xl font-bold text-navy-deep mb-6">
          {editorDeskNote.heading}
        </h2>

        <div className="space-y-4 text-sm sm:text-base text-charcoal/90 leading-relaxed font-serif">
          {editorDeskNote.paragraphs.map((para, index) => (
            <p key={index} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-editorial-border flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <p className="font-serif font-bold text-base text-navy-deep">
              — {editorDeskNote.author}
            </p>
            <div className="text-xs text-muted font-sans mt-0.5 space-y-0.5">
              {editorDeskNote.roles.map((role, idx) => (
                <p key={idx}>{role}</p>
              ))}
            </div>
          </div>
          <div className="text-[11px] font-sans text-gold-dark font-medium tracking-loose-editorial uppercase">
            New Delhi Editorial Office
          </div>
        </div>
      </div>
    </section>
  );
};
