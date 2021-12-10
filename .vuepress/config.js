module.exports = {

  description: 'This is your page description.',
  themeConfig: {
    // logo: '/vuepress-logo.png',
    // lastUpdated: 'Last updated',
    // docsDir: 'docs',
    // editLinks: true,
    // editLinkText: 'Recommend a change',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Basic Page',
        link: '/basic/'
      },
      {
        text: 'Section',
        items: [
          {
            text: 'Section Introduction',
            link: '/section/#section-introduction'
          },
          {
            text: 'dogg Content!',
            link: '/section/#some-more-content'
          }
        ]
      },
      {
        text: 'Contact',
        items: [
          {

          },
          {
            text: 'Email',
            link: 'mailto:hello@email.com'
          }
        ]
      },
      {
        text: 'Component Example',
        link: '/component-example'
      }
    ],
    plugins: ['@vuepress/active-header-links']
  }
}
