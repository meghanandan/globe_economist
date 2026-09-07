import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MetaTags } from '../components/seo/MetaTags';
import { currentIssueData, IssueArticle } from '../data/issue';
import { featuredHomeAnalyses, allAnalyses, AnalysisItemData } from '../data/analyses';
import { ArrowLeft, FileText, Lock } from 'lucide-react';

export const ArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Search for the article in issues and analyses
  let article: IssueArticle | AnalysisItemData | undefined;
  
  // Check cover essay
  if (currentIssueData.coverEssay.id === id) {
    article = currentIssueData.coverEssay;
  }
  
  // Check issue articles
  if (!article) {
    article = currentIssueData.articles.find(a => a.id === id);
  }
  
  // Check analyses
  if (!article) {
    article = featuredHomeAnalyses.find(a => a.id === id);
  }
  if (!article) {
    article = allAnalyses.find(a => a.id === id);
  }

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center space-y-6">
        <h1 className="font-serif text-3xl font-bold text-navy-deep">Article Not Found</h1>
        <p className="text-muted font-sans">The requested article could not be located in our archives.</p>
        <button 
          onClick={() => navigate(-1)}
          className="btn-editorial-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          <span>Return</span>
        </button>
      </div>
    );
  }

  const isIssueArticle = 'authorCredentials' in article || 'author' in article || 'typeMetadata' in article;
  
  const title = article.title;
  const description = article.description;
  const category = article.category;
  
  // Bibliographic details
  const volume = article.volume || "Vol. III";
  const issue = article.issue || "Issue 09";
  const month = article.month || "September";
  const year = article.year || "2026";
  const metadataStr = isIssueArticle ? (article as IssueArticle).typeMetadata : (article as AnalysisItemData).metadata;

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <MetaTags
        title={title}
        description={description}
      />

      <button 
        onClick={() => navigate(-1)}
        className="text-xs font-sans font-semibold uppercase tracking-wider text-muted hover:text-gold-dark transition-colors flex items-center gap-2"
      >
        <ArrowLeft size={14} />
        <span>Back</span>
      </button>

      <article className="bg-ivory-paper border border-editorial-border p-8 sm:p-12 md:p-16 relative shadow-sm">
        <div className="absolute top-0 left-0 right-0 h-1 bg-navy-primary" />
        
        {/* Bibliographic Header */}
        <div className="flex flex-wrap gap-4 items-center justify-between mb-10 pb-6 border-b border-editorial-border">
          <div className="flex items-center gap-2">
            <span className="editorial-kicker text-gold-dark">{category}</span>
          </div>
          <div className="text-[11px] font-sans font-medium text-muted uppercase tracking-wider text-right">
            <span>{volume} · {issue}</span>
            <span className="mx-2">•</span>
            <span>{month} {year}</span>
          </div>
        </div>

        {/* Title & Meta */}
        <header className="space-y-6 mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep leading-tight">
            {title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-sans">
            {metadataStr && (
              <span className="px-3 py-1 bg-ivory-warm border border-editorial-border text-charcoal/80 font-medium">
                {metadataStr}
              </span>
            )}
          </div>
          
          {isIssueArticle && (article as IssueArticle).author && (
            <div className="pt-6">
              <p className="font-serif text-xl font-bold text-navy-deep">
                By {(article as IssueArticle).author}
              </p>
              {(article as IssueArticle).authorCredentials && (
                <p className="text-sm text-muted font-sans mt-1">
                  {(article as IssueArticle).authorCredentials}
                </p>
              )}
            </div>
          )}
        </header>

        {/* Abstract */}
        <div className="prose prose-editorial max-w-none">
          <p className="lead text-xl font-serif text-charcoal leading-relaxed mb-10">
            {description}
          </p>
          
          <div className="flex flex-col items-center justify-center p-12 mt-12 bg-ivory-warm/50 border border-editorial-border text-center space-y-4">
            <FileText size={32} className="text-gold-dark/60" />
            <h3 className="font-serif text-xl font-bold text-navy-deep">Full Text Available in Digital Edition</h3>
            <p className="text-sm text-charcoal/80 font-sans max-w-md">
              The complete manuscript for this article is currently being typeset for the final {month} {year} digital edition.
            </p>
            <button className="mt-4 btn-editorial-outline inline-flex items-center gap-2 text-xs opacity-70 cursor-not-allowed" disabled>
              <Lock size={14} />
              <span>Download PDF (Coming Soon)</span>
            </button>
          </div>
        </div>
        
        {/* Footer citation */}
        <footer className="mt-16 pt-6 border-t border-editorial-border/60">
          <h4 className="text-[11px] uppercase tracking-wider text-muted font-sans font-semibold mb-2">Suggested Citation</h4>
          <p className="text-sm font-serif text-charcoal/80">
            {isIssueArticle && (article as IssueArticle).author ? `${(article as IssueArticle).author}. ` : ''} 
            "{title}." <em>The Globe Economist</em>, {volume}, {issue} ({year}).
          </p>
        </footer>
      </article>
    </div>
  );
};
