module.exports = {
  title: 'Such Dev Blog',
  description: 'Much code, very webdev.',
  langs: [
    { lang: 'en', label: 'English', path: '/', selectText: 'Languages' },
  ],
  themeConfig: {
    nav: [
      { text: 'Who am I ?', link: '/WhoAmI' }
    ],
    sidebar: [
      '/Summary',
      '/WhoAmI',
      '/TestingAnsibleScriptsWithVagrant.md',
      '/HowToUseSolrWithRails.md'
    ]
  }
}