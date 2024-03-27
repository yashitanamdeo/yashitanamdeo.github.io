module.exports = {
  siteTitle: 'Abraham Paul',
  siteDescription:
    'Abraham Paul is a Software Engineer, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Abraham Paul, Abraham, Paul, zeusmadeit, ZeusMadeIt, zmi, ZMI, software engineer, web developer, c, c++, javascript, python, rust, alx, ALX',
  siteUrl: 'https://zeusmadeit.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Abraham Paul',
  location: 'Abuja, Nigeria',
  email: 'codexapp44@gmail.com',
  github: 'https://github.com/zeusmadeit',
  twitterHandle: '@I_AM_ZMI',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/zeusmadeit',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yashitanamdeo/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/i.am.zmi',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/I_AM_ZMI',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
