import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoaderScreen = () => {
  const [loading, setLoading] = useState(true);
  const [showBirds, setShowBirds] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setShowBirds(true); // Show birds after 10 seconds
    }, 10000);

    const fadeOutTimeout = setTimeout(() => {
      setFadeOut(true); // Fade out after 15 seconds
    }, 15000);

    const endLoadingTimeout = setTimeout(() => {
      setLoading(false); // End loading after 16 seconds
    }, 16000);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(endLoadingTimeout);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    };
  }, []);

  return (
    <div className="fixed z-50 w-full top-0 left-0">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="relative h-screen overflow-hidden bg-black"
            initial={{ opacity: 1 }}
            animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Gradient overlay to darken the background image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <img
              src="https://i.pinimg.com/736x/58/af/a6/58afa6c0a6de1faea360db84ebe75353.jpg"
              alt="Wedding"
              className="h-full w-full object-cover"
            />
            {!showBirds ? (
              // Text animation
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: -100 }}
                exit={{ opacity: 0, y: -200 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <motion.h1
                  className="text-4xl font-bold flex flex-col text-[78px] leading-[80px] custom"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Две
                  <span>души,</span>
                  одна история
                </motion.h1>
                <motion.p
                  className="mt-2 text-[68px]"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  12.21.2025
                </motion.p>
              </motion.div>
            ) : (
              // Bird animation
              <BirdAnimation />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Bird animation component
const BirdAnimation = () => {
  const birdVariants = {
    initial: { x: "-100vw", y: "100vh", scale: 0 },
    animate: { x: "100vw", y: "-100vh", scale: 1 },
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[150px]"
          style={{
            top: `${Math.random() * 50 + 30}%`,
            left: `${Math.random() * 50}%`,
          }}
          variants={birdVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2 + i * 0.2,
            delay: i * 0.3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          🕊️
        </motion.div>
      ))}
    </div>
  );
};
