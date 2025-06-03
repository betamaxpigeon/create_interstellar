const random = (min, max) => {
  const range = max - min;
  return min + Math.floor(range * Math.random());
}

ServerEvents.recipes(event => {

event.remove({id:'mekanism_tfmg_compat:mekanismgenerators/recipes/fission_reactor/fuel_assembly'})
event.remove({id:'mekanism_tfmg_compat:mekanismgenerators/recipes/fission_reactor/control_rod_assembly'})
event.remove({id:'jaopca:gtceu.dust_to_material_implosion_tnt.prismarine'})
event.remove({id:'jaopca:mekanism.dust_to_material.prismarine'})
event.remove({id:'create:crafting/kinetics/wrench'})
event.remove({output: Fluid.of('gtceu:uranium_hexafluoride')})
event.remove({output: 'createaddition:biomass'})
event.remove({id: 'ad_astra:nasa_workbench'})
event.remove({type: 'immersiveengineering:arc_recycling'})
event.remove({type: 'tacz:gun_smith_table/emxarms_emx_workbench'})
event.remove({type: 'tacz:gun_smith_table/emxarms_sky_workbench'})

	let trans1 = 'kubejs:incomplete_control_rod_assembly'
	event.recipes.create.sequenced_assembly([
		Item.of('mekanismgenerators:control_rod_assembly').withChance(77.77),
		Item.of('mekanismgenerators:fission_fuel_assembly').withChance(2.22),
    Item.of('gtceu:micro_processor_computer').withChance(5),
    Item.of('mekanism:advanced_chemical_tank').withChance(7),
    Item.of('kubejs:block.rad_safe_casing').withChance(4),
    Item.of('gtceu:steel_tiny_fluid_pipe', random(1, 10)).withChance(4),
    Item.of('minecraft:air').withChance(0.01)
	], 'mekanismgenerators:fission_fuel_assembly', [
		event.recipes.createPressing(trans1, trans1),
		event.recipes.createDeploying(trans1, [trans1, 'mekanism:ultimate_control_circuit']),
		event.recipes.createFilling(trans1, [trans1, Fluid.of('mekanism:sodium', 100)]),
		event.recipes.createDeploying(trans1, [trans1, '#gtceu:circuits/ev']),
    event.recipes.createPressing(trans1, trans1),
		event.recipes.createDeploying(trans1, [trans1, '#gtceu:circuits/ev']),
	]).transitionalItem(trans1).loops(2)

	let trans2 = 'kubejs:incomplete'
	event.recipes.create.sequenced_assembly([
		Item.of('create:wrench')
	], '#minecraft:logs', [
    event.recipes.createDeploying(trans2, [trans2, 'create:cogwheel']),
    event.recipes.createDeploying(trans2, [trans2, 'create:large_cogwheel']),
    event.recipes.createDeploying(trans2, [trans2, '#forge:plates/brass']),
    event.recipes.createPressing(trans2, trans2)
	]).transitionalItem(trans2).loops()

event.recipes.thermal.centrifuge([Item.of('kubejs:item.high_grade_sand').withChance(0.7)], 'minecraft:sand')

event.shaped(
  Item.of('kubejs:block.rad_safe_casing'),
  [
    'PHP',
    'PFP',
    'PWP'
  ],
  {
    P:'#forge:plates/lead',
    H:'#forge:tools/hammers',
    F:'#forge:frames/lead',
    W:'#c:wrenches'
  })

event.recipes.gtceu.chemical_bath('plutonium244_dust')
  .itemInputs('4x gtceu:plutonium_241_dust')
  .inputFluids('gtceu:plutonium 1000')
  .itemOutputs('gtceu:small_plutonium244_dust')
  .duration(200)
  .EUt(1000000)

event.recipes.gtceu.assembler('fission_fuel_assembly')
  .itemInputs('4x #mekanism:alloys/atomic', 'kubejs:block.rad_safe_casing', '10x gtceu:steel_tiny_fluid_pipe', '2x mekanism:advanced_chemical_tank','#gtceu:circuits/ulv')
  .inputFluids('gtceu:soldering_alloy 576')
  .itemOutputs('mekanismgenerators:fission_fuel_assembly')
  .duration(300)
  .EUt(400)

event.recipes.gtceu.mixer('naquadrinium_dust')
  .itemInputs('2x gtceu:naquadria_dust', '3x gtceu:trinium_dust')
  .itemOutputs('5x gtceu:naquadrinium_dust')
  .duration(400)
  .EUt(524288)

event.recipes.gtceu.mixer('piglin_gold_dust')
  .itemInputs('10x #forge:dusts/gold', '2x #forge:dusts/naquadrinium')
  .inputFluids('gtceu:carbon_dioxide 5000')
  .itemOutputs('17x gtceu:piglin_gold_dust')
  .duration(800)
  .EUt(2097152)

event.recipes.gtceu.assembler('rad_safe_casing')
  .itemInputs('6x #forge:plates/lead', '#forge:frames/lead')
  .circuit(6)
  .itemOutputs('kubejs:block.rad_safe_casing')
  .duration(50)
  .EUt(16)

event.recipes.gtceu.extractor('1mb_liquid_prismarine')
  .itemInputs('#forge:dusts/prismarine')
  .outputFluids('gtceu:prismarine 1')
  .duration(20)
  .EUt(32)

event.recipes.gtceu.extractor('5mb_liquid_prismarine')
  .itemInputs('#mekanism:enriched/prismarine')
  .outputFluids('gtceu:prismarine 5')
  .duration(20)
  .EUt(32)

event.recipes.gtceu.fusion_reactor('pris_nt')
  .inputFluids('gtceu:prismarine 125', 'gtceu:neutronium 36')
  .outputFluids('gtceu:pris_nt 1')
  .fusionStartEU(640000000)
  .duration(40)
  .EUt(393216)

event.recipes.gtceu.fusion_reactor('tritonium')
  .inputFluids('gtceu:duotonium 2', 'gtceu:tritanium 3')
  .outputFluids('gtceu:tritonium 3')
  .fusionStartEU(640000000)
  .duration(100)
  .EUt(400000)

event.recipes.gtceu.fusion_reactor('duotonium')
  .inputFluids('gtceu:polonium210 1', 'gtceu:purest_plutonium 1')
  .outputFluids('gtceu:duotonium 2')
  .fusionStartEU(600000000)
  .duration(100)
  .EUt(400000)

event.shaped(
  Item.of('ad_astra:nasa_workbench'),
  [
    'RCR',
    'RAR',
    'PBP'
  ],
  {
    R:'gtceu:ev_robot_arm',
    C:'minecraft:crafting_table',
    A:'create:brass_casing',
    P:'#forge:plates/brass',
    B:'gtceu:ev_machine_casing'
  })

event.recipes.gtceu.autoclave('plutonium244_from_liquid')
  .itemInputs('#forge:dusts/mystery')
  .inputFluids('gtceu:plutonium244 144')
  .itemOutputs('1x gtceu:plutonium244_dust')


event.recipes.gtceu.cutter('steel_fibers_water')
  .itemInputs('#forge:plates/steel')
  .inputFluids('minecraft:water 3')
  .itemOutputs('9x kubejs:steel_fibers')
  .duration(20)
  .EUt(128)

event.recipes.gtceu.cutter('steel_fibers_distilled_water')
  .itemInputs('#forge:plates/steel')
  .inputFluids('gtceu:distilled_water 2')
  .itemOutputs('9x kubejs:steel_fibers')
  .duration(20)
  .EUt(128)

event.recipes.gtceu.cutter('steel_fibers_lubricant')
  .itemInputs('#forge:plates/steel')
  .inputFluids('gtceu:lubricant 1')
  .itemOutputs('9x kubejs:steel_fibers')
  .duration(20)
  .EUt(128);

event.recipes.gtceu.compressor('layered_steel_threads')
  .itemInputs('63x kubejs:steel_fibers')
  .itemOutputs('1x kubejs:layered_steel_threads')
  .duration(100)
  .EUt(128);

event.recipes.gtceu.electric_blast_furnace('rough_damascus_steel_ingot')
  .itemInputs('kubejs:layered_steel_threads')
  .itemOutputs('kubejs:rough_damascus_steel_ingot')
  .duration(200)
  .EUt(2048)
  .blastFurnaceTemp(1799);

event.shaped(
  Item.of('gtceu:damascus_steel_ingot'),
  [
    ' F ',
    'FDF',
    ' F '
  ],
  {
    F:'#forge:tools/files',
    D:'kubejs:rough_damascus_steel'
  }
)

//event.recipes.gtceu.space_freezing('test')
//  .itemInputs('1x minecraft:cobblestone')
//  .inputFluids('minecraft:water 1000')
//  .itemOutputs('1x minecraft:stone')
//  .outputFluids('minecraft:lava 1000')
//  .duration(20)
//  .EUt(2048);

event.custom({
  type: 'create:haunting',
  ingredients: [{tag: 'forge:gems/charcoal'}],
  results:[{item: 'minecraft:coal'}]
})

event.custom({
  type: 'create:haunting',
  ingredients: [{item: 'minecraft:blackstone'}],
  results:[{item: 'minecraft:netherrack'}]
})

event.custom({
  type: 'mekanism:rotary',
  fluidInput:{amount:1, fluid:'gtceu:fluorine'},
  fluidOutput:{amount:1, fluid:'gtceu:fluorine'},
  gasInput:{amount:1, gas:'kubejs:gas.fluorine'},
  gasOutput:{amount:1, gas:'kubejs:gas.fluorine'}
})

event.custom({
  type: 'mekanism:rotary',
  fluidInput:{amount:1, fluid:'gtceu:polonium210'},
  fluidOutput:{amount:1, fluid:'gtceu:polonium210'},
  gasInput:{amount:1, gas:'mekanism:polonium'},
  gasOutput:{amount:1, gas:'mekanism:polonium'}
})

event.custom({
  type: 'mekanism:rotary',
  fluidInput:{amount:1, fluid:'kubejs:fluid.plutonium_oxide'},
  fluidOutput:{amount:1, fluid:'kubejs:fluid.plutonium_oxide'},
  gasInput:{amount:1, gas:'kubejs:gas.plutonium_oxide'},
  gasOutput:{amount:1, gas:'kubejs:gas.plutonium_oxide'}
})

event.custom({
  type: 'mekanism:rotary',
  fluidInput:{amount:1, fluid:'gtceu:plutonium'},
  fluidOutput:{amount:1, fluid:'gtceu:plutonium'},
  gasInput:{amount:1, gas:'mekanism:plutonium'},
  gasOutput:{amount:1, gas:'mekanism:plutonium'}
})

event.custom({
  type: 'mekanism:crystallizing',
  chemicalType: 'gas',
  input:{amount:500, gas:'kubejs:gas.fluorine'},
  output:{item:'mekanism:fluorite_gem'}
})

event.custom({
  type: 'mekanism:infusion_conversion',
  input:{ingredient:{tag: 'mekanism:enriched/prismarine'}},
  output:{amount:5, infuse_type:'kubejs:infuse.prismarine'}
})

event.custom({
  type:'mekanism:infusion_conversion',
  input:{ingredient:{tag: 'forge:dusts/prismarine'}},
  output:{amount:1, infuse_type:'kubejs:infuse.prismarine'}
})

event.custom({
  type: 'mekanism:metallurgic_infusing',
  chemicalInput:{amount:500, tag:'kubejs:prismarine'},
  itemInput:{ingredient:{item:'gtceu:neutronium_ingot'}},
  output:{item:'gtceu:pris_nt_ingot'}
})

event.custom({
  type: 'mekanism:enriching',
  itemInput:{ingredient:{tag:'forge:dusts/prismarine'}},
  output:{item:'kubejs:item.enriched_prismarine'}
})

event.replaceInput(
  {id: 'gtceu:shaped/uxv_machine_hull'},
  'gtceu:neutronium_plate',
  'gtceu:tritonium_plate'
)

event.replaceInput(
  {id: 'gtceu:shaped/uxv_machine_hull'},
  'gtceu:europium_single_cable',
  'gtceu:trinium_single_cable'
)

event.replaceInput(
  {id: 'gtceu:shaped/uxv_machine_hull'},
  'gtceu:polybenzimidazole_plate',
  'gtceu:peek_plate'
)

event.recipes.gtceu.macerator('chorus_dust')
  .itemInputs('#forge:chorus')
  .itemOutputs('gtceu:chorus_dust')
  .EUt(64)
  .duration(40);

event.recipes.gtceu.electric_blast_furnace('red_granite_from_granite')
  .itemInputs('minecraft:granite')
  .itemOutputs('gtceu:red_granite')
  .blastFurnaceTemp(4999)
  .duration(20)
  .EUt(128);

event.recipes.create.mixing([Fluid.of('createimmersivetacz:nitropowder_fluid', 1500)], [Fluid.of('gtceu:nitration_mixture', 500), 'tfmg:nitrate_dust', 'tfmg:nitrate_dust'])

event.recipes.gtceu.assembler('cet_alloy_coil_block')
  .itemInputs('8x gtceu:cet_alloy_double_wire', '8x gtceu:tritanium_foil')
  .inputFluids('gtceu:tritonium 144')
  .itemOutputs('kubejs:cet_alloy_coil_block')
  .EUt(31457280)
  .duration(200);

//event.recipes.gtceu.research_station('uhv_motor')
//  .stationResearch('gt')

event.shaped(
  Item.of('gtceu:uhv_circuit_assembler'),
  [
    'RCE',
    'cMc',
    'WCW'
  ],
  {
    R:'gtceu:uhv_robot_arm',
    C:'#gtceu:circuits/uev',
    E:'gtceu:uhv_emitter',
    c:'gtceu:uhv_conveyer_module',
    M:'gtceu:uhv_machine_hull',
    W:'gtceu:europium_single_cable'
  })

event.custom({
  type:'mekanism:dissolution',
  gasInput:{
    amount:100,
    gas:'mekanism:hydrofluoric_acid'},
  itemInput:{
    amount:4,
    tag:'forge:fuels'},
  output:{
    amount:2000,
    slurry:'kubejs:slurry.impure_biomass'}
})

event.custom({
  type:'mekanism:chemical_infusing',
  leftInput:{
    amount:1,
    gas:'mekanism:hydrogen'},
  rightInput:{
    amount:1, 
    gas:'kubejs:gas.fluorine'},
  output:{
    amount:1,
    gas:'mekanism:hydrofluoric_acid'}
})

event.custom({
  type:'mekanism:separating',
  input:{
    amount:1,
    tag:'forge:hydrofluoric_acid'},
  leftGasOutput:{
    amount:1,
    gas:'mekanism:hydrogen'},
  rightGasOutput:{
    amount:1,
    gas:'kubejs:gas.fluorine'}
})

event.custom({
  type: 'mekanism:activating',
  inputFluids:{amount:1, fluid:'kubejs:fluid.impure_bio_slurry'},
  gasOutput:{amount:1, gas:'kubeks:gas.pure_bio_slurry'}
})

event.custom({
  type:'mekanism:separating',
  input:{
    amount:200,
    fluid:'kubejs:fluid.impure_bio_slurry'},
  leftGasOutput:{
    amount:10,
    gas:'mekanism:hydrofluoric_acid'},
  rightGasOutput:{
    amount:100,
    gas:'kubejs:gas.pure_biomass'}
})

event.custom({
  type:'mekanism:fluid_coolant',
  input:{
    fluid:'gtceu:pcb_coolant',
    amount:1},
  output:{
    id:'kubejs:gas.hot_pcb_coolant',
    amount:1},
thermalEnthalpy:1,
conductivity:50,
efficiency:10
})

event.shaped(
  Item.of('gtceu:uev_machine_casing'),
  [
    'PPP',
    'PWP',
    'PPP'
  ],
  {
    P:'gtceu:pris_nt_plate',
    W:'#c:wrenches'
})

event.custom({
  type: 'mekanism:fission',
  input: {
    chemical: 'mekanism:uranium_oxide',
    amount:50},
  output: {
    id: 'kubejs:gas.plutonium_oxide',
    amount:1},
  heat:2
})
})
