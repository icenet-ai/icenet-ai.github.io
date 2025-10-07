import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Sections',
      links: [
        {
          text: 'Main',
          href: getPermalink('/#top'),
        },
        {
          text: 'About',
          href: getPermalink('/#about-us'),
        },
        {
          text: 'Repos',
          href: getPermalink('/#repositories'),
        },
        {
          text: 'Team',
          href: getPermalink('/#team-members'),
        },
        {
          text: 'Contact',
          href: getPermalink('/#contact-us'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'All',
          href: getBlogPermalink(),
        },
        {
          text: 'Welcome!',
          href: getPermalink('jan25-welcome-blog', 'post'),
        },
        // {
        //   text: 'Article (with MDX)',
        //   href: getPermalink('markdown-elements-demo-post', 'post'),
        // },
        // {
        //   text: 'News & Impact',
        //   href: getPermalink('news', 'category'),
        // },
        // {
        //   text: 'Tutorials',
        //   href: getPermalink('tutorials', 'category'),
        // },
        // {
        //   text: 'Releases',
        //   href: getPermalink('releases', 'category'),
        // },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
      ],
    },
  ],
  actions: [{ text: 'Documentation', href: '/docs/', target: '_blank' }],
};

export const footerData = {
  links: [
    // {
    //   title: 'GitHub Links',
    //   links: [
    //     { text: 'icenet', href: 'https://github.com/icenet-ai/icenet' },
    //     { text: 'icenet-notebooks', href: 'https://github.com/icenet-ai/icenet-notebooks' },
    //     { text: 'icenet-pipeline', href: 'https://github.com/icenet-ai/icenet-pipeline' },
    //     { text: 'icenet-sipn-south', href: 'https://github.com/icenet-ai/icenet-sipn-south' },
    //     { text: 'icenet-etl', href: 'https://github.com/icenet-ai/icenet-etl' },
    //     { text: 'icenet-application', href: 'https://github.com/icenet-ai/icenet-application' },
    //     { text: 'icenet-roadmap', href: 'https://github.com/icenet-ai/icenet' },
    //     { text: 'icenet-geoapi', href: 'https://github.com/icenet-ai/icenet-geoapi' },
    //   ],
    // },
    {
      title: 'Support',
      links: [
        { text: 'Documentation', href: '/docs' },
        { text: 'Code of conduct', href: '/code-of-conduct' },
        { text: 'Privacy policy', href: '/privacy' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/icenet_ai' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/icenet-ai' },
  ],
  footNote: '',
};
