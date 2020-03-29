exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  const {data:{allMdx:{edges:posts}}} = await graphql(`
  {
    allMdx{
      edges{
        node{
          frontmatter{
            slug
          }
        }
      }
    }
  }
  `)
  posts.forEach(({node})=> {
    const {slug} = node.frontmatter
    createPage({path:slug, component:require.resolve('./src/templates/postTemplate.js'), context:{
      slug:slug,
    }})
  })
}