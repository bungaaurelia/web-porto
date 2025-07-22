import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import TetrisBackground from "../components/background/TetrisBackground";
import { motion, AnimatePresence } from "framer-motion";
import TetrisGame from "../components/mini_games/TetrisGame";

// Setup Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  // Fetch contact list
  useEffect(() => {
    const fetchContacts = async () => {
      const { data, error } = await supabase
        .from("contact_info")
        .select("type, label, url, icon_url, order")
        .order("order", { ascending: true });

      if (error) {
        console.error("Error fetching contacts:", error);
      } else {
        setContacts(data);
      }
      setLoading(false);
    };
    fetchContacts();
  }, []);

  // Handle resume request
  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("resume_requests").insert({ email });

    if (error) {
      console.error("Error submitting request:", error);
      setStatus("error");
    } else {
      setStatus("success");
      setEmail("");
    }
  };

  if (loading)
    return <p className="text-center text-white font-retro">Loading...</p>;

  return (
    <div className="relative min-h-screen bg-darkGreen text-white overflow-hidden font-retro px-6 py-12">
      <TetrisBackground />
      {/* Header */}
      <h1
        className="text-5xl md:text-6xl text-center mb-20"
        style={{
          textShadow: "0 0 10px #05f0d8, 0 0 20px #05f0d8, 0 0 24px #05f0d8",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        ⏺ Contact Me
      </h1>

      {/* Terminal-style box */}
      <AnimatePresence>
        <div className="flex w-full h-full sticky ml-[-80px]">
        <motion.div
          className="bg-gray-900 text-green-400 font-mono p-6 rounded-lg shadow-xl w-full max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="mb-2">&gt; whoami</p>
          <p className="ml-4">Bunga</p>

          <p className="mt-6 mb-2">&gt; contact --show</p>
          <div className="ml-4 space-y-1">
            {contacts.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                {item.icon_url ? (
                  <img
                    src={item.icon_url}
                    alt={item.label}
                    className="w-4 h-4"
                  />
                ) : (
                  <span>🔗</span>
                )}
                <span>
                  {item.label}: <span className="underline">{item.type}</span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-6 mb-2">&gt; resume --request</p>
          <button
            onClick={() => setShowRequestForm(!showRequestForm)}
            className="ml-4 bg-neonBlue text-black px-3 py-1 rounded hover:bg-neonBlue/50 transition font-retro"
          >
            ✉️ Ask for My Resume
          </button>

          {showRequestForm && (
            <>
              <p htmlFor="email" className="mt-4 ml-4 text-green-300">
                Input your email to request my resume!
              </p>
              <form
                onSubmit={handleSubmitRequest}
                className="mt-6 ml-4 flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="px-3 py-2 bg-black text-white rounded border border-green-500 w-full sm:w-[300px]"
                />
                <button
                  type="submit"
                  className="bg-cyan-400 text-black px-4 py-2 rounded hover:bg-cyan-300 transition"
                >
                  Send
                </button>
              </form>
            </>
          )}

          {status === "success" && (
            <p className="mt-4 ml-4 text-green-300">
              ✅ Request received! I’ll review and send it manually.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 ml-4 text-red-400">⚠️ Something went wrong.</p>
          )}

          <p className="mt-6 mb-2">&gt; _</p>
        </motion.div>

          <div className="w-[300px] p-0 sticky">
        <TetrisGame />
      </div>
      </div>
      </AnimatePresence>
    </div>
  );
}
