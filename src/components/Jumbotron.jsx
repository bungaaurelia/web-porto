import { motion } from 'framer-motion';
import SparkleOverlay from '../components/SparkleOverlay';

const Jumbotron = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <SparkleOverlay />
        {/* Background Image */}
        <div
            className="absolute inset-0 z-0"
            style={{
            backgroundImage: `url('jumbotron.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 8%',
            filter: 'brightness(60%)',
            }}
        />

        <div className="absolute inset-0 bg-black/30 z-10" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-8xl font-bold text-softPearl leading-tight tracking-wide z-10"
        style={{ fontFamily: "'Amarante', serif" }}
        >
        <div className="flex flex-col items-center space-y-1">
            <span>Annisa</span>
            <span>Bunga</span>
            <span>Aurelia</span>
        </div>
    </motion.h1>
<br />  
    <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-l text-softPearl mt-4 z-10"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
            Welcome to a quiet space where thoughts, dreams, and code intertwine ✨
          </motion.p>

    <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-sm text-softPearl mt-4 z-10"
            style={{ fontFamily: "'Playfair Display', serif"}}
          >
            This portfolio is a living archive — frequently updated as I grow, explore, and create
          </motion.p>
    </section>
  );
};

export default Jumbotron;
