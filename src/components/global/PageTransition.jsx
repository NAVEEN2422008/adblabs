import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Lime slash wipe overlay */}
      <motion.div
        className="fixed inset-0 z-[9996] pointer-events-none bg-[#A3FF35] origin-left"
        style={{ transform: 'skewX(-18deg)' }}
        initial={{ scaleX: 0, x: '-10%' }}
        animate={{ scaleX: [0, 1, 0], x: ['-10%', '0%', '110%'] }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1], times: [0, 0.5, 1] }}
      />
      {children}
    </motion.div>
  );
}