import CodeTabs from "../components/CodeTabs";
import CodeBackground from "../components/background/CodeBackground";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-darkGreen text-white px-6 md:px-12 py-0 space-y-14 overflow-hidden">
      <CodeBackground />
      <section className="p-0 mb-24">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl text-center text-white"
          style={{
            textShadow: "0 0 10px #05f0d8, 0 0 20px #05f0d8, 0 0 24px #05f0d8",
            fontFamily: "'Press Start 2P', cursive",
          }}
        >
          ⏭ About This Page
        </h1>
      </section>
      <CodeTabs />
    </div>
  );
}
