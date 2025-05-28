const types = [
  'metallurgic_infuser',
  'combiner',
  'presicion_sawmill'
]
const machine = (type) => {
ServerEvents.tags('minecraft:block', event => {
  event.add('mekanism:machine', `mekanism:${type}`)
})
ServerEvents.tags('minecraft:item', event => {
  event.add('mekanism:machine', `mekanism:${type}`)
})
}
types.forEach(type => {
  machine(type)
})
