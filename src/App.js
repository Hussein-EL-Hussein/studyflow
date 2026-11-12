import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Features from './pages/Features.js';
import Contact from './pages/Contact.js';
import Planner from './pages/Planner.js';
import NotFound from './pages/NotFound.js';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-100">
        <SideBar />

        <div className="min-w-0 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;