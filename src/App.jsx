
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './index.css';

export default function App() {

  return (
    <Router>
      <div className="bg-slate-900 size-full flex flex-col">
        <Header />
          <main className="flex-grow pb-24">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  )
}
