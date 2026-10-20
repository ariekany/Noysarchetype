export interface Project {
  slug: string;
  title: string;
  period: string;
  description: string[];
  tags: string[];
  link?: string;
  demoLink?: string;
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
  sourceUrl?: string;
  contribution?: string;
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
      'Interactive Parthenon learning experience combining React, WebAR, 3D reconstruction, A-Frame, AR.js, and Sketchfab.'
    ],
    tags: ['React', 'WebAR', 'A-Frame', 'AR.js', 'Tailwind CSS', 'Sketchfab'],
    link: 'https://parthenon-explorer-9fib4cfpg-kanoys-projects.vercel.app/'
  },
  {
    slug: 'heist-catcher',
    title: 'Heist Catcher',
    period: 'Apr 2026 - May 2026',
    description: [
      'Rust-Python blockchain forensics framework for transaction anomaly detection, graph analysis, and Benford\'s Law validation across 10,000+ on-chain data points.'
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
  },
  {
    slug: 'fatf-40-recommendations',
    title: 'FATF Recommendation Explorer',
    period: '2026',
    description: [
      'Bilingual FATF standards reference and AML/CFT learning platform combining practical guidance, operational scenarios, and global case studies.'
    ],
    tags: ['React', 'TypeScript', 'AML/CFT', 'FATF', 'Compliance', 'Interactive Learning'],
    link: 'https://github.com/ariekany/fatf_40recommendation',
    demoLink: 'https://fatf-40recommendation-5jel4ewg6-kanoys-projects.vercel.app/'
  }
];

export const ADDITIONAL_PROJECTS: Project[] = [
  {
    slug: 'jawi-recognition',
    title: 'Jawi Recognition',
    period: '2026',
    description: [
      'Computer vision system translating Acehnese Jawi words with MobileNetV2 and cosine similarity.'
    ],
    tags: ['Computer Vision', 'Deep Learning', 'MobileNetV2', 'Python'],
    link: 'https://github.com/ariekany/Harah-Jawo-Aceh.git'
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
  },
  {
    company: 'HIMA-TI',
    role: 'Academic Mediator',
    period: '2025',
    location: 'Banda Aceh',
    highlights: [
      'Supported academic communication between students, faculty, and external partners.',
      'Helped connect campus technology initiatives with local collaboration opportunities.'
    ]
  },
  {
    company: 'NVIDIA Tech Forward 2025',
    role: 'Committee Chair',
    period: '2025',
    location: 'Banda Aceh',
    highlights: [
      'Led the event committee and coordinated campus-industry collaboration.',
      'Supported an event focused on AI, GPU technology, and digital opportunities.'
    ]
  }
];

export const POSTS: Post[] = [
  {
    slug: 'parthenon-webar-hub',
    title: 'Eksplorasi Parthenon',
    date: '2026-06-15',
    description: 'Membangun aplikasi edukasi interaktif kuil Parthenon menggunakan React, Vite, Tailwind CSS, A-Frame, AR.js, dan Sketchfab.',
    tags: ['React', 'WebAR', 'A-Frame', 'AR.js']
  },
  {
    slug: 'arsitektur-sistem-forensik',
    title: 'Arsitektur Forensik Blockchain',
    date: '2026-05-10',
    description: 'Membongkar pola pencucian uang digital dengan kecepatan Rust dan fleksibilitas Python.',
    tags: ['Rust', 'Python', 'Blockchain', 'Security']
  },
  {
    slug: 'web3-university-tour-2025',
    title: 'Web3 University Tour',
    date: '2025-12-01',
    description: 'Your Web3 education work featured in Coinvestasi after reaching students across eight Indonesian cities.',
    tags: ['Web3', 'Education', 'Blockchain'],
    sourceUrl: 'https://coinvestasi.com/berita/web3-university-tour-2025-edukasi-mahasiswa-di-delapan-kota-indonesia',
    contribution: 'Featured quote contributor'
  },
  {
    slug: 'banda-aceh-government-audiensi',
    title: 'Audiensi dengan Wali Kota Banda Aceh',
    date: '2025-05-01',
    description: 'Academic and student collaboration with the Banda Aceh Government through HIMA-TI and the Faculty of Science and Technology.',
    tags: ['Technology', 'Community', 'Leadership'],
    sourceUrl: 'https://fst.ar-raniry.ac.id/2025/05/civitas-akademika-fakultas-sains-dan-teknologi-bersama-hima-ti-lakukan-audiensi-dengan-pemerintah-kota-banda-aceh/',
    contribution: 'HIMA-TI academic mediator'
  },
  {
    slug: 'web3-university-tour-aceh',
    title: 'Web3 Tour Aceh',
    date: '2025-01-01',
    description: 'Second-place achievement in the Aceh Web3 University Tour, promoting blockchain literacy with Tokocrypto and Binance Academy.',
    tags: ['Achievement', 'Web3', 'Blockchain'],
    sourceUrl: 'https://coinvestasi.com/berita/web3-university-tour-aceh',
    contribution: 'Second-place winner'
  },
  {
    slug: 'nvidia-tech-forward-2025',
    title: 'NVIDIA Tech Forward',
    date: '2025-01-01',
    description: 'Chaired the committee for a campus-industry event focused on Banda Aceh\'s digital transformation.',
    tags: ['Leadership', 'Technology', 'Event'],
    sourceUrl: 'https://fst.uin.ar-raniry.ac.id/informasi-berita/nvidia_tech_forward_2025:_wujud_kolaborasi_kampus_dan_industri_menuju_transformasi_digital_banda_aceh',
    contribution: 'Committee chair'
  },
  {
    slug: 'hana-meuhoe-tamoeng',
    title: 'Hana Meuhoe Tamoeng',
    date: '2026-04-13',
    description: 'An article discussing the challenges of centralized education in Aceh.',
    tags: ['Education', 'Aceh', 'Opinion'],
    sourceUrl: 'https://sumberpost.com/2026/04/13/hana-meuhoe-tamoeng-sisi-gelap-sentralisasi-pendidikan-di-aceh/',
    contribution: 'Article writer'
  }
];
