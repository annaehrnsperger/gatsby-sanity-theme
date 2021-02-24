const path = require(`path`);

// exports.createPages = async ({ actions, graphql }) => {
//   const result = await graphql(`
//     query Slug {
//       post: allSanityJournalPost {
//         nodes {
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);

//   const { nodes } = result.data.post;

//   nodes.forEach((post, i) => {
//     actions.createPage({
//       path: `/journal/${post.slug.current}`,
//       component: path.resolve(`./src/templates/post.js`),
//       context: {
//         slug: post.slug.current,
//         next:
//         i === posts.length - 1
//           ? posts[0].slug.current
//           : posts[i + 1].slug.current,
//       },
//     });
//   });
// };

const extraLanguages = ['de'];

const createLocalePage = (page, createPage) => {
  const { context, ...rest } = page;

  createPage({
    ...rest,
    context: {
      ...context,
      locale: process.env.LOCALE,
    },
  });

  extraLanguages.forEach((langCode) => {
    // eslint-disable-next-line no-shadow
    const { path, context, ...rest } = page;

    createPage({
      ...rest,
      path: `/${langCode}${page.path}`,
      context: {
        ...context,
        locale: langCode,
      },
    });
  });
};

// specific page
exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/projects/`,
    component: path.resolve(`./src/templates/projects.js`),
  });

  extraLanguages.forEach((langCode) => {
    createPage({
      path: `/${langCode}/${langCode === 'de' && 'projekte/'}`,
      component: path.resolve(`./src/templates/projects.js`),
    });
  });
};

// blog posts and projects
// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const result = await graphql(`
//     query Slug {
//       post: allSanityBlogPost {
//         nodes {
//           slug {
//             current
//           }
//         }
//       }
//       project: allSanityProject {
//         nodes {
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);

//   const posts = result.data.post.nodes;
//   const projects = result.data.project.nodes;

//   posts.forEach((post, i) => {
//     createLocalePage(
//       {
//         path: `/blog/${post.slug.current}`,
//         component: path.resolve(`./src/templates/post.js`),
//         context: {
//           slug: post.slug.current,
//           next:
//             i === posts.length - 1
//               ? posts[0].slug.current
//               : posts[i + 1].slug.current,
//           prev:
//             i === 0
//               ? posts[posts.length - 1].slug.current
//               : posts[i - 1].slug.current,
//         },
//       },
//       createPage
//     );
//   });

//   projects.forEach((project, i) => {
//     createLocalePage(
//       {
//         path: `/projects/${project.slug.current}`,
//         component: path.resolve(`./src/templates/project.js`),
//         context: {
//           slug: project.slug.current,
//           next:
//             i === projects.length - 1
//               ? projects[0].slug.current
//               : projects[i + 1].slug.current,
//         },
//       },
//       createPage
//     );
//   });
// };

// create all standard pages with localization
exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  deletePage(page);
  createLocalePage(page, createPage);
};
