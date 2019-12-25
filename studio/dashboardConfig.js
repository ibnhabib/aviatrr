export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e03aba1569533a029c83e95',
                  title: 'Sanity Studio',
                  name: 'aviatrr-studio',
                  apiId: '0ccd759a-b8a7-48c3-9b88-0578761b8062'
                },
                {
                  buildHookId: '5e03aba1c739e9c91a41e268',
                  title: 'Blog Website',
                  name: 'aviatrr',
                  apiId: '034c25af-deaf-41d4-be06-7d5d5ded1e20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ibnhabib/aviatrr',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://aviatrr.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
