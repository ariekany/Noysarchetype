import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Terminal, Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import ScrambleText from './ScrambleText';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="h-16 flex items-center justify-between px-10 border-b-2 border-slate-900 bg-white dark:border-white dark:bg-navy-950">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center transition-transform group-hover:rotate-90 dark:bg-white">
            <Terminal className="h-4 w-4 text-white dark:text-navy-950" />
          </div>
          <div className="w-[240px] overflow-hidden whitespace-nowrap">
            <ScrambleText 
              text="Noysarchetype.DEV" 
              className="font-black tracking-tighter text-xl uppercase text-slate-900 dark:text-white" 
            />
          </div>
        </Link>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'font-medium text-sm uppercase tracking-widest transition-all hover:line-through',
              location.pathname === item.path 
                ? 'underline decoration-2 text-slate-900 dark:text-white' 
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="h-6 w-[2px] bg-slate-900 dark:bg-white hidden sm:block" />
        <a href="https://github.com/ariekany" target="_blank" rel="noopener noreferrer" className="p-1 border border-transparent hover:border-slate-900 dark:hover:border-white transition-colors">
          <Github className="h-4 w-4 text-slate-400 hover:text-slate-900 dark:hover:text-white" />
        </a>
        <a href="https://linkedin.com/in/ariekany" target="_blank" rel="noopener noreferrer" className="p-1 border border-transparent hover:border-slate-900 dark:hover:border-white transition-colors">
          <Linkedin className="h-4 w-4 text-slate-400 hover:text-slate-900 dark:hover:text-white" />
        </a>
      </div>
    </nav>
  );
}
