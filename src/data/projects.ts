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
    id: 'ctf-toolkit',
    title: 'CTF Toolkit',
    description: 'A collection of Python utilities for automating common CTF challenge tasks including crypto analysis, binary exploitation helpers, and network reconnaissance.',
    image: undefined,
    placeholderIcon: '/icons/python.svg',
    tags: [{ label: 'Python' }, { label: 'CTF' }, { label: 'Cybersecurity' }],
    links: {
      repo: 'https://github.com/davebirks/ctf-toolkit',
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
      live: 'https://davebirks.com',
      repo: 'https://github.com/davebirks/personal-website',
    },
  },
  {
    id: 'network-scanner',
    title: 'Network Scanner',
    description: 'A lightweight port and service scanner written in Python that enumerates open ports, fingerprints services, and generates structured JSON reports.',
    image: undefined,
    placeholderIcon: '/icons/python.svg',
    tags: [{ label: 'Python' }, { label: 'Networking' }, { label: 'Cybersecurity' }],
    links: {
      repo: 'https://github.com/davebirks/network-scanner',
    },
  },
  {
    id: 'writeup-blog',
    title: 'CTF Writeup Blog',
    description: 'A static blog documenting solutions to Capture-the-Flag challenges, covering topics from web exploitation and reverse engineering to forensics and cryptography.',
    image: undefined,
    placeholderIcon: '/icons/javascript.svg',
    tags: [{ label: 'CTF' }, { label: 'Writeups' }, { label: 'JavaScript' }],
    links: {
      live: 'https://davebirks.com/writeups',
    },
  },
  {
    id: 'discord-bot',
    title: 'Discord Utility Bot',
    description: 'A Discord bot built for a CTF team server, providing challenge tracking, hint management, team coordination commands, and automated flag submission.',
    image: undefined,
    placeholderIcon: '/icons/javascript.svg',
    tags: [{ label: 'JavaScript' }, { label: 'Node.js' }, { label: 'Discord.js' }],
    links: {
      repo: 'https://github.com/davebirks/ctf-discord-bot',
    },
  },
  {
    id: 'web-vuln-scanner',
    title: 'Web Vulnerability Scanner',
    description: 'An automated scanner that checks web applications for common vulnerabilities including SQL injection, XSS, open redirects, and misconfigured headers.',
    image: undefined,
    placeholderIcon: '/icons/python.svg',
    tags: [{ label: 'Python' }, { label: 'Web Security' }, { label: 'OWASP' }],
    links: {
      repo: 'https://github.com/davebirks/web-vuln-scanner',
    },
  },
]
