// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ilegh7', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
  title: 'Iskander Legheraba | Optimization & Machine Learning',
  description:
    'Researcher in optimization and machine learning.',
  imageURL: 'https://raw.githubusercontent.com/ilegh7/ilegh7.github.io/main/public/profile.jpeg',
  },  
  social: {
    linkedin: 'iskander-legheraba',
    x: '', 
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://ilegh7.github.io/',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:'', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Optimization',
    'Machine Learning',
    'Numerical Optimization',
    'Scientific Computing',
    'Algorithm Design',
    'Mathematical Modeling',
    'Python',
    'PyTorch',
    'JAX',
    'Julia',
    'MATLAB',
  ]
  experiences: [
    {
      company: 'CNRS Occitanie Est (LPHI lab)',
      position: 'Postdoctoral Researcher',
      from: 'April 2026',
      to: 'Present',
      companyLink: 'https://lphi.umontpellier.fr/',
    },
    {
      company: 'Université Paris Dauphine – PSL',
      position: 'PhD Researcher and Lecturer',
      from: 'September 2020',
      to: 'August 2025',
      companyLink: 'https://dauphine.psl.eu/',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Université Paris Dauphine – PSL',
      degree: 'Ph.D. in Computer Science',
      from: '2020',
      to: '2025',
    },
    {
      institution: 'ENS Paris-Saclay',
      degree: 'Diploma',
      from: '2016',
      to: '2020',
    },
    {
      institution: 'ENS Paris-Saclay',
      degree: 'Master 2 MVA',
      from: '2019',
      to: '2020',
    },

  ],
  publications: [
    {
      title: 'Landscape and complexity for classes of nonconvex optimization problems',
      conferenceName: '',
      journalName: '',
      authors: 'Iskander Legheraba',
      link: 'https://theses.hal.science/tel-05375890',
      description:'Ph.D. thesis on nonconvex optimization, focusing on landscape analysis for structured matrix problems and complexity analysis of algorithms for nonlinear least-squares optimization.',
    },
    {
      title: 'Asymptotic convergence rates for averaging strategies',
      conferenceName: 'Foundations of Genetic Algorithms (FOGA 21) ',
      journalName: '',
      authors: 'Laurent Meunier, Iskander Legheraba, Yann Chevaleyre, Olivier Teytaud',
      link: 'https://dl.acm.org/doi/10.1145/3450218.3477302',
      description:
        'A paper in mathematical analysis of evolutionary algorithms. We prove that averaging the best parallel evaluations converges faster than random search for a broad class of smooth functions.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
  themes: [
    'corporate',
    'winter',
    'silk',
    'procyon',
    'business',
  ]  
  },
  // Optional Footer. Supports plain text or HTML.
  footer: `© Iskander Legheraba`,

  enablePWA: true,
};

export default CONFIG;
