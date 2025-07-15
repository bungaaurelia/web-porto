import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/effects.css";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import SectionButtons from "../components/SectionButtons";
import GlimpseOfMe from "../components/GlimpseOfMe";
import MyJourneyPreview from "../components/MyJourneyPreview";
import SoftHighlights from "../components/SoftHighlights";
import PersonalPicks from "../components/PersonalPicks";
import ContactSection from "../components/ContactSection";
import Quote from "../components/Quote";
import SkillsGrid from "../components/SkillsGrid";

export default function Home() {
  const [showFog, setShowFog] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFog(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const lineBreaks = [
    <div key="linebreak-1" className="my-2 flex flex-col items-center py-4">
      <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>,
  ];

  return (
    <div className="flex flex-col min-h-screen bg-darkGreen">
      <main className="flex-grow">
        <Jumbotron />
        <SectionButtons />

        <div className="flex flex-col md:flex-rowp-6 md:p-10 max-w-[1425px] w-full text-pureWhite mx-auto mt-8 mb-10">
          <div className="w-full">
            <GlimpseOfMe />
            {lineBreaks}
            <MyJourneyPreview />
            {lineBreaks}
            <SoftHighlights />
            {lineBreaks}
            <SkillsGrid />
            {lineBreaks}
            <PersonalPicks />
            {lineBreaks}
            <ContactSection />
            {lineBreaks}
            <Quote />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
