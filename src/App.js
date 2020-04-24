import React from "react";
import "./App.css";
import { motion, useMotionValue, useRef, useTransform } from "framer-motion";
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

function App() {
  return (
    <section className="App">
      <motion.div
        animate={{
          rotate: 600,
          scale: 1,
          backgroundColor: "rgba(0, 0, 0, 0.2)"
        }}
        transition={{ ease: "easeInOut", duration: 3, flip: Infinity }}
      />
      <motion.div
        animate={{
          rotate: 200,
          scale: 1,
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        }}
        transition={{ ease: "easeInOut", duration: 3, flip: Infinity }}
      />
      <motion.div
        animate={{ rotate: 200, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 3, flip: Infinity }}
      />
      <motion.div
        animate={{
          rotate: 0,
          scale: 1,
          backgroundColor: "rgba(266, 100, 100, 0.6)"
        }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50
        }}
      />
      {/* clickable button */}
      <motion.div
        animate={{
          rotate: 0,
          scale: 1,
          backgroundColor: "rgba(0, 100, 100, 0.6)"
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 100 4">
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 100 1000 4">
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </section>
  );
}

export default App;
