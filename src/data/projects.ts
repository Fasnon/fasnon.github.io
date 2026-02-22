export interface Tag {
  label: string
}

export interface ProjectLink {
  live?: string
  repo?: string
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  placeholderIcon?: string
  tags: Tag[]
  links: ProjectLink
}

// Ordered by manual priority — most impressive first
export const projects: Project[] = [
  {
    id: 'sg-infoleague',
    title: 'Singapore Informatics League',
    description: 'Four-hour, coordinated competitive programming contest. Developer. Supported inaugural event (Nov 2025): 620 players across 150 teams; handled 14,788 submissions in 4-hour contest.',
    image: 'project/sginfoleague.png',
    tags: [{ label: 'React' }, { label: 'Firebase' }, { label: 'TypeScript' }, { label: 'Astro' }],
    links: {
      live: 'https://sginfoleague.org/',
    },
  },
  {
    id: 'personal-website',
    title: 'Personal Website',
    description: 'This interactive portfolio built with Vue 3 and TypeScript, featuring animated timelines, a project showcase grid, and a Three.js terrain background.',
    image: undefined,
    placeholderIcon: '/icons/vue.svg',
    tags: [{ label: 'Vue 3' }, { label: 'TypeScript' }, { label: 'Tailwind CSS' }, { label: 'Three.js' }],
    links: {
      live: 'https://fasnon.github.io',
      repo: 'https://github.com/Fasnon/fasnon.github.io',
    },
  },
  {
    id: 'nushtours',
    title: 'NUS High Tours',
    description: 'Mobile-first Tour Booking Website to prevent issue of people wasting time on purely queuing, allowing them to experience other offerings. 3,000 visitors used the app during the 2022 Open House.',
    image: 'project/nushtours.png',
    placeholderIcon: '/icons/javascript.svg',
    tags: [{ label: 'Firebase' }, { label: 'Mobile-first' }, { label: 'Vue' }],
    links: {
      live: 'https://nush-open-house-tours.web.app/',
      repo: 'https://github.com/appventure-nush/nush-bookings'
    },
  },
  {
    id: 'figglespeak',
    title: 'FiggleSpeak',
    description: 'AI app providing real-time pronunciation feedback from live audio. Integrated AI inference pipeline into backend APIs and docker-containerised cloud infrastructure.',
    image: 'project/figglespeak.png',
    placeholderIcon: '/icons/python.svg',
    tags: [{ label: 'Flask' }, { label: 'Docker' }, { label: 'HuggingFace' }],
    links: {
      repo: 'https://github.com/FiggleSpeak',
    },
  },
  {
    id: 'blog',
    title: 'Writeup/ Blogs',
    description: 'Simple blog written to show my thought process and explain some CTF solves.',
    image: undefined,
    placeholderIcon: '/icons/javascript.svg',
    tags: [{ label: 'JavaScript' }, { label: 'CTFs' }, { label: 'Writeups' }],
    links: {
      live: 'https://fasnon.github.io/blog/',
      repo: 'https://github.com/Fasnon/blog',
    },
  },
]
