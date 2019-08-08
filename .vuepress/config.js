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
      '/Portfolio',
      '/BeginnersResources',
      '/IntermediateResources',
      '/DesignResources',
      '/HowToStartCSS',
      '/SuperDuperEightQueens',
      '/TestingAnsibleScriptsWithVagrant',
      '/HowToUseSolrWithRails',
      '/DebuggingSolrSunspot',
      '/UploadFilesFromVueToRails',
      '/FilterAnythingInRails.md'
    ]
  }
}
