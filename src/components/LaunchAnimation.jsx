'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LaunchAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-200 to-blue-200"
        >
          <div className="relative flex flex-col items-center justify-center text-center">
            {/* Welcome Message */}
            <h1 className="text-4xl font-bold text-purple-700 drop-shadow-md mb-4 animate-bounce">
              🎉 Welcome to TechStore! 🎈
            </h1>

            {/* Balloons */}
            <div className="absolute -top-10 left-1/4 animate-float">
              🎈
            </div>
            <div className="absolute top-5 right-1/3 animate-float2">
              🎈
            </div>

            {/* Confetti Popper */}
            <div className="absolute bottom-10 left-10 text-3xl animate-pop">
              🎊
            </div>
            <div className="absolute bottom-10 right-10 text-3xl animate-pop delay-200">
              🎊
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LaunchAnimation;
