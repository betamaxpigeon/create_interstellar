const types = [
  'enriching',
  'smelting',
  'injecting',
  'infusing',
  'combining',
  'compressing',
  'crushing',
  'purifying',
  'sawing'
]
const factory = (type) => {
  ServerEvents.tags('minecraft:block', event => {
    event.add('mekanism:factory', `basic_${type}_factory`)
    event.add('mekanism:factory', `advanced_${type}_factory`)
    event.add('mekanism:factory', `elite_${type}_factory`)
    event.add('mekanism:factory', `ultimate_${type}_factory`)
    event.add('mekanism:machine', `basic_${type}_factory`)
    event.add('mekanism:machine', `advanced_${type}_factory`)
    event.add('mekanism:machine', `elite_${type}_factory`)
    event.add('mekanism:machine', `ultimate_${type}_factory`)
  })
  ServerEvents.tags('minecraft:item', event => {
    event.add('mekanism:factory', `basic_${type}_factory`)
    event.add('mekanism:factory', `advanced_${type}_factory`)
    event.add('mekanism:factory', `elite_${type}_factory`)
    event.add('mekanism:factory', `ultimate_${type}_factory`)
    event.add('mekanism:machine', `basic_${type}_factory`)
    event.add('mekanism:machine', `advanced_${type}_factory`)
    event.add('mekanism:machine', `elite_${type}_factory`)
    event.add('mekanism:machine', `ultimate_${type}_factory`)
  })
}
types.forEach(tier => {
  factory(tier)})
