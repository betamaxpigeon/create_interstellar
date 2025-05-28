ServerEvents.recipes(event => {
  event.remove({id: 'mekanism:induction/provider/basic'})
  event.remove({id: 'mekanism:induction/provider/advanced'})
  event.remove({id: 'mekanism:induction/provider/elite'})
  event.remove({id: 'mekanism:induction/provider/ultimate'})
  event.remove({id: 'mekanism:induction/cell/basic'})
  event.remove({id: 'mekanism:induction/cell/advanced'})
  event.remove({id: 'mekanism:induction/cell/elite'})
  event.remove({id: 'mekanism:induction/cell/ultimate'})

  let trans3 = 'kubejs:incomplete'
	event.recipes.create.sequenced_assembly([
		Item.of('mekanism:ultimate_induction_provider')
	], 'mekanism:ultimate_energy_cube', [
    event.recipes.createDeploying(trans3, [trans3, 'mekanism:elite_induction_provider']),
    event.recipes.createDeploying(trans3, [trans3, 'mekanism:ultimate_control_circuit'])
	]).transitionalItem(trans3).loops(4)

	let trans4 = 'kubejs:incomplete'
	event.recipes.create.sequenced_assembly([
		Item.of('mekanism:elite_induction_provider')
	], 'mekanism:elite_energy_cube', [
    event.recipes.createDeploying(trans4, [trans4, 'mekanism:advanced_induction_provider']),
    event.recipes.createDeploying(trans4, [trans4, 'mekanism:elite_control_circuit'])
	]).transitionalItem(trans4).loops(4)

  let trans5 = 'kubejs:incomplete'
	event.recipes.create.sequenced_assembly([
		Item.of('mekanism:advanced_induction_provider')
	], 'mekanism:advanced_energy_cube', [
    event.recipes.createDeploying(trans5, [trans5, 'mekanism:basic_induction_provider']),
    event.recipes.createDeploying(trans5, [trans5, 'mekanism:advanced_control_circuit'])
	]).transitionalItem(trans5).loops(4)

  let trans6 = 'kubejs:incomplete'
	event.recipes.create.sequenced_assembly([
		Item.of('mekanism:basic_induction_provider')
	], 'mekanism:basic_energy_cube', [
    event.recipes.createDeploying(trans6, [trans6, 'mekanism:basic_control_circuit']),
    event.recipes.createDeploying(trans6, [trans6, 'mekanism:dust_lithium'])
	]).transitionalItem(trans6).loops(4)
})
