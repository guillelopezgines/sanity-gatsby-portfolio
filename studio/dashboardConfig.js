export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6155d8d53790455e61fcf551',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-u4ao9vqq',
                  apiId: '9d1e4fc1-9925-4a2f-8475-ba512d505b5d'
                },
                {
                  buildHookId: '6155d8d537904560effcf558',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-i6t3jgm7',
                  apiId: 'd6729234-099a-43e1-9878-b308d7ac4bf4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guillelopezgines/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-i6t3jgm7.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
