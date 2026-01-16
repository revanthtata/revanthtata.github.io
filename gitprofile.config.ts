// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'revanthtata',
  },
  base: '/',
  seo: { title: 'Portfolio of Revanth Tata', description: '', imageURL: '' },
  social: {
    linkedin: 'nagatata',
    // website: '',
    // phone: '',
    // email: '',
  },
  resume: {
    fileUrl:
      '',
  },
  skills: [
    'Cell culture', 'Western blot', 'Protein quantification', 'RT-PCR', 'MTT assay', 'Immunofluorescence', 'Clotting assays', 'Trans-well assay', 'Zeiss microscope', 'ImageJ', 'GraphPad Prism', 'BioRender'
  ],
  experiences: [
    {
      company: 'Subramaniam Laboratory, MCPHS University, Boston, MA',
      position: 'Researcher',
      from: 'November 2024',
      to: 'May 2026',
      companyLink: '',
    },
    {
      company: 'MCPHS University, Boston, MA',
      position: 'Resident Assistant',
      from: 'August 2024',
      to: 'May 2026',
      companyLink: '',
    },
    {
      company: 'MCPHS University, Boston, MA',
      position: 'Peer Tutor - Physics and Organic Chemistry I',
      from: 'January 2024',
      to: 'January 2025',
      companyLink: '',
    }
  ],
  educations: [
    {
      institution: 'Massachusetts College of Pharmacy and Health Sciences',
      degree: 'Bachelor of Science, Pharmacology and Toxicology',
      from: '2022',
      to: '2026',
      gpa: '3.83'
    },
  ],
  publications: [
    {
      title: 'Key therapeutic pathways in obesity: pharmacological insights',
      conferenceName: '',
      journalName: '',
      authors: 'Revanth Tata, Asha Jose, Saravanan Subramanaim',
      link: '',
      description:
        '',
    },
    {
      title: 'Distinct signaling dynamics of Thrombin-PAR and TLR9 pathways in endothelial inflammation',
      conferenceName: '',
      journalName: '',
      authors: 'Naila Mohiuddin, Yesha Shah, Revanth Tata, Lenka Kristinova, and Saravanan Subramaniam',
      link: '',
      description:
        '',
    },
  ],
  googleAnalytics: {id: ''},
  hotjar: { id: '', snippetVersion: 6},
  themeConfig: {
    defaultTheme: 'dim',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  footer: `Template provided by <a href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">arifszn</a>, licensed under the MIT license.<br>Favicon provided by <a href="https://www.svgrepo.com/svg/255173/coffee-steam" target="_blank" rel="noreferrer">SVGRepo</a>, licensed under CC0 license.`,

  enablePWA: true,
};

export default CONFIG;
