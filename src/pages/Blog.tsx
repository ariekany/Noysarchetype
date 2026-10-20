import { motion } from 'motion/react';
import SEO from '@/src/components/SEO';
import ScrambleText from '@/src/components/ScrambleText';
import { POSTS } from '@/src/lib/content';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ChevronRight, ExternalLink } from 'lucide-react';

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
          text="Writing about technology, community work, and experiences shaping my path in Web3 and digital innovation."
          className="max-w-2xl text-slate-500 font-medium dark:text-slate-400 block"
          revealSpeed={1.2}
        />
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">Community & Organization</h2>
          <ScrambleText
            text="Selected volunteering and organizational experiences."
            className="mt-2 text-slate-500 dark:text-slate-400 block"
            revealSpeed={1.2}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="border-2 border-slate-900 bg-white p-6 dark:bg-navy-900 dark:border-white">
            <p className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Community</p>
            <h3 className="mt-3 text-xl font-black uppercase">Binance Angel</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Supporting local users through Web3 education and community activities.</p>
          </article>
          <article className="border-2 border-slate-900 bg-white p-6 dark:bg-navy-900 dark:border-white">
            <p className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Organization</p>
            <h3 className="mt-3 text-xl font-black uppercase">HIMA-TI</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Serving as an academic mediator and helping build campus technology initiatives.</p>
          </article>
          <article className="border-2 border-slate-900 bg-white p-6 dark:bg-navy-900 dark:border-white">
            <p className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Volunteer Leadership</p>
            <h3 className="mt-3 text-xl font-black uppercase">Event Committee Chair</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Leading the NVIDIA Tech Forward 2025 committee and coordinating campus-industry collaboration.</p>
          </article>
        </div>
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
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-inherit">
                  {post.title}
                </h2>
                {post.contribution && (
                  <p className="mt-2 text-xs font-mono font-black uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    — contribution: {post.contribution}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-slate-500 dark:text-zinc-400 group-hover:text-inherit">
              {post.tags.slice(0, 1).map(tag => (
                <span key={tag} className="text-[10px] font-black uppercase px-2 py-0.5 border border-current">
                  {tag}
                </span>
              ))}
              {post.sourceUrl && (
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Read original article: ${post.title}`}
                  className="inline-flex items-center gap-1 border-2 border-current px-2 py-1 text-[10px] font-black uppercase hover:bg-current hover:text-white dark:hover:text-navy-950"
                  onClick={(event) => event.stopPropagation()}
                >
                  Original <ExternalLink className="h-3 w-3" />
                </a>
              )}
              <ChevronRight className="h-5 w-5 text-slate-900 dark:text-white group-hover:text-inherit group-hover:translate-x-2 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
