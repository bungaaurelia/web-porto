import { useState, useEffect } from "react";
import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MemoryGame from "../components/mini_games/MemoryGame";
import GamesBackground from "../components/background/GamesBackground";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [activePage, setActivePage] = useState(1);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();

    const body = document.body;
    if (selectedProject) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => body.classList.remove("overflow-hidden");
  }, [selectedProject]);

  const allTypes = [
    "All",
    ...new Set(projects.map((proj) => proj.type).filter(Boolean)),
  ];

  const tabs = useMemo(() => {
    return ["All", ...new Set(projects.map((p) => p.type).filter(Boolean))];
  }, [projects]);

  const filteredProjects = projects.filter(
    (proj) => activeTab === "All" || proj.type === activeTab
  );
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActivePage(1);
  };

  return (
    <div className="relative min-h-screen bg-darkGreen text-white overflow-hidden">
      <GamesBackground />
      <div className="min-h-screen bg-darkGreen text-white px-6 py-12 space-y-18">
        <section className="text-center mb-20">
          <h1
            className="text-5xl md:text-6xl text-white"
            style={{
              textShadow: "0 0 10px #05f0d8, 0 0 20px #05f0d8",
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            ◼ Works
          </h1>
        </section>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${
                activeTab === tab
                  ? "bg-cyan-400 text-black"
                  : "bg-black text-white"
              } transition`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-12 lg:px-16">
          {currentProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="bg-black/40 rounded-lg shadow-lg hover:scale-105 transition duration-300 flex flex-col justify-between shadow-lg hover:shadow-neonBlue cursor-pointer"
            >
              {/* Image */}
              <img
                src={proj.image_url}
                alt={proj.title}
                className="w-full h-48 md:h-64 object-cover rounded-t-lg border-b-2 border-cyan-500"
              />

              {/* Title & Year */}
              <div className="px-4 py-2 text-center">
                <h2 className="text-lg font-bold">{proj.title}</h2>
                <p className="text-xs text-gray-300 mt-1">
                  {proj.year} • {proj.type}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex px-4 py-3 justify-center items-center bg-black/40 rounded-b-lg text-sm min-h-[8rem] md:min-h-[12rem]">
                {Array.isArray(proj.tech_stack) ? (
                  <div className="flex flex-wrap gap-2 justify-center mt-6">
                    {proj.tech_stack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-yellow-400 text-black text-[10px] px-2 py-1 rounded-sm shadow-md"
                        style={{ fontFamily: "'Press Start 2P', cursive" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="italic text-gray-400">Tech stack unavailable</p>
                )}
              </div>

              <div className="px-4 py-3 bg-neonBlue rounded-b-lg text-sm space-y-2 h-2"></div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={() => setActivePage((p) => Math.max(1, p - 1))}
              disabled={activePage === 1}
              className="px-4 py-2 bg-white text-black rounded disabled:opacity-30"
            >
              ← Prev
            </button>
            <span className="px-4 py-2 bg-cyan-500 text-black rounded">
              Page {activePage} / {totalPages}
            </span>
            <button
              onClick={() => setActivePage((p) => Math.min(totalPages, p + 1))}
              disabled={activePage === totalPages}
              className="px-4 py-2 bg-white text-black rounded disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="flex flex-col md:flex-row w-full max-w-5xl max-w-[95vw] h-[90vh] bg-black overflow-auto rounded-lg shadow-2xl shadow-[0_0_20px_rgba(0,255,255,0.3)] relative"
                initial={{ scale: 0.9, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 40 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Gambar Kiri */}
                <div className="md:w-1/2 h-full bg-black p-4 flex items-center justify-center">
                  <img
                    src={selectedProject.image_url}
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-[70%] object-contain rounded-lg"
                  />
                </div>

                {/* Info Kanan */}
                <div
                  className="w-full md:w-1/2 md:flex-1 md:h-full md:min-h-0 bg-darkGreen text-white p-6 flex flex-col justify-between text-sm overflow-y-auto"
                >
                  <div>
                    <h2 className="text-xl font-bold mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="mb-4 text-gray-300 text-justify">
                      {selectedProject.description}
                    </p>

                    {/* Tech Stack */}
                    {Array.isArray(selectedProject.tech_stack) && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedProject.tech_stack.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-cyan-600 text-white px-2 py-1 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="mt-6 space-x-4">
                    {selectedProject.link_demo || selectedProject.link_repo ? (
                      <>
                        {selectedProject.link_demo && (
                          <a
                            href={selectedProject.link_demo}
                            target="_blank"
                            className="inline-block bg-yellow-400 text-black px-3 py-1 rounded shadow hover:bg-yellow-300 transition"
                          >
                            🔗 Live Demo
                          </a>
                        )}
                        {selectedProject.link_repo && (
                          <a
                            href={selectedProject.link_repo}
                            target="_blank"
                            className="inline-block bg-black text-white px-3 py-1 rounded border border-white hover:bg-white hover:text-black transition"
                          >
                            💻 GitHub
                          </a>
                        )}
                      </>
                    ) : (
                      <span className="text-gray-400 italic">
                        No links available
                      </span>
                    )}
                  </div>
                </div>

                {/* Tombol Close */}
                <button
                  className="absolute top-3 right-4 text-white text-2xl hover:text-green-400 z-10"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <MemoryGame />
    </div>
  );
}
