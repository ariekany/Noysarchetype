import { motion } from 'motion/react';
import SEO from '@/src/components/SEO';
import ScrambleText from '@/src/components/ScrambleText';
import { EXPERIENCE, PROJECTS, TECHNICAL_HIGHLIGHTS, TECHNICAL_PROFILE } from '@/src/lib/content';
import { Shield, Cpu, Binary, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row min-h-[calc(100vh-6.5rem)]"
    >
      <SEO 
        title="Home" 
        description="Muhammad Arief Furqany - Software Architect & Web3 Builder specializing in blockchain security." 
      />

      {/* Sidebar Section */}
      <div className="w-full md:w-1/3 border-r-0 md:border-r-2 border-slate-900 flex flex-col p-10 bg-white dark:bg-navy-950 dark:border-white transition-colors duration-300">
        <div className="mb-12">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Status: Open for Collaboration</p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black leading-[0.9] uppercase mb-8 text-slate-900 dark:text-white"
          >
            Blockchain<br/>Security <br/>Engineering
          </motion.h1>
          <ScrambleText 
            text="Dedicated Information Technology student specializing in blockchain security engine and Web3 development. I leverage programming and data analysis to build innovative solutions for the decentralized future."
            className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 block"
            revealSpeed={3}
          />
        </div>

        <div className="mt-auto pt-8 border-t border-slate-100 dark:border-navy-900">
          <p className="text-xs font-black uppercase mb-4 py-1 border-b border-slate-900 dark:border-white dark:text-white">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {['Rust', 'Python', 'Web3', 'Security', 'Figma'].map((tech, i) => (
              <motion.span 
                key={tech} 
                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 3 : -3 }}
                transition={{ type: 'spring', stiffness: 500 }}
                className="px-2 py-1 bg-slate-100 border border-slate-900 text-[10px] font-mono font-bold uppercase dark:bg-navy-900 dark:border-white dark:text-white cursor-default"
              >
                <ScrambleText text={tech} />
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Selected Projects Area */}
        <div className="p-10 border-b-2 border-slate-900 flex flex-col bg-slate-50 dark:bg-navy-950 dark:border-white transition-colors duration-300">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">Selected Work</h2>
            <span className="text-xs font-mono text-slate-400 underline underline-offset-4 text-xs font-mono text-slate-400 dark:text-slate-500">// 2024–2026</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <Link 
                key={project.slug}
                to="/projects"
                className="border-2 border-slate-900 p-8 flex flex-col justify-between bg-white group hover:bg-slate-900 hover:text-white dark:bg-navy-900 dark:border-white dark:hover:bg-white dark:hover:text-navy-950 transition-[background-color,transform] duration-200 transform hover:-translate-y-1"
              >
                <div>
                  <span className="text-[10px] font-mono opacity-60 uppercase font-black tracking-widest text-slate-400 dark:text-zinc-500 group-hover:text-inherit group-hover:opacity-60 transition-opacity">[PROJECT 0{i + 1}]</span>
                  <h3 className="text-xl font-black uppercase mt-1 leading-none text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-navy-950 transition-colors">
                    <ScrambleText text={project.title} />
                  </h3>
                  <p className="text-xs mt-4 leading-relaxed line-clamp-2 opacity-80 text-slate-600 dark:text-zinc-400 group-hover:text-white dark:group-hover:text-navy-900 transition-colors">
                    <ScrambleText text={project.description[0]} />
                  </p>
                </div>
                <div className="flex gap-4 mt-8">
                   <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest group-hover:text-white dark:group-hover:text-navy-950 transition-colors">
                    <ScrambleText text="View Project" />
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Technical profile */}
        <div className="p-10 border-b-2 border-slate-900 bg-white dark:bg-navy-950 dark:border-white transition-colors duration-300">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white"><ScrambleText text="Technical Profile" /></h2>
            <span className="text-xs font-mono text-slate-400"><ScrambleText text="// FOCUS AREAS" /></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TECHNICAL_PROFILE.map((group) => (
              <div key={group.label} className="border-2 border-slate-900 p-5 dark:border-white">
                <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-slate-900 dark:text-white"><ScrambleText text={group.label} /></h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="text-xs font-mono border border-slate-300 px-2 py-1 dark:border-slate-600 dark:text-slate-300"><ScrambleText text={item} /></span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical highlights */}
        <div className="p-10 border-b-2 border-slate-900 bg-slate-50 dark:bg-navy-950 dark:border-white transition-colors duration-300">
          <h2 className="text-xl font-black uppercase tracking-tighter mb-6 text-slate-900 dark:text-white"><ScrambleText text="Technical Highlights" /></h2>
          <div className="space-y-3">
            {TECHNICAL_HIGHLIGHTS.map((highlight) => <p key={highlight} className="border-l-4 border-slate-900 pl-4 text-sm font-medium text-slate-700 dark:border-white dark:text-slate-300"><ScrambleText text={highlight} /></p>)}
          </div>
        </div>

        {/* Experience / Grid section */}
        <div className="p-10 flex-1 bg-slate-100 dark:bg-navy-900 transition-colors duration-300">
           <div className="flex justify-between items-end mb-8">
            <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">Experience</h2>
            <Link to="/blog" className="px-4 py-1 border-2 border-slate-900 bg-white text-[10px] font-black uppercase hover:invert transition-colors dark:bg-navy-950 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-navy-950">
              <ScrambleText text="Read Blog" />
            </Link>
          </div>
          
          <div className="space-y-4">
          {EXPERIENCE.slice(0, 3).map((exp, i) => (
            <div key={i} className="bg-white border-2 border-slate-900 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-slate-900 hover:text-white dark:bg-navy-950 dark:border-white dark:hover:bg-white dark:hover:text-navy-950 transition-[background-color,color] duration-200">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="text-xs font-mono text-slate-400 border border-slate-200 px-2 flex items-center h-6 dark:border-navy-800 transition-colors group-hover:border-slate-800 dark:group-hover:border-slate-200">
                  <ScrambleText text={exp.period.split(' - ')[0]} />
                </span>
                <div>
                  <span className="font-black uppercase text-sm text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-navy-950 transition-colors">
                    <ScrambleText text={exp.role} />
                  </span>
                  <p className="text-[10px] text-slate-500 font-mono font-bold uppercase dark:text-slate-500 group-hover:text-slate-300 dark:group-hover:text-slate-400 transition-colors">
                    <ScrambleText text={exp.company} />
                  </p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 border-2 border-slate-900 uppercase font-black bg-white dark:bg-navy-950 dark:border-white dark:text-white group-hover:bg-white group-hover:text-navy-950 dark:group-hover:bg-navy-800 dark:group-hover:text-white transition-colors">
                <ScrambleText text={exp.location} />
              </span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
