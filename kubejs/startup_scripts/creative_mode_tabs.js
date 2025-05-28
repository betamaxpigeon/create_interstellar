const addItem = (tab, item) => {
  StartupEvents.modifyCreativeTab(tab, event => {
    event.add(item)
  })
}
['create:chromatic_compound', 'create:shadow_steel', 'create:refined_radiance'].forEach(item => {
  addItem('create:base', item)
})
