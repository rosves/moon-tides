import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Affirmations from './pages/Affirmations';
import Article from './pages/Article';
import Diary from './pages/Diary';
import LunarCalendar from './pages/LunarCalendar';
import Rituals from './pages/Rituals';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import './App.scss'; // Fichier CSS
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';

function App() {

  return (
    <Router>
      <div className="body">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Affirmations" element={<Affirmations />} />
            <Route path="/Article" element={<Article />} />
            <Route path="/Diary" element={<Diary />} />
            <Route path="/LunarCalendar" element={<LunarCalendar />} />
            <Route path="/Rituals" element={<Rituals />} />
            <Route path='/CreateNote' element={<CreateNote/>}/>
            <Route path="/edit-note/:id" element={<EditNote />} />
          </Routes>
        <Instagram />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
