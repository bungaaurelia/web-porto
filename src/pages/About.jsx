import { useEffects, useState } from "react";
import "../styles/effects.css";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-darkGreen">
      <main className="flex-grow">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-pink-600">About Me</h1>
          <p className="mt-4 text-gray-700">
            I am a passionate web developer with a love for creating beautiful
            and functional user experiences.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
