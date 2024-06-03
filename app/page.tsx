'use client'
import Navbar from "./Components/navbar";
import PageTransition from "./Components/framercomponent/framerentry";
import { AnimatePresence } from "framer-motion";
import MeWelcome from "./Components/meWelcome";
import MeWelcomeWrapper from "./Components/framercomponent/framerelements";
import { useState } from "react";

export default function Home() {
  const [isPageTransitionComplete, setIsPageTransitionComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsPageTransitionComplete(true);
  };

  return (
    <div className="overflow-hidden h-auto md:h-full w-full">
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <PageTransition key="pageTransition" onAnimationComplete={handleAnimationComplete}>
          <Navbar />
        </PageTransition>
      </AnimatePresence>
      {isPageTransitionComplete && (
        <MeWelcomeWrapper>
          <MeWelcome />
        </MeWelcomeWrapper>
      )}

    </div>
  );
}