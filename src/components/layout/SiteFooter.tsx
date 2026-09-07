import React from 'react';
import { Link } from 'react-router-dom';
import { publicationData } from '../../data/publication';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-navy-deep text-ivory-warm/80 border-t-2 border-gold-muted/30 pt-12 pb-10 px-4 mt-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-10 border-b border-gold-muted/20">
          {/* Col 1: Publication */}
          <div className="space-y-3">
            <h3 className="text-xs font-sans font-semibold tracking-loose-editorial uppercase text-gold-muted border-b border-gold-muted/20 pb-2">
              PUBLICATION
            </h3>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-11 h-11 rounded-lg overflow-hidden border border-gold-muted/60 bg-white shadow-sm shrink-0 flex items-center justify-center">
                  <img
                    src="/global-economist-logo.png"
                    alt="The Globe Economist Emblem"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-base font-bold text-ivory-warm tracking-wide leading-tight">
                    {publicationData.title}
                  </p>
                  <p className="text-gold-muted/90 font-medium text-[11px]">{publicationData.subtitle}</p>
                </div>
              </div>
              <p className="text-ivory-warm/70">Digital edition published from New Delhi</p>
              <p className="pt-1">
                <span className="text-ivory-warm/60">Website: </span>
                <span className="text-gold-muted">{publicationData.domain}</span>
              </p>
              <p>
                <span className="text-ivory-warm/60">ISSN: </span>
                <span>{publicationData.issn}</span>
              </p>
          </div>

          {/* Col 2: Editor-in-Chief */}
          <div className="space-y-3">
            <h3 className="text-xs font-sans font-semibold tracking-loose-editorial uppercase text-gold-muted border-b border-gold-muted/20 pb-2">
              EDITOR-IN-CHIEF
            </h3>
            <div className="space-y-1.5 text-xs text-ivory-warm/90">
              <p className="font-serif text-sm font-bold text-ivory-warm">
                {publicationData.editorInChief.fullName}
              </p>
              <p className="text-gold-muted/90 italic font-serif">({publicationData.editorInChief.shortName})</p>
              <div className="space-y-1 pt-1 text-ivory-warm/70 text-[11.5px] leading-relaxed">
                <p>D.Litt. — Integrated Economics</p>
                <p>Ph.D. — Indian Institute of Technology Delhi</p>
                <p>Stanford Executive Program</p>
                <p>Senior Executive Leadership Program, Harvard Business School</p>
                <p>FCMA / CIMA</p>
              </div>
            </div>
          </div>

          {/* Col 3: Scope */}
          <div className="space-y-3">
            <h3 className="text-xs font-sans font-semibold tracking-loose-editorial uppercase text-gold-muted border-b border-gold-muted/20 pb-2">
              SCOPE
            </h3>
            <ul className="space-y-1.5 text-xs text-ivory-warm/70 leading-relaxed list-none">
              <li className="flex items-start gap-2">
                <span className="text-gold-muted">›</span>
                <span>Integrated / Optimum economics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-muted">›</span>
                <span>Coastal India and blue-economy development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-muted">›</span>
                <span>Food security and resilience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-muted">›</span>
                <span>Purchasing power of the common citizen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-muted">›</span>
                <span>Geoeconomics and Global South policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory-warm/60 gap-4 text-center md:text-left">
          <div>
            © 2026 {publicationData.title} · <span className="text-gold-muted">{publicationData.domain}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
            <Link to="/about" className="hover:text-gold-muted transition-colors">About</Link>
            <span>·</span>
            <Link to="/editorial-board" className="hover:text-gold-muted transition-colors">Editorial Board</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-gold-muted transition-colors">Contact</Link>
          </div>
          <div>
            Editorial office: {publicationData.location}
          </div>
        </div>
      </div>
    </footer>
  );
};
