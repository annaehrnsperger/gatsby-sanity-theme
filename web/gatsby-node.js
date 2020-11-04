import path from 'path';

async function projectPage({ graphql, actions }) {
  const projectTemplate = path.resolve('./src/templates/project.js');
  const { data } = await graphql(`
    query Slug {
      projects: allSanityProject {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.projects.nodes.forEach((project) => {
    actions.createPage({
      path: `projects/${project.slug.current}`,
      component: projectTemplate,
      // Data passed to context is available in page queries
      // as GraphQL variables.
      context: {
        slug: project.slug.current,
      },
    });
  });
}

// async function secondPage({ graphql, actions }) {
//   const projectTemplate = path.resolve('./src/templates/project.js');
//   const { data } = await graphql(`
//     query Slug {
//       projects: allSanityProject {
//         nodes {
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);

//   data.projects.nodes.forEach((project) => {
//     actions.createPage({
//       path: `projects/${project.slug.current}`,
//       component: projectTemplate,
//       // Data passed to context is available in page queries
//       // as GraphQL variables.
//       context: {
//         slug: project.slug.current,
//       },
//     });
//   });
// }

export async function createPages(params) {
  await Promise.all([
    projectPage(params),
    // secondPage(params)
  ]);
}
