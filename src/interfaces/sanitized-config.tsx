export interface SanitizedGithub {
  username: string;
}

export interface SanitizedSEO {
  title?: string;
  description?: string;
  imageURL?: string;
}

export interface SanitizedSocial {
  linkedin?: string;
  x?: string;
  mastodon?: string;
  researchGate?: string;
  facebook?: string;
  instagram?: string;
  reddit?: string;
  threads?: string;
  youtube?: string;
  udemy?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  dev?: string;
  stackoverflow?: string;
  website?: string;
  telegram?: string;
  phone?: string;
  email?: string;
  discord?: string;
}

export interface SanitizedResume {
  fileUrl?: string;
}

export interface SanitizedExperience {
  company?: string;
  position?: string;
  from: string;
  to: string;
  companyLink?: string;
}

export interface SanitizedEducation {
  institution?: string;
  degree?: string;
  from: string;
  to: string;
}

export interface SanitizedPublication {
  title: string;
  conferenceName?: string;
  journalName?: string;
  authors?: string;
  link?: string;
  description?: string;
}

export interface SanitizedGoogleAnalytics {
  id?: string;
}

export interface SanitizedHotjar {
  id?: string;
  snippetVersion: number;
}

export interface SanitizedThemeConfig {
  defaultTheme: string;
  disableSwitch: boolean;
  respectPrefersColorScheme: boolean;
  displayAvatarRing: boolean;
  themes: Array<string>;
}

export interface SanitizedConfig {
  github: SanitizedGithub;
  seo: SanitizedSEO;
  social: SanitizedSocial;
  resume: SanitizedResume;
  skills: Array<string>;
  experiences: Array<SanitizedExperience>;
  educations: Array<SanitizedEducation>;
  publications: Array<SanitizedPublication>;
  googleAnalytics: SanitizedGoogleAnalytics;
  hotjar: SanitizedHotjar;
  themeConfig: SanitizedThemeConfig;
  footer?: string;
  enablePWA: boolean;
}
