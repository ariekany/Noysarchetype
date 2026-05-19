import { motion } from 'motion/react';
import SEO from '@/src/components/SEO';
import ScrambleText from '@/src/components/ScrambleText';
import { POSTS } from '@/src/lib/content';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-10 space-y-16 bg-slate-100 min-h-screen"
    >
      <SEO 
        title="Blog" 
        description="Technical articles and thoughts on Blockchain, Rust, Python, and Web3 by Muhammad Arief Furqany." 
      />

      <section className="h-64 overflow-hidden space-y-4 bg-white border-4 border-slate-900 p-10 dark:bg-navy-950 dark:border-white transition-colors duration-300">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">ARCHIVE</h1>
        <ScrambleText 
          text="Documenting research in on-chain forensics, system safety, and blockchain engineering logic."
          className="max-w-2xl text-slate-500 font-medium dark:text-slate-400 block"
          revealSpeed={1.2}
        />
      </section>

      <div className="flex flex-col gap-4">
        {POSTS.map((post) => (
          <Link 
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group bg-white border-2 border-slate-900 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-slate-950 hover:text-white dark:bg-navy-900 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-navy-950 transition-[background-color,color,transform] duration-200 transform hover:-translate-x-2"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <span className="text-xs font-mono font-black opacity-60 bg-slate-50 border-2 border-slate-900 px-3 py-1 group-hover:bg-slate-800 transition-colors dark:bg-zinc-800 dark:border-white dark:group-hover:bg-zinc-700">
                {post.date.split('-').slice(1).join('/')}
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-inherit">
                {post.title}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 text-slate-500 dark:text-zinc-400 group-hover:text-inherit">
               {post.tags.slice(0, 1).map(tag => (
                <span key={tag} className="text-[10px] font-black uppercase px-2 py-0.5 border border-current">
                  {tag}
                </span>
              ))}
              <ChevronRight className="h-5 w-5 text-slate-900 dark:text-white group-hover:text-inherit group-hover:translate-x-2 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
