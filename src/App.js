import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Affirmations from "./pages/Affirmations";
import Article from "./pages/Article";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import LunarCalendar from "./pages/LunarCalendar";
import Rituals from "./pages/Rituals";
import "./App.scss";
import Instagram from "./components/Instagram";
import Articles from "./components/Articles";
import HitomiPlus from "./components/HitomiPlus";

function App() {
  return (
    <Router>
      {/* Container global */}
      <div className="body">
        <Header />
        <main>
          {/* Navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Affirmations" element={<Affirmations />} />
            <Route path="Article" element={<Article />} />
            <Route path="Diary" element={<Diary />} />
            <Route path="LunarCalendar" element={<LunarCalendar />} />
            <Route path="Rituals" element={<Rituals />} />
          </Routes>
        </main>
        {/* components */}
        <Articles/>
        <HitomiPlus/>
        <Instagram/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
