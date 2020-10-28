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
      {
        title: 'Resources',
        children: [
          '/resources/BeginnersResources',
          '/resources/IntermediateResources',
          '/resources/DesignResources'
        ]
      },
      {
        title: 'Lessons',
        children: [
          '/lessons/HowToStartCSS.md',
          '/lessons/ExplainingRubySingletonClass.md'
        ]
      },
      {
        title: 'Demos',
        children: [
          '/demos/SuperDuperEightQueens',
        ]
      },
      {
        title: 'Guides',
        children: [
          '/guides/BuildYourOwnSystem',
          '/guides/TestingAnsibleScriptsWithVagrant',
          '/guides/HowToUseSolrWithRails',
          '/guides/DebuggingSolrSunspot',
          '/guides/UploadFilesFromVueToRails',
          '/TestAllYourRoutesInRails.md'
        ]
      }
    ]
  }
}
