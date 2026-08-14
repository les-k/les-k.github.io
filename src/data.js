// ============================================================
//  EDIT THIS FILE to make the site yours.
//  Everything on the page pulls its content from here.
//  Content combined from your seven previous portfolio sites.
// ============================================================

export const profile = {
  name: 'Leslie Kadenge',
  firstName: 'Leslie',
  title: 'AI Engineer & Full-Stack Developer',
  tagline:
    'I train the model, build the API, design the page it lands on, and read what the data says about all three — then go make a game instead.',
  location: 'Kenya 🇰🇪',
  email: 'lesliekadenge@gmail.com',
  otherEmails: ['sputniksaver@gmail.com', 'Remotejobs004@gmail.com'],
  phones: ['+254 794 383225'],
  cv: 'files/Curriculum Vitae.pdf',
  photo: 'images/leslie-about.jpg',
  cutout: 'images/leslie-cutout.png',
  about: [
    `Hi, I'm Leslie Kadenge — a developer based in Nairobi, building for people
     anywhere. I work across AI engineering, fullstack development, web design,
     data science and game development, and the range is deliberate: problems
     rarely turn up labelled with which discipline they need.`,
    `What I care about is whether a thing ships. Not a demo that holds together
     for ten minutes — something deployed, tested, and still standing a month
     later.`,
    `I like the work most people find tedious — the test that catches the bug
     nobody would have spotted, the check that fails the build before a client
     ever sees it. Unglamorous, and the whole difference between software that
     works and software that only looks like it does.`,
    `I'm open to remote and contract work, wherever you are. If you have
     something that needs building, or something half-built that needs
     finishing, I'd like to hear about it.`,
  ],
  funFacts: ['☕ 410+ cups of coffee', '🚀 200+ projects done', '🤝 50+ happy clients'],
}

// The hats you wear — one per old website, now on one site
export const roles = [
  'AI Engineer',
  'Full-Stack Developer',
  'Web Developer',
  'Software Developer',
  'Game Developer',
]

// The three a client actually uses. X and Instagram were here on the personal
// handles (@HappyDripfactor, @the.emmperor) — on a page whose job is to get
// someone to email you, every other link is just a way to leave.
export const socials = [
  { label: 'GitHub', url: 'https://github.com/les-k', icon: '🐙' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/leslie-kadenge-4a4b62213/', icon: '💼' },
  { label: 'Email', url: 'mailto:lesliekadenge@gmail.com', icon: '✉️' },
]

// What I do — combined services from all sites
export const services = [
  {
    title: 'AI Engineering',
    emoji: '🧠',
    blurb:
      'Results-oriented AI engineer with a strong background in machine learning and deep learning — designing, implementing, and optimizing cutting-edge AI solutions.',
    resume: 'files/AI engineer resume.pdf',
  },
  {
    title: 'Fullstack Development',
    emoji: '🧩',
    blurb:
      'Versatile full stack developer building robust, scalable, user-centric web applications with a strong foundation in both front-end and back-end technologies.',
    resume: 'files/Fullstack resume.pdf',
  },
  {
    title: 'Web Design',
    emoji: '🎨',
    blurb:
      'Creative, detail-oriented web designer crafting visually stunning, user-centric digital experiences grounded in design principles and UX.',
    resume: 'files/Web developer resume.pdf',
  },
  {
    title: 'Data Science & Analysis',
    emoji: '📊',
    blurb:
      'Results-driven data scientist uncovering meaningful insights from complex data sets and turning them into actionable strategies.',
    resume: 'files/Data scientist resume.pdf',
  },
  {
    title: 'Game Design & Testing',
    emoji: '🎮',
    blurb:
      'Experienced game developer creating immersive, engaging experiences that captivate players and push the boundaries of interactive entertainment.',
    resume: 'files/Game developer resume.pdf',
  },
]

// Skills with proficiency, grouped — combined from all seven sites
export const skillGroups = [
  {
    group: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    group: 'Backend & APIs',
    skills: [
      'FastAPI',
      'REST API design',
      'SQLite',
      'DuckDB',
      'Session authentication',
      'Access control',
      'Full-text search (FTS5)',
    ],
  },
  {
    group: 'Frontend',
    skills: [
      'React 19',
      'Vite',
      'Design tokens',
      'Accessible components',
      'WCAG 2.x AA',
      'Responsive layout',
    ],
  },
  {
    group: 'Data & machine learning',
    skills: [
      'pandas',
      'NumPy',
      'SciPy',
      'scikit-learn',
      'sentence-transformers',
      'Significance testing',
      'Matplotlib',
      'Seaborn',
      'Tableau',
    ],
  },
  {
    group: 'Testing',
    skills: [
      'pytest',
      'node:test',
      'Coverage',
      'Mutation testing',
      'Property-based testing',
      'CI matrices',
    ],
  },
  {
    group: 'Operations',
    skills: ['Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'Render', 'Lighthouse'],
  },
  {
    group: 'Games',
    skills: ['Unity', 'Game loops & state machines', 'Seeded RNG', 'Deterministic replay'],
  },
]

export const projects = [
  {
    title: 'Credit card fraud detection',
    emoji: '🕵️',
    field: 'Data Science & Analysis',
    description:
      '492 frauds in 284,807 transactions. A model flagging nothing scores 99.87% accuracy, so the threshold came from an explicit cost model instead — recovering $12,168 across a 48-hour holdout at 82% recall.',
    tech: ['Python', 'scikit-learn', 'FastAPI', 'Docker'],
    link: 'https://github.com/les-k/fraud-detection',
    color: 'coral',
  },
  {
    title: 'Job board',
    emoji: '🔐',
    field: 'Fullstack Development',
    description:
      '224 tests, 54 of them proving the wrong person cannot act. Deleting the ownership check made exactly three fail — everything else passed, including the whole happy path.',
    tech: ['FastAPI', 'React', 'SQLite', 'Docker'],
    link: 'https://github.com/les-k/job-board',
    pending: '2026-08-22T08:00:00Z',
    color: 'purple',
  },
  {
    title: 'Semantic search',
    emoji: '🔎',
    field: 'AI Engineering',
    description:
      'Six retrieval methods over 1,400 documents and 1,837 relevance judgments. Two of five claimed improvements failed a paired significance test — including one better on every average.',
    tech: ['Python', 'sentence-transformers', 'BM25'],
    link: 'https://github.com/les-k/semantic-search',
    color: 'teal',
  },
  {
    title: 'snip — URL shortener',
    emoji: '🔗',
    field: 'Fullstack Development',
    description:
      'Deployed and live. 134 tests at 95% coverage, CI across three operating systems and five Python versions, refusing redirects that reach private and cloud-metadata addresses.',
    tech: ['FastAPI', 'SQLite', 'Docker'],
    link: 'https://github.com/les-k/snip',
    color: 'yellow',
  },
  {
    title: 'Component library',
    emoji: '🎨',
    field: 'Web Design',
    description:
      'Nine accessible components where the build fails if accessibility does: 34 contrast pairings across both themes and 18 structural guards, all gating CI.',
    tech: ['React 19', 'Design tokens', 'WCAG AA'],
    link: 'https://github.com/les-k/component-library',
    pending: '2026-08-20T08:00:00Z',
    color: 'purple',
  },
  {
    title: 'Rafiki — Kiswahili voice assistant',
    emoji: '🗣️',
    field: 'AI Engineering',
    description:
      'A voice assistant whose entire command vocabulary is Kiswahili. Alexa supports 9 languages, Siri around 21, Google Assistant roughly 30 — none of them Swahili, for some 200 million speakers.',
    tech: ['Python', 'Speech recognition', 'Chrome extension'],
    link: 'https://github.com/les-k/Rafiki-Digital-assistant-AI',
    color: 'teal',
  },
  {
    title: 'Customer segmentation',
    emoji: '📊',
    field: 'Data Science & Analysis',
    description:
      'Clustering 8,068 customers in pandas and SQL, cross-checked to four decimals. The honest finding: the clusters did not reproduce the existing segmentation, and that is written up as a result.',
    tech: ['Python', 'scikit-learn', 'DuckDB', 'SQL'],
    link: 'https://github.com/les-k/customer-segmentation',
    color: 'yellow',
  },
  {
    title: '2048',
    emoji: '🎮',
    field: 'Game Design & Testing',
    description:
      'The tile game with the rules separated from the screen and covered by 75 tests. Every game seeded, so any board replays exactly and a bug report becomes a number.',
    tech: ['JavaScript', 'node:test', 'Zero dependencies'],
    link: 'https://github.com/les-k/2048',
    pending: '2026-08-18T08:00:00Z',
    color: 'coral',
  },
  {
    title: 'sweep',
    emoji: '🧹',
    field: 'Fullstack Development',
    description:
      'Reclaims disk space, deleting a directory only when a marker file on disk proves it can be regenerated. 75 tests, CI across three operating systems.',
    tech: ['Python', 'CLI', 'Zero dependencies'],
    link: 'https://github.com/les-k/sweep',
    color: 'teal',
  },
  {
    title: 'Product landing page',
    emoji: '⚡',
    field: 'Web Design',
    description:
      'Lighthouse 100 across all four categories at 22.6 KB, with a contrast check gating CI — after Lighthouse caught a failure the check had missed by measuring the wrong surface.',
    tech: ['HTML', 'CSS', 'Lighthouse 100'],
    link: 'https://github.com/les-k/sweep-landing',
    pending: '2026-08-16T08:00:00Z',
    color: 'yellow',
  },
  {
    title: 'Wine quality prediction',
    emoji: '🍷',
    field: 'Data Science & Analysis',
    description:
      '11% duplicate rows were leaking across the train/test split and inflating accuracy by 11 percentage points, with nothing in the metrics indicating a problem.',
    tech: ['Python', 'scikit-learn', 'Imbalanced data'],
    link: 'https://github.com/les-k/wine-quality',
    color: 'purple',
  },
]

export const experience = [
  {
    role: 'AI engineering',
    org: 'Python · scikit-learn · retrieval · evaluation',
    period: 'Since 2025',
    summary:
      'The newest of them, and the one with most of my attention. What pulled me in wasn’t the models — it was working out that they’re the easy half. Everything around them is where the work actually lives: the evaluation, the retrieval, the unglamorous business of proving something improved at all. A model can score beautifully and still be useless, and finding that out is the job.',
  },
  {
    role: 'Game design & testing',
    org: 'Unity · seeded RNG · deterministic replay',
    period: 'Since 2024',
    summary:
      'Came in through the testing door, which is an odd way into games. Game logic feels verified when you play it, and it isn’t — the bugs that matter are invisible while you play. So: randomness you can seed, sessions you can replay move for move, and rules kept far enough from the rendering that they can be checked without opening a browser at all.',
  },
  {
    role: 'Graduated',
    org: 'BSc Information Technology · second-class honours, upper division',
    period: 'Nov 2023',
    summary:
      'Machine learning, data science, artificial intelligence, database systems, software engineering, distributed systems, and programming fundamentals in Python, Java, C, C++ and JavaScript. By the time the certificate arrived, three of the five fields on this list were already underway — which is the honest order of things.',
  },
  {
    role: 'Data science & analysis',
    org: 'pandas · SQL · matplotlib · Tableau',
    period: 'Since 2023',
    summary:
      'Data went from something I’d met in coursework two years earlier to the thing I reach for first. pandas and SQL, exploratory analysis, cleaning sets that nobody had cleaned. One habit came out of it worth more than the rest: check the data before you trust the number that came out of it.',
  },
  {
    role: 'Front end and back end',
    org: 'React · FastAPI · SQLite · Docker · CI',
    period: 'Since 2022',
    summary:
      'Both in the same year, because a page with nothing behind it is a poster. React on one side; on the other, the parts that decide whether a thing survives contact with real users — authentication, access control, containers, and CI running on three operating systems so that “works on my machine” stops being an argument anyone can make.',
  },
  {
    role: 'Web design',
    org: 'HTML · CSS · responsive layout · accessibility',
    period: 'Since 2020',
    summary:
      'The discovery that making a page look like the one in my head is harder than it sounds. Learned HTML and CSS by rebuilding layouts until they behaved, and picked up what I still care about most — how it holds up on a phone, and whether someone on a keyboard or a screen reader can get through it at all.',
  },
  {
    role: 'Enrolled at Zetech University',
    org: 'BSc Information Technology',
    period: '2020',
    summary:
      'Campus, and the first time any of this had a syllabus attached to it. Same year I started building pages for myself — the two ran alongside each other for the whole degree, and the self-taught half usually got there first.',
  },
  {
    role: 'The first code I wrote on purpose',
    org: 'Computer studies, high school',
    period: '2018',
    summary:
      'Computer studies, and the first programs I wrote deliberately rather than by accident. Small things, and badly — but this is where the gap opened up between using a computer and instructing one, and it never closed again.',
  },
  {
    role: 'A six-year-old and a computer',
    org: 'Where all of it starts',
    period: '2007',
    summary:
      'Somebody let me near a computer and didn’t take it back. No plan and no course — just a machine that did exactly what it was told, and a kid who wanted to know why.',
  },
]

export const education = [
  {
    title: 'BSc in Information Technology',
    org: 'Zetech University',
    period: '2020 — Nov 2023 · Second-class honours, upper division',
    details:
      'Coursework: Machine Learning, Data Science, Artificial Intelligence, Database Systems, Software Engineering, Computer Networks, Distributed Systems, Operating Systems, Web Development, and Programming Fundamentals in Python, Java, C, C++ and JavaScript.',
  },
  {
    title: 'ICDL Profile',
    org: 'Computer Pride',
    period: 'Certified',
    details:
      'Computer Essentials, Cybersecurity, Online Collaboration (Google Suite), Online Essentials, Presentations, Spreadsheets, and Documents (Microsoft Office 2016).',
  },
]

export const certifications = [
  { org: 'Computer Pride', items: ['ICDL Profile'] },
]

// Words that scroll across the marquee strips — one per old site
export const marqueeWords = [
  'AI',
  'MACHINE LEARNING',
  'FRONTEND',
  'BACKEND',
  'WEB DEV',
  'SOFTWARE DEV',
  'DATA SCIENCE',
  'GAME DEV',
  'TESTING',
]
