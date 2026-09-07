import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { MobileNavigation } from './MobileNavigation';

export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'CURRENT ISSUE', path: '/current-issue' },
  { label: 'ANALYSES', path: '/analyses' },
  { label: 'ABOUT THE PUBLICATION', path: '/about' },
  { label: 'EDITORIAL BOARD', path: '/editorial-board' },
  { label: 'ARCHIVES', path: '/archives' },
  { label: 'CONTACT', path: '/contact' },
];

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-navy-primary text-ivory-warm sticky top-0 z-40 shadow-sm border-b border-gold-muted/20" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2 py-0">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-3.5 py-3.5 text-[12px] font-sans font-semibold tracking-loose-editorial uppercase transition-all duration-150 relative block ${
                  isActive
                    ? 'text-gold-muted bg-navy-deep/80 font-bold'
                    : 'text-ivory-warm/85 hover:text-gold-muted hover:bg-navy-deep/50'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-muted" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile / Tablet Bar Header */}
        <div className="flex lg:hidden items-center justify-between py-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md overflow-hidden border border-gold-muted/60 bg-white shadow-sm flex items-center justify-center shrink-0">
              <img src="/global-economist-logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-serif font-bold text-ivory-warm tracking-wider uppercase">
              The Globe Economist
            </span>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-1.5 text-ivory-warm hover:text-gold-muted focus:outline-none focus:ring-1 focus:ring-gold-muted border border-gold-muted/30 rounded"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </nav>
  );
};
