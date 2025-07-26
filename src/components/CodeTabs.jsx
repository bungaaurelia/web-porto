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
    as well as to provide insight and future plans.
  \`;
};`,
  },
  {
    name: "tech-stack.jsx",
    content: `// Technology Stack
const techStack = {
  frontend: [
    { name: "Next.js", version: "15.4.3" },
    { name: "React", version: "19.1.0" },
    { name: "React DOM", version: "19.1.0" },
    { name: "Tailwind CSS", version: "4" }
  ],
  backend: [
    { name: "Next.js API Routes" },
    { name: "CORS Middleware", version: "2.8.5" }
  ],
  databaseAndAuth: [
    { name: "Supabase JS Client", version: "2.52.0" }
  ],
  tools: [
    { name: "Tailwind PostCSS Plugin", version: "4" }
  ]
};
`,
  },
  {
    name: "visuals.jsx",
    content: `// Design Philosophy
function design() {
  return \`
    I want something that feels like me, but it's quite difficult to describe. 
    The dark theme reflects the overall mood that feels calm and deep, while the color of the accent is bright shows my side that can be cheerful.
    So I tried to find a balance between the two.
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
  interactivity: "high",
  responsive: true
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
      <div className="flex items-center space-x-2 px-4 py-2 bg-[#252526] border-b border-neutral-700 text-sm overflow-x-auto scrollbar-thin">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cn(
              "px-3 py-1 rounded-t text-xs font-mono transition-all duration-200",
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
      <div className="relative font-mono text-sm px-6 py-4 h-[60vh] md:h-96 overflow-auto bg-[#1e1e1e]">
        <code className="text-[#9cdcfe] block text-xs sm:text-sm">
          {tabs[activeTab].content.split("\n").map((line, idx) => (
            <div key={idx} className="flex">
              <span className="select-none text-neutral-600 min-w-[2rem] pr-4 text-right">
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
