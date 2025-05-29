
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './index.css';

export default function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
          <main className="flex-grow pb-24">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  )
}
