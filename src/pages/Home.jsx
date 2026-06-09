import Hero from "../sections/Hero";
import AboutBand from "../sections/AboutBand";
import Offerings from "../sections/Offerings";
import TrackRecordTeaser from "../sections/TrackRecordTeaser";
import Clients from "../sections/Clients";
import ApproachSection from "../sections/ApproachSection";
import ContactCTA from "../sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBand />
      <Offerings />
      <TrackRecordTeaser />
      <Clients />
      <ApproachSection />
      <ContactCTA />
    </>
  );
}
