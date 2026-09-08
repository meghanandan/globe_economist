import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicationLayout } from './layouts/PublicationLayout';
import { Home } from './pages/Home';
import { CurrentIssue } from './pages/CurrentIssue';
import { Analyses } from './pages/Analyses';
import { About } from './pages/About';
import { EditorialBoard } from './pages/EditorialBoard';
import { BoardMemberDetail } from './pages/BoardMemberDetail';
import { Archives } from './pages/Archives';
import { Contact } from './pages/Contact';
import { ArticleView } from './pages/ArticleView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicationLayout />}>
        <Route index element={<Home />} />
        <Route path="current-issue" element={<CurrentIssue />} />
        <Route path="analyses" element={<Analyses />} />
        <Route path="about" element={<About />} />
        <Route path="editorial-board" element={<EditorialBoard />} />
        <Route path="editorial-board/:id" element={<BoardMemberDetail />} />
        <Route path="archives" element={<Archives />} />
        <Route path="contact" element={<Contact />} />
        <Route path="article/:id" element={<ArticleView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
