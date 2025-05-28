StartupEvents.registry('mekanism:gas', event => {

  event.create('gas.prismarine')
  .displayName('Gaseous Prismarine')
  .color(0x45debd)
  
  event.create('gas.fluorine')
  .displayName('Fluorine Gas')
  .color(0x0281a4)

  event.create('gas.hot_pcb_coolant')
  .displayName('Hot PCB Coolant')
  .color(0x646947)

  event.create('gas.plutonium_oxide')
  .displayName('Plutonium Oxide')
  .color(0x9c1717)

  event.create('gas.pure_biomass')
  .displayName('Gaseous Pure Biomass')
})

StartupEvents.registry('mekanism:infuse_type', event => {
  event.create('infuse.prismarine')
  .displayName('Prismarine')
  .tag('kubejs:prismarine')
  .color(0x078267)
})

StartupEvents.registry('mekanism:slurry', event => {
  event.create('slurry.impure_biomass')
  .texture('mekanism:slurry/dirty')
  .displayName('Impure Biomass')
  .color(0x589621)

  event.create('slurry.pure_biomass')
  .texture('mekanism:slurry/clean')
  .displayName('Pure Biomass')
  .color(0x589621)
})
