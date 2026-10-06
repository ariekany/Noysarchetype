export interface Project {
  slug: string;
  title: string;
  period: string;
  description: string[];
  tags: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content?: string;
}

export interface TechnicalProfile {
  label: string;
  items: string[];
}

export const TECHNICAL_PROFILE: TechnicalProfile[] = [
  {
    label: 'Security & Systems',
    items: ['Web security', 'Linux operations', 'Rust', 'Python']
  },
  {
    label: 'Blockchain',
    items: ['Smart contracts', 'Blockchain security engineering', 'Market analytics', 'Fundamental research']
  },
  {
    label: 'Education',
    items: ['Information Technology', 'GPA 3.6 / 4.0', 'Islamic State University of Ar-Raniry']
  },
  {
    label: 'Technical Credentials',
    items: ['Belajar Dasar AI — Dicoding', 'Belajar Dasar Manajemen Proyek — Dicoding', 'AI Introductory Series — Telkom AI Center of Excellence']
  }
];

export const TECHNICAL_HIGHLIGHTS = [
  '2nd place, Web3 University Tour Aceh — Binance Academy × Tokocrypto × Coinvestasi',
  'Website security assessment and performance tuning for the UINAR Journal Web System',
  'Blockchain Technology, Business Intelligence, and Linux Systems laboratory instruction'
];

export const PROJECTS: Project[] = [
  {
    slug: 'Paarthenon-explorer',
    title: 'Parthenon WebAR & 3D Interactive Hub',
    period: 'May 2026 - Jun 2026',
    description: [
      'Aplikasi web interaktif berbasis React, Vite, dan Tailwind CSS untuk mengeksplorasi situs sejarah kuil Parthenon di Athena.',
      'Dilengkapi dengan simulasi rekonstruksi 3D interaktif dan teknologi WebAR (Augmented Reality) menggunakan pustaka A-Frame dan AR.js.',
      'Menyediakan perbandingan kuil Parthenon dalam masa kejayaannya (rekonstruksi utuh) maupun penampakan reruntuhan aslinya saat ini, serta hotspot interaktif model 3D.'
    ],
    tags: ['React', 'WebAR', 'A-Frame', 'AR.js', 'Tailwind CSS', 'Sketchfab'],
    link: 'https://parthenon-explorer-9fib4cfpg-kanoys-projects.vercel.app/'
  },
  {
    slug: 'heist-catcher',
    title: 'Heist Catcher',
    period: 'Apr 2026 - May 2026',
    description: [
      'Engineered a hybrid Rust-Python blockchain forensics framework specifically designed for transaction anomaly detection, mainly in money laundering.',
      'Implemented Depth-First Search (DFS) algorithms to efficiently map and track complex transaction flows across 10,000+ on-chain data points.',
      'Applied Benford\'s Law for the statistical validation of on-chain data, effectively reducing false positives in suspicious activity identification by up to 30%.'
    ],
    tags: ['Rust', 'Python', 'Blockchain', 'Forensics', 'Data Science'],
    link: 'https://github.com/ariekany/HeistCatcher'
  },
  {
    slug: 'Twiscaper',
    title: 'Twitter Scraper',
    period: 'June 2026 - July 2026',
    description: [
      'A powerful yet simple command-line tool to scrape comments, replies, and search results from Twitter/X posts using Python and uv'
    ],
    tags: ['Rust', 'Python', 'Social-Media', 'Data Scraping', 'Data Science'],
    link: 'https://github.com/ariekany/Twiscaper'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Binance',
    role: 'Binance Angel',
    period: 'Mar 2026 - Present',
    location: 'Banda Aceh, Indonesia',
    highlights: [
      'Managed and educated the local crypto community, providing guidance on platform navigation and fostering a secure environment for users.',
      'Participated in exclusive beta testing for upcoming Binance features, providing actionable feedback directly to the product development team.',
      'Facilitated local meetups and community gatherings to strengthen brand presence and expand the user network.'
    ]
  },
  {
    company: 'Islamic State University of Ar-Raniry',
    role: 'Laboratory Assistant',
    period: 'Feb 2025 - Nov 2025',
    location: 'Banda Aceh',
    highlights: [
      'Instructed and mentored students in practical laboratory sessions for Blockchain Technology, Business Intelligence, and Linux System Operations.',
      'Evaluated student projects and assignments, ensuring comprehension of complex technical concepts and practical implementations.'
    ]
  },
  {
    company: 'Islamic State University of Ar-Raniry',
    role: 'Website Security Analyst Intern',
    period: 'Jun 2024 - Aug 2024',
    location: 'Banda Aceh',
    highlights: [
      'Executed comprehensive website vulnerability assessments and performance tuning for the UINAR Journal Web System.',
      'Identified and mitigated major security flaws, achieving a 30% measurable improvement in overall web security.'
    ]
  }
];

export const POSTS: Post[] = [
  {
    slug: 'parthenon-webar-hub',
    title: 'Eksplorasi Parthenon: Menyatukan Sejarah, Model 3D, dan WebAR',
    date: '2026-06-15',
    description: 'Membangun aplikasi edukasi interaktif kuil Parthenon menggunakan React, Vite, Tailwind CSS, A-Frame, AR.js, dan Sketchfab.',
    tags: ['React', 'WebAR', 'A-Frame', 'AR.js']
  },
  {
    slug: 'arsitektur-sistem-forensik',
    title: 'Membangun Arsitektur Sistem Forensik Blockchain dengan Rust',
    date: '2026-05-10',
    description: 'Membongkar Pola Pencucian Uang Digital dengan Kecepatan Rust dan Fleksibilitas Python.',
    tags: ['Rust', 'Python', 'Blockchain', 'Security']
  },
  
];
