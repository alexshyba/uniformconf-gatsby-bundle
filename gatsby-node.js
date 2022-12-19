exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allCompositions {
        compositions: edges {
          node {
            name
            slug
            state
            slots
            componentType
            parameters {
              _enr {
                type
                value {
                  cat
                  key
                  str
                }
              }
            }
            composition {
              _id
              _name
              _slug
              type
            }
          }
        }
      }
    }
  `)
  data.allCompositions.compositions.forEach(c => {
    const slug = c.node.slug
    console.log(`Creating a page "${slug}"...`)
    const composition = c.node.composition
    composition.slots = c.node.slots ? JSON.parse(c.node.slots) : {}
    composition.parameters = c.node.parameters
    console.log(c.node.parameters)
    actions.createPage({
      path: slug === "/" ? "/home" : slug,
      component: require.resolve(`./src/compositions/page.js`),
      context: { composition },
    })
  })
}
