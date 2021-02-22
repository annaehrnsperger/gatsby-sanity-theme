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
    createPage({
      ...page,
      path: `/${langCode}${page.path}`,
      context: {
        slug: page.path,
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

// multiple pages like blog posts
// exports.createPages = ({ actions: { createPage } }) => {
//   const page = {
//     path: 'some-page',
//     component: path.resolve(`./src/templates/some-page.js`),
//     context: {
//       slug: 'some-page-slug',
//     },
//   };
//   createLocalePage(page, createPage);
// };

// create all standard pages with localization
exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  deletePage(page);
  createLocalePage(page, createPage);
};
