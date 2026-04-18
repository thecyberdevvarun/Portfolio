"use client";

import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import HomeHighlights from "../components/home/HomeHighlights";
import DSACodingProfiles from "../components/DSACodingProfiles";
import InterestsSection from "../components/InterestsSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <HeroSection />
      <HomeHighlights />
      <DSACodingProfiles />
      <InterestsSection />
    </motion.div>
  );
}
