import { motion } from "framer-motion";
import SparkleOverlay from "../components/SparkleOverlay";

const Jumbotron = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
      <SparkleOverlay />
      <div className="absolute inset-0 bg-darkGreen z-10" />

      <div className="flex flex-col items-center w-full px-4 md:px-16">
        <div className="flex flex-row justify-between items-start w-full gap-2 px-20">
          {/* Kolom kiri */}
          <div className="flex flex-col items-center gap-8 w-full px-20 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/nama.png"
                alt="Aurelia"
                className="relative z-10 rounded-xl object-cover h-[200px] w-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-xl text-pureWhite text-left z-10 mt-1"
              style={{ fontFamily: "Inter" }}
            >
              Welcome to a quiet space where thoughts, dreams, and code
              intertwine~
              {/* <br />
              This portfolio is a living archive — frequently updated as I grow,
              explore, and create */}
            </motion.p>
          </div>

          {/* Kolom kanan */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full"
          >
            <img
              src="/logo.png"
              alt="Aurelia"
              className="relative z-20 rounded-xl object-cover h-[400px] w-auto drop-shadow-[0_0_70px_rgba(255,255,255,0.85)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
