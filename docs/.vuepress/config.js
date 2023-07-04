import { defaultTheme } from 'vuepress'

export default {
  title: 'Such Dev Blog',
  description: 'Much code, very webdev.',
  langs: [
    {lang: 'en', label: 'English', path: '/', selectText: 'Languages'},
  ],
  head: [
    ['link', {rel: 'apple-touch-icon', href: '/apple-touch-icon.png', size: '180x180'}],
    ['link', {rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', size: '32x32'}],
    ['link', {rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', size: '16x16'}],
    ['link', {rel: 'manifest', href: '/site.webmanifest'}],
    ['meta', {name: 'msapplication-TileColor', content: '#da532c'}],
    ['meta', {name: 'theme-color', content: '#ffffff'}],
  ],
  theme: defaultTheme({
    navbar: [
      {text: 'Who am I ?', link: '/WhoAmI'},
      {text: 'Portfolio', link: '/Portfolio'},
      {text: 'Resources', link: '/resources/BeginnersResources'},
      {text: 'Lessons', link: '/lessons/ProductivityAndWellBeing'},
      {text: 'Opinions', link: '/opinions/WhyOurWorkCultureSucks'},
      {text: 'Tutorials', link: '/tutorials/BuildYourOwnSystem'}
    ],
    sidebarDepth: 1,
    sidebar: [
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
          '/lessons/ProductivityAndWellBeing.md',
          '/lessons/HowToStartCSS.md',
          '/lessons/HowToLearnGit.md',
          '/lessons/AtomicGitCommits.md',
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
          '/tutorials/BuildYourOwnSystem',
          '/tutorials/TestingAnsibleScriptsWithVagrant',
          '/tutorials/HowToUseSolrWithRails',
          '/tutorials/FilterAnythingInRails',
          '/tutorials/DebuggingSolrSunspot',
          '/tutorials/UploadFilesFromVueToRails',
          '/tutorials/TestAllYourRoutesInRails.md'
        ]
      }
    ]
  })
}
