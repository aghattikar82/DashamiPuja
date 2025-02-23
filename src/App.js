import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import GalleryPage from './pages/GalleryPage';
import EventSchedulePage from './pages/EventSchedulePage';
import LiveStreamPage from './pages/LiveStreamPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/schedule" element={<EventSchedulePage />} />
          <Route path="/live" element={<LiveStreamPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;