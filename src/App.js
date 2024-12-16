import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About Page/About';
import Affirmations from './pages/Affirmations/Affirmations';
import Article from './pages/Articles/Article';
import Diary from './pages/Diary/Diary';
import LunarCalendar from './pages/LunarCalendar';
import Rituals from './pages/Rituals/Rituals';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import './App.scss'; // Fichier CSS
import CreateNote from './pages/Create note/CreateNote';
import EditNote from './pages/EditNote';
import AdminPage from './pages/Dashboard/Admin';
import HandleArticle from './pages/Dashboard/HandleArticles';
import LoginPage from './components/Login Admin/LoginPageAdmin';

function App() {

  return (
    
    <Router>
      {/* <AppTest/> */}
      <div className="body">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Affirmations" element={<Affirmations />} />
            <Route path="/Article" element={<Article />} />
            <Route path="/Diary" element={<Diary />} />
            <Route path="/LunarCalendar" element={<LunarCalendar />} />
            <Route path="/Rituals" element={<Rituals />} />
            <Route path='/create' element={<CreateNote/>}/>
            <Route path="/edit/:id" element={<CreateNote />} />
            <Route path="/Admin" element={<AdminPage />} />
            <Route path="/HandleArticle" element={<HandleArticle />} />
            <Route path="/LoginAdmin" element={<LoginPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
