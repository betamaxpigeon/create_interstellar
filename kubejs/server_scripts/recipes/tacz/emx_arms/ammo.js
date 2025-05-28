ServerEvents.recipes(event => {
  let x = 'kubejs:incomplete'

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', {AmmoId:'emxarms:402x31rip'}, 60)
  ], '#forge:gems/amethyst', [
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(1)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', {AmmoId:'emxarms:emx_tediore'}, 30)
  ], '#forge:glass', [
    event.recipes.createDeploying(x, [x, '#forge:ingots/clay']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/clay']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(1)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', {AmmoId:'emxarms:1045x103'}, 36)
  ], '#forge:storage_blocks/iron', [
    event.recipes.createDeploying(x, [x, '#forge:gems/coal']),
    event.recipes.createDeploying(x, [x, '#forge:gems/coal']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(3)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', {AmmoId:'emxarms:336x57fmj'}, 30)
  ], '#forge:gems/amethyst', [
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(1)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', {AmmoId:'emxarms:1045x103belt'}, 10)
  ], '#forge:gems/coal', [
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(1)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', {AmmoId:'410x57ap'}, 16)
  ], '#forge:double_plates/iron', [
    event.recipes.createDeploying(x, [x, '#forge:gems/coal']),
    event.recipes.createDeploying(x, [x, '#forge:gems/coal']),
    event.recipes.createDeploying(x, [x, '#forge:gems/coal']),
    event.recipes.createDeploying(x, [x, '#forge:gems/coal']),
    event.recipes.createDeploying(x, [x, '#forge:gems/coal']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(1)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', {AmmoId:'339x57x'}, 60)
  ], '#forge:ingots/netherite', [
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:rods/blaze']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(1)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', '{AmmoId:"emx_rem"}', 10)
  ], '#forge:gems/nether_star', [
    event.recipes.createDeploying(x, [x, '#forge:ingots/netherite']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/netherite']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(1)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', '{AmmoId:"emxarms:402x31fmj"}', 30)
  ], '#forge:gems/amethyst', [
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(2)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', '{AmmoId:"emxarms:402x31"}', 45)
  ], '#forge:gems/coal', [
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(1)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', '{AmmoId:"emxarms:x16he"}', 40)
  ], '#forge:gems/coke', [
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(1)

  event.recipes.create.sequenced_assembly([
    Item.of('tacz:ammo', '{AmmoId:"emxarms:x16he"}', 40)
  ], '#forge:nuggets/iron', [
    event.recipes.createDeploying(x, [x, '#forge:ingots/iron']),
    event.recipes.createDeploying(x, [x, '#forge:gems/coal']),
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x).loops(2)
})


