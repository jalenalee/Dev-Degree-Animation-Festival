import React from 'react';
import './App.css';
import { motion } from "framer-motion"

function App() {
  return (
    <section className='App'>
      <motion.div 
        animate = {{rotate: 360, scale: 1.5}}
        transition = {{ ease: "easeInOut", duration: 1, flip: Infinity }} />
    </section>
  )
}

export default App;
