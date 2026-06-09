import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import AboutBand from "./sections/AboutBand";
import WhatWeDo from "./sections/WhatWeDo";
import Offerings from "./sections/Offerings";
import TrackRecordTeaser from "./sections/TrackRecordTeaser";
import Clients from "./sections/Clients";
import ContactCTA from "./sections/ContactCTA";

export default function App() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <AboutBand />
        <WhatWeDo />
        <Offerings />
        <TrackRecordTeaser />
        <Clients />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
