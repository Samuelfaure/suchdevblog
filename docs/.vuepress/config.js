import { defaultTheme } from 'vuepress'

export default {
  title: 'Such Dev Blog',
  description: 'Much code, very webdev.',
  langs: [
    {lang: 'en', label: 'English', path: '/', selectText: 'Languages'},
  ],
  head: [
    ['link', {rel: 'apple-touch-icon', href: '/apple-touch-icon.webp', size: '180x180'}],
    ['link', {rel: 'icon', type: 'image.webp', href: '/favicon-32x32.webp', size: '32x32'}],
    ['link', {rel: 'icon', type: 'image.webp', href: '/favicon-16x16.webp', size: '16x16'}],
    ['link', {rel: 'manifest', href: '/site.webmanifest'}],
    ['meta', {name: 'msapplication-TileColor', content: '#da532c'}],
    ['meta', {name: 'theme-color', content: '#ffffff'}],
  ],
  theme: defaultTheme({
    navbar: [
      {text: 'Who am I ?', link: '/WhoAmI'},
      {text: 'Portfolio', link: '/Portfolio'},
      {text: 'Resources', link: '/resources'},
      {text: 'Lessons', link: '/lessons'},
      {text: 'Opinions', link: '/opinions'},
      {text: 'Tutorials', link: '/tutorials'}
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
          '/resources/SeniorResources',
          '/resources/DesignResources'
        ]
      },
      {
        text: 'Lessons',
        children: [
          '/lessons/ProductivityAndWellBeing.md',
          '/lessons/AtomicGitCommits.md',
          '/lessons/HowToLearnGit.md',
          '/lessons/HowToStartCSS.md',
          '/lessons/ExplainingRubySingletonClass.md'
        ]
      },
      {
        text: 'Opinions',
        children: [
          '/opinions/TechnicalDebtKitchen',
          '/opinions/WhyOurWorkCultureSucks',
          '/opinions/MarieKondo'
        ]
      },
      {
        text: 'Tutorials',
        children: [
          '/tutorials/BuildYourOwnSystem',
          '/tutorials/UploadFilesFromVueToRails',
          '/tutorials/FilterAnythingInRails',
          '/tutorials/TestAllYourRoutesInRails.md',
          '/tutorials/TestingAnsibleScriptsWithVagrant',
          '/tutorials/HowToUseSolrWithRails',
          '/tutorials/DebuggingSolrSunspot'
        ]
      }
    ]
  })
}
