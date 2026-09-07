import React from 'react';

interface DividerProps {
  className?: string;
  variant?: 'subtle' | 'gold' | 'double' | 'dark';
}

export const Divider: React.FC<DividerProps> = ({ className = '', variant = 'subtle' }) => {
  if (variant === 'gold') {
    return <div className={`h-px bg-gold-muted/50 ${className}`} aria-hidden="true" />;
  }

  if (variant === 'dark') {
    return <div className={`h-px bg-gold-muted/25 ${className}`} aria-hidden="true" />;
  }

  if (variant === 'double') {
    return (
      <div className={`py-1 ${className}`} aria-hidden="true">
        <div className="border-t border-b border-editorial-border h-1" />
      </div>
    );
  }

  return <div className={`h-px bg-editorial-border ${className}`} aria-hidden="true" />;
};
