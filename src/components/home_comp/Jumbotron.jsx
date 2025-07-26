import { motion } from "framer-motion";
import SparkleOverlay from "../background/SparkleOverlay";

const Jumbotron = () => {
  return (
    <section className="relative py-20 sm:py-32 min-h-[60vh] sm:min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
      <SparkleOverlay />
      <div className="absolute inset-0 bg-darkGreen z-10" />

      <div className="flex flex-col items-center w-full px-4 md:px-16 z-20">
        <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center items-center w-full gap-4 sm:gap-8 px-2 sm:px-4 md:px-20">
          {/* Kolom kiri */}
          <div className="flex flex-col items-center gap-4 sm:gap-8 w-[40%] sm:w-1/2 px-2 sm:px-4 py-10 md:py-20 scale-[0.7] sm:scale-100 transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex justify-center items-center w-full overflow-visible px-4">
                <img
                  src="/nama.png"
                  alt="Aurelia"
                  className="relative z-10 rounded-xl object-contain h-[100px] sm:h-[200px] w-full max-w-full drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xs sm:text-lg text-pureWhite text-center sm:text-left z-10 mt-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Welcome to my personal portofolio space
            </motion.p>
          </div>

          {/* Kolom kanan */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-[40%] sm:w-1/2 flex justify-center items-center scale-[0.7] sm:scale-100 transition-all duration-300"
          >
            <img
              src="/logo.png"
              alt="Aurelia"
              className="relative z-20 rounded-xl object-cover h-[200px] sm:h-[400px] w-auto drop-shadow-[0_0_70px_rgba(255,255,255,0.85)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
