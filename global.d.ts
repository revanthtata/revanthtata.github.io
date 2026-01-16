interface Github {
  username: string;
}

interface SEO {
  title?: string;
  description?: string;
  imageURL?: string;
}

interface Social {
  linkedin?: string;
  website?: string;
  phone?: string;
  email?: string;
}

interface Resume {
  fileUrl?: string;
}

interface Experience {
  company?: string;
  position?: string;
  from: string;
  to: string;
  companyLink?: string;
}

interface Education {
  institution?: string;
  degree?: string;
  from: string;
  to: string;
}

interface Publication {
  title: string;
  conferenceName?: string;
  journalName?: string;
  authors?: string;
  link?: string;
  description?: string;
}

interface GoogleAnalytics {
  id?: string;
}

interface Hotjar {
  id?: string;
  snippetVersion?: number;
}

interface ThemeConfig {
  defaultTheme?: string;
  disableSwitch?: boolean;
  respectPrefersColorScheme?: boolean;
  displayAvatarRing?: boolean;
  themes?: Array<string>;
}

interface Config {
  github: Github;

  base?: string;

  seo?: SEO;

  social?: Social;

  skills?: Array<string>;

  experiences?: Array<Experience>;

  educations?: Array<Education>;

  publications?: Array<Publication>;

  resume?: Resume;

  googleAnalytics?: GoogleAnalytics;

  hotjar?: Hotjar;

  themeConfig?: ThemeConfig;

  footer?: string;

  enablePWA?: boolean;
}

declare const CONFIG: Config;
