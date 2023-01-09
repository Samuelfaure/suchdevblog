import { defaultTheme } from 'vuepress'

export default {
  title: 'Such Dev Blog',
  description: 'Much code, very webdev.',
  langs: [
    {lang: 'en', label: 'English', path: '/', selectText: 'Languages'},
  ],
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
  ],
  theme: defaultTheme({
    navbar: [
      {text: 'Who am I ?', link: '/WhoAmI'}
    ],
    sidebarDepth: 1,
    sidebar: [
      '/Summary.md',
      '/WhoAmI',
      '/Portfolio',
      {
        text: 'Resources',
        children: [
          '/resources/BeginnersResources',
          '/resources/IntermediateResources',
          '/resources/DesignResources'
        ]
      },
      {
        text: 'Lessons',
        children: [
          '/lessons/HowToStartCSS.md',
          '/lessons/HowToLearnGit.md',
          '/lessons/ExplainingRubySingletonClass.md'
        ]
      },
      {
        text: 'Opinions',
        children: [
          '/opinions/WhyOurWorkCultureSucks',
          '/opinions/TechnicalDebtKitchen',
          '/opinions/MarieKondo'
        ]
      },
      {
        text: 'Tutorials',
        children: [
          '/guides/BuildYourOwnSystem',
          '/guides/TestingAnsibleScriptsWithVagrant',
          '/guides/HowToUseSolrWithRails',
          '/guides/DebuggingSolrSunspot',
          '/guides/UploadFilesFromVueToRails',
          '/guides/TestAllYourRoutesInRails.md'
        ]
      }
    ]
  })
}
