"use client";

import { useState } from "react";
import { cn } from "../lib/utils";

const tabs = [
  {
    name: "purpose.jsx",
    content: `// About This Page
const purpose = () => {
  return \`
  This page is a showcase of my skills and projects. 
  It serves as a portfolio to demonstrate my abilities as a developer.
  I created this page to share my journey and the technologies I use,
  as well as to provide insight into my design philosophy and future plans.
  \`;
};`,
  },
  {
    name: "tech-stack.jsx",
    content: `// Technology Stack
const stack = [
  "React.js",
  "Tailwind CSS",
  "Framer Motion",
  "Swiper.js",
  "JavaScript / JSX",
  "Vite",
  "VS Code",
  "Supabase",
  "GitHub"
];`,
  },
  {
    name: "visuals.jsx",
    content: `// Design Philosophy
function design() {
  return \`
  I wanted something that felt like me, but it's quite hard to describe. 
  The dark theme reflects the overall mood I wanted to convey, while vibrant accent colors 
  keep things playful. so I tried to find a balance between the two.
  \`;
}`,
  },
  {
    name: "features.jsx",
    content: `// Features
const features = () => ({
  profile: true,
  miniGame: true,
  animations: "smooth",
  theme: "darkMode",
  interactivity: "high"
});`,
  },
  {
    name: "message.jsx",
    content: `// Message to You
const message = () => {
  return \`
  Thank you for visiting 💌
  This portfolio is my creative space where I share my work and ideas.
  Let's connect and create something beautiful together.
  \`;
};`,
  },
  {
    name: "future.jsx",
    content: `// What's Next
const futurePlans = () => {
  return [
    "Add more projects",
    "Write blog posts",
    "Experiment with animations",
    "Share my story",
    "Explore new technologies",
    "Contribute to open source",
    "Keep learning and growing",
    "Develop a mobile app",
    "Collaborate with other developers"
  ];
};`,
  },
];

export default function CodeTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#1e1e1e] text-[#d4d4d4] rounded-xl shadow-lg overflow-hidden w-full max-w-5xl mx-auto border border-neutral-700 sticky">
      {/* Tab Bar */}
      <div className="flex items-center space-x-2 px-4 py-2 bg-[#252526] border-b border-neutral-700 text-sm">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cn(
              "px-3 py-1 rounded-t text-xs font-mono",
              index === activeTab
                ? "bg-[#1e1e1e] text-white"
                : "text-gray-400 hover:text-white"
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Code Area */}
      <div className="relative font-mono text-sm px-6 py-4 h-96 overflow-auto bg-[#1e1e1e]">
        <code className="text-[#9cdcfe] block">
          {tabs[activeTab].content.split("\n").map((line, idx) => (
            <div key={idx} className="flex">
              <span className="select-none text-neutral-600 w-8 pr-4 text-right">
                {idx + 1}
              </span>
              <span className="whitespace-pre-wrap">{line}</span>
            </div>
          ))}
        </code>
      </div>
    </div>
  );
}
