/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrambleText from './components/ScrambleText';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen border-8 border-slate-900 bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white dark:border-white dark:bg-navy-950 dark:text-white dark:selection:bg-white dark:selection:text-navy-950 transition-colors duration-300">
        <Navbar />
        <main className="mx-auto max-w-7xl min-h-[calc(100vh-10rem)]">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className="h-12 border-t-2 border-slate-900 bg-slate-900 px-10 text-white flex items-center justify-between text-[10px] font-mono dark:bg-navy-950 dark:border-white transition-colors duration-300">
          <ScrambleText text="MUHAMMAD ARIEF FURQANY // VERSION 2.0" className="uppercase tracking-widest" />
          <div className="flex gap-6 uppercase">
            <span>Indonesia</span>
            <span>{new Date().getFullYear()} © NOYSARCHETYPE.DEV</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

