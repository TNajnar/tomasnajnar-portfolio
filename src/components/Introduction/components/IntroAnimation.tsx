import { motion } from "framer-motion";
import { ReactElement } from "react"

const IntroAnimation = (): ReactElement => {
  const radius = 150;

  return (
<motion.div className="relative w-full h-full text-white p-4 overflow-hidden">
  {[...Array(10)].map((_, index) => {
    const angle = (index / 10) * Math.PI * 2; // rozložení teček rovnoměrně v kruhu
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return (
      <motion.span
        key={index}
        initial={{ x: x, y: y }}
        animate={{
          x: Math.cos(angle + index) * radius * 0.7, // pohyb po kružnici
          y: Math.sin(angle + index) * radius * 0.7,
          rotate: 380, // rotace kolem své osy
        }}
        transition={{
          duration: Math.random() * 1 + 0.5, // průměrná délka animace
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          position: 'absolute',
          fontSize: '24px',
          color: 'white',
          top: '50%', // střední pozice vzhledem k rodiči
          left: '50%', // střední pozice vzhledem k rodiči
          transform: 'translate(-50%, -50%)', // posunutí na střed
        }}
      >
        •
      </motion.span>
    );
  })}
</motion.div>
  );
};

export default IntroAnimation;
