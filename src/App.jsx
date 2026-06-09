import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatIDo from "./pages/WhatIDo";
import TrackRecord from "./pages/TrackRecord";
import HowIWork from "./pages/HowIWork";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <ScrollToTop />
      <Nav />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-i-do" element={<WhatIDo />} />
            <Route path="/track-record" element={<TrackRecord />} />
            <Route path="/how-i-work" element={<HowIWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  );
}
