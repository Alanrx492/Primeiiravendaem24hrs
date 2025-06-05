import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';

import IntroPage from './pages/IntroPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import LeadCapturePage from './pages/LeadCapturePage';
import OfferPage from './pages/OfferPage';

function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/lead" element={<LeadCapturePage />} />
          <Route path="/offer" element={<OfferPage />} />
        </Routes>
      </div>
    </QuizProvider>
  );
}

export default App;