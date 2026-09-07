import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import type { NavItem } from './Navigation';
import { X } from 'lucide-react';
import { publicationData } from '../../data/publication';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  navItems,
}) => {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-deep/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-navy-deep border-l border-gold-muted/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-gold-muted/20">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg border border-gold-muted/60 bg-ivory-paper p-0.5 shadow-sm flex items-center justify-center shrink-0">
                <img src="/global-economist-logo.png" alt="Logo" className="w-full h-full object-contain rounded-md" />
              </div>
              <span className="font-serif text-sm font-bold text-ivory-warm tracking-wider uppercase">
                The Globe Economist
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-ivory-warm hover:text-gold-muted focus:outline-none"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-6 flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-xs font-sans font-semibold tracking-loose-editorial uppercase border-l-2 transition-all ${
                    isActive
                      ? 'border-gold-muted text-gold-muted bg-navy-primary/90'
                      : 'border-transparent text-ivory-warm/80 hover:text-gold-muted hover:bg-navy-primary/50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gold-muted/20 text-[11px] text-ivory-warm/60 space-y-1 font-sans">
          <p className="font-medium text-gold-muted">{publicationData.subtitle}</p>
          <p>{publicationData.location}</p>
          <p>{publicationData.currentIssue.fullString}</p>
        </div>
      </div>
    </div>
  );
};
