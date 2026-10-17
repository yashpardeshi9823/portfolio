// Edit everything about you in this one file.
export const profile = {
  name: 'Your Name',
  brand: 'YOURNAME.',
  photo: '/profile.svg', // replace with a transparent-background PNG, e.g. '/profile.png'
  roles: ['Full Stack Developer', 'UI/UX Designer', 'Data Science'],
  headline: ['I Build', 'Digital', 'Experiences'],
  intro:
    'I turn bold ideas into seamless digital experiences. Where frontend meets powerful backend, and code transforms vision into impact.',
  quote: ['Code is my craft.', 'Impact is my goal.'],
  resume: '/resume.pdf',
  email: 'you@example.com',
  location: 'India',
  socials: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    instagram: 'https://instagram.com/your-username',
  },
}

export const about = {
  text: [
    "I'm a developer who cares about the details: smooth motion, clean architecture and interfaces that feel effortless.",
    'I enjoy taking products from a rough idea to a polished, production-ready experience across the whole stack.',
  ],
  stats: [
    { value: '15+', label: 'Projects shipped' },
    { value: '3+', label: 'Years coding' },
    { value: '10+', label: 'Technologies' },
  ],
}

export const projects = [
  {
    title: 'Cinematic Portfolio',
    description: 'A motion-rich personal site built with React, Tailwind CSS and Framer Motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    live: '#',
    code: '#',
  },
  {
    title: 'Realtime Chat App',
    description: 'Socket-powered messaging with rooms, presence and message history.',
    tags: ['Node.js', 'Socket.io', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard that turns raw data into clear, actionable insights.',
    tags: ['Python', 'Pandas', 'Chart.js'],
    live: '#',
    code: '#',
  },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML & CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
  { group: 'Data & Tools', items: ['Python', 'Pandas', 'Git & GitHub', 'Figma', 'Docker'] },
]

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Company Name',
    period: '2025 - Present',
    points: ['Built and shipped features used by thousands of users.', 'Improved page load performance by 40%.'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: '2023 - 2025',
    points: ['Designed and developed websites for small businesses.', 'Handled everything from design to deployment.'],
  },
]
