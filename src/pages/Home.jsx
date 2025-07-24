import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Jumbotron from "../components/home_comp/Jumbotron";
import SectionButtons from "../components/home_comp/SectionButtons";
import GlimpseOfMe from "../components/home_comp/GlimpseOfMe";
import MyJourneyPreview from "../components/home_comp/MyJourneyPreview";
import SoftHighlights from "../components/home_comp/SoftHighlights";
import PersonalPicks from "../components/home_comp/PersonalPicks";
import ContactSection from "../components/home_comp/ContactSection";
import Quote from "../components/home_comp/Quote";
import SkillsGrid from "../components/home_comp/SkillsGrid";

export default function Home() {
  const [showFog, setShowFog] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowFog(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const LineBreak = () => (
    <div className="my-2 flex flex-col items-center py-4">
      <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-darkGreen overflow-x-hidden">
      <main className="flex-grow">
        <Jumbotron />
        <SectionButtons />

        <div className="flex flex-col md:flex-row p-6 md:p-10 max-w-full md:max-w-screen-xl w-full text-pureWhite mx-auto mt-8 mb-10">
          <div className="w-full">
            <GlimpseOfMe />
            <LineBreak />
            <MyJourneyPreview />
            <LineBreak />
            <SoftHighlights />
            <LineBreak />
            <SkillsGrid />
            <LineBreak />
            <PersonalPicks />
            <LineBreak />
            <ContactSection />
            <LineBreak />
            <Quote />
          </div>
        </div>
      </main>
    </div>
  );
}
