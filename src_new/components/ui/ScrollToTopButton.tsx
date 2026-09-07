import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 right-6 z-40 p-2.5 bg-navy-deep text-gold-muted border border-gold-muted/40 shadow-md hover:bg-navy-primary hover:border-gold-muted hover:text-gold-light focus:outline-none focus:ring-2 focus:ring-gold-muted transition-all duration-200 group rounded-[2px]"
      title="Back to Top"
    >
      <div className="flex items-center gap-1.5 px-1">
        <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        <span className="text-[10px] font-sans font-semibold tracking-loose-editorial uppercase hidden sm:inline-block">
          TOP
        </span>
      </div>
    </button>
  );
};
