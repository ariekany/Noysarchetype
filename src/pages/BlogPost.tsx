import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import SEO from '@/src/components/SEO';
import { POSTS } from '@/src/lib/content';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { codeToHtml } from 'shiki';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const post = POSTS.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }

    async function loadContent() {
      try {
        const response = await fetch(`/posts/${slug}.md`);
        const text = await response.text();
        setContent(text);
      } catch (e) {
        console.error('Failed to load post content', e);
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, [slug, post, navigate]);

  if (!post || loading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-10 bg-white dark:bg-navy-950 min-h-[calc(100vh-10rem)] border-x-2 border-slate-900 dark:border-white transition-colors duration-300"
    >
      <SEO title={post.title} description={post.description} />

      <div className="mx-auto max-w-4xl space-y-12">
        <button
          onClick={() => navigate('/blog')}
          className="group flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          [CLOSE_POST]
        </button>

        <header className="space-y-8 pb-12 border-b-4 border-slate-900 dark:border-white">
          <div className="flex flex-wrap gap-8 font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            <span className="flex items-center gap-2 border border-slate-200 dark:border-navy-800 px-2 py-0.5">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3 w-3" />
              EST. 1200 WORDS
            </span>
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-7xl leading-[0.85]">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 pt-4">
            {post.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 border-2 border-slate-900 dark:border-white bg-slate-900 dark:bg-white text-white dark:text-navy-950 px-3 py-1 font-mono text-[10px] font-bold uppercase transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <CodeBlock language={match[1]} value={String(children).replace(/\n$/, '')} />
                ) : (
                  <code className="bg-slate-100 dark:bg-navy-900 dark:text-slate-200 px-1 font-mono font-bold" {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
}

function CodeBlock({ language, value }: { language: string; value: string }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    codeToHtml(value, {
      lang: language,
      theme: 'github-dark'
    }).then(setHtml);
  }, [value, language]);

  return (
    <div 
      className="shiki-wrapper my-8 overflow-hidden rounded border border-zinc-800 bg-zinc-900/50"
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
}
