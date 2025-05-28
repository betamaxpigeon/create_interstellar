
const add = (type, registry) => {
  RecipeViewerEvents.addEntries(type, event => {
    event.add(registry)
  })
}
['create:chromatic_compound', 'create:shadow_steel', 'create:refined_radiance'].forEach(item => {
  add('minecraft:item', item)
})
