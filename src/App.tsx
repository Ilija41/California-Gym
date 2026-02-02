import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { GymPage } from './pages/GymPage';
import { KickboxPage } from './pages/KickboxPage';
import { PersonalTrainingPage } from './pages/PersonalTrainingPage';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');

        // Try to find and scroll to element with retries
        let attempts = 0;
        const maxAttempts = 10;

        const tryScroll = () => {
          const element = document.getElementById(id);

          if (element) {
            // First scroll to top instantly
            window.scrollTo({ top: 0 });

            // Then scroll to element smoothly after a brief delay
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          } else if (attempts < maxAttempts) {
            // Element not found yet, try again
            attempts++;
            setTimeout(tryScroll, 100);
          }
        };

        tryScroll();
      } else if (location.pathname === '/') {
        // If on home page without hash, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Small delay to let route change complete
    const timeoutId = setTimeout(scrollToElement, 50);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teretana" element={<GymPage />} />
        <Route path="/kickbox" element={<KickboxPage />} />
        <Route path="/personalni-trening" element={<PersonalTrainingPage />} />
      </Routes>
    </Router>
  );
}
