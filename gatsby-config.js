const technologies = ['Reason', 'Elm', 'React', 'Node', 'Elixir', 'JS']

module.exports = {
  siteMetadata: {
    title: 'Arnošt Pleskot / web developer /',
    description: technologies.join(', ').concat('...'),
    keywords: technologies.join(', '),
    author: 'Arnošt Pleskot <me@pleskot.net>',
    technologies,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato\:300`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/favicon.png',
        appName: 'Arnošt Pleskot / web developer /',
        appDescription: '/ reason / elm / react / node / elixir / js /',
        developerName: 'Arnošt Pleskot <me@pleskot.net>',
        developerURL: 'https://pleskot.net',
        dir: 'auto',
        lang: 'en-US',
        theme_color: '#848484',
        display: 'standalone',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-34658474-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
