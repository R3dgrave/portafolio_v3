import { motion } from "framer-motion";

const LogoAnimation = ({ onFinish }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#161d2d] z-50 flex-col"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Logo con efecto de trazo radial */}
      <motion.img
        src="https://raw.githubusercontent.com/R3dgrave/portafolio-v3/refs/heads/main/src/assets/iconos/logo.webp"
        alt="Logo"
        className="w-32 h-32"
        initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
        animate={{
          opacity: 1,
          clipPath: "circle(100% at 50% 50%)",
        }}
        transition={{ duration: 5, ease: "easeInOut" }}
      />

      {/* Párrafo debajo del logo */}
      <motion.p
        className="text-[#0097b2] text-xl mt-4 font-semibold uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Diego Abanto - Portafolio
      </motion.p>

      {/* Efecto de espera y desaparición */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 5, ease: "easeInOut" }}
        onAnimationComplete={onFinish}
        className="absolute top-0 left-0 w-full h-full bg-[#161d2d]"
      />
    </motion.div>
  );
};

export default LogoAnimation;
