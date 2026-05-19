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

export const PROJECTS: Project[] = [
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
    link: 'https://github.com/ariekany'
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
    slug: 'arsitektur-sistem-forensik',
    title: 'Membangun Arsitektur Sistem Forensik Blockchain dengan Rust',
    date: '2026-05-10',
    description: 'Membongkar Pola Pencucian Uang Digital dengan Kecepatan Rust dan Fleksibilitas Python.',
    tags: ['Rust', 'Python', 'Blockchain', 'Security']
  },
  
];
