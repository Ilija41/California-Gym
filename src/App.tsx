import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GymPage } from './pages/GymPage';
import { KickboxPage } from './pages/KickboxPage';
import { PersonalTrainingPage } from './pages/PersonalTrainingPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teretana" element={<GymPage />} />
        <Route path="/kickbox" element={<KickboxPage />} />
        <Route path="/personalni-trening" element={<PersonalTrainingPage />} />
      </Routes>
    </Router>
  );
}
