import { motion } from 'motion/react';
import SEO from '@/src/components/SEO';
import ScrambleText from '@/src/components/ScrambleText';
import { PROJECTS } from '@/src/lib/content';
import { Github, ExternalLink, Terminal } from 'lucide-react';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-10 space-y-16"
    >
      <SEO 
        title="Projects" 
        description="Technical projects and case studies by Muhammad Arief Furqany, including blockchain forensics and security tools." 
      />

      <section className="h-64 overflow-hidden space-y-4 border-4 border-slate-900 p-10 bg-white dark:bg-navy-950 dark:border-white transition-colors duration-300">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">PROJECTS</h1>
        <ScrambleText 
          text="A collection of tools, frameworks, and experiments focused on blockchain forensics, security engineering, and decentralized systems."
          className="max-w-2xl text-slate-500 font-medium dark:text-slate-400 block"
          revealSpeed={1.2}
        />
      </section>

      <div className="grid gap-12 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <div 
            key={project.slug}
            className="group relative border-4 border-slate-900 bg-white p-10 transition-[background-color,color] duration-200 hover:bg-slate-950 hover:text-white dark:border-white dark:bg-navy-900 dark:text-white dark:hover:bg-white dark:hover:text-navy-950"
          >
            <div className="space-y-8 h-full flex flex-col">
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                  <span className="flex items-center gap-2"><Terminal className="h-4 w-4" /> [CASE {i + 1}]</span>
                  <span>{project.period}</span>
                </div>
                <h2 className="text-3xl font-black uppercase leading-[0.9] text-inherit transition-colors">
                  {project.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="border-2 border-current px-2 py-1 font-mono text-[10px] font-bold uppercase transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-sm leading-relaxed font-medium text-inherit/80 group-hover:text-inherit transition-colors">
                {project.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="mt-auto pt-8 flex gap-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-current px-4 py-2 font-black uppercase text-xs hover:bg-current hover:text-inherit transition-all"
                >
<<<<<<< HEAD
                  <Github className="h-4 w-4" /> Source
=======
                  {project.link?.includes('github.com') ? (
                    <>
                      <Github className="h-4 w-4" /> Source
                    </>
                  ) : (
                    <>
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </>
                  )}
>>>>>>> 431fc44 (adding a new project and a blog)
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
