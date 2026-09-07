import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopPublicationBar } from '../components/layout/TopPublicationBar';
import { PublicationMasthead } from '../components/layout/PublicationMasthead';
import { Navigation } from '../components/layout/Navigation';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { ScrollToTopButton } from '../components/ui/ScrollToTopButton';

export const PublicationLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory-warm text-charcoal font-sans antialiased">
      <ScrollToTop />
      
      {/* 1. Top publication information strip */}
      <header>
        <TopPublicationBar />
        <PublicationMasthead />
        <Navigation />
      </header>

      {/* 2. Page Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Outlet />
      </main>

      {/* 3. Global Footer */}
      <SiteFooter />

      {/* 4. Interactive Scroll To Top Floating Control */}
      <ScrollToTopButton />
    </div>
  );
};
