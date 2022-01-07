module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `Olá, meu nome é: Leonardo Camargo. Minha entrada no universo do desenvolvimento WEB, se deu em razão da necessidade de criar um blog e compartilhar conhecimento com as pessoas. Eu iniciei com o Gerenciador de Conteúdo Wordpress, na época não entendia as tecnologias de desenvolvimento WEB. Apesar disso, ainda consegui criar um blog gratuito, porém comecei a estudar para conseguir melhorar alguns aspectos do blog. Acontece que me apaixonei por esse universo. Certo dia tomei uma decisão que mudou completamente minha vida. Disse: “Eu vou me tornar um desenvolvedor WEB e contribuir positivamente à vida de cada um com meus projetos”. A partir de então, tenho buscado conhecimento de todas as formas, por meio de: livros, vídeos, áudios, artigos na internet, cursos, etc. A meta é tornar-me o melhor desenvolvedor, isso mesmo, a melhor versão de mim mesmo a cada dia.`,
      habilities: [
        "React JS",
        "JS vanilla",
        "CSS(Sass, Styled Components)",
        "Gatsby JS",
        "Node JS",
        "Git",
        "Design responsivo",
        "HTML",
        "Figma",
        "Bancos relacionais(Postgresql)",
        "Mongodb",
      ],
      contacts: ["LinkedIn", "E-mail", "Instagram", "Github"],
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `kylemathews`,
      twitterLink: "https://twitter.com/explore",
      facebookLink: "https://www.facebook.com/",
      youtubeLink: "https://www.youtube.com/",
      linkedinLink: "https://www.linkedin.com/",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`, `description`, `date`, `html`],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            description: node => node.frontmatter.description,
            date: node => node.frontmatter.date,
            path: node => node.fields.slug,
            html: node => node.internal.content,
          },
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         subsets: [`latin`],
    //       },
    //       {
    //         family: `Roboto`,
    //         variants: [`300`, `500`, `700`],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
