StartupEvents.registry('block', event => {

event.create('cet_alloy_coil_block', 'gtceu:coil')
.temperature(15000)
.level(24)
.energyDiscount(16)
.tier(10)
.coilMaterial(() => GTMaterials.get('cet_alloy'))
.hardness(5)
.soundType('metal')
.requiresTool(true);

/*
event.create('coil2', 'gtceu:coil')
.temperature(9000)
.level(20)
.energyDiscount(16)
.tier(8)
.coilMaterial(() =>GTMaterials.get('lutetium'))
.hardness(5)
.soundType('metal')
.requiresTool(true);
*/

event.create('trinaquadalloy_coil_block', 'gtceu:coil')
.temperature(50000)
.level(50)
.energyDiscount(100)
.tier(25)
.coilMaterial(() => GTMaterials.get('trinaquadalloy'))
.hardness(10)
.soundType('metal')
.requiresTool(true);

event.create('block.rad_safe_casing')
.textureAll('kubejs:block/rad_safe_casing')
.displayName('Radiation-Safe Casing');

//event.create('block.parallel_fusion_casing_mk1')
//.displayName('Parallel Fusion Machine Casing Mk1');
})
BlockEvents.modification(event => {
  event.modify('#mekanism:machine', machine => {
    machine.blockBuilder.noCollision()
    machine.blockBuilder.box(0, 0, 0, 16, 16, 16)
  })
})
