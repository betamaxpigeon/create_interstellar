StartupEvents.registry('block', event => {

event.create('block.rad_safe_casing')
.textureAll('kubejs:block/rad_safe_casing')
.displayName('Radiation-Safe Casing');

//event.create('block.parallel_fusion_casing_mk1')
//.displayName('Parallel Fusion Machine Casing Mk1');
})
BlockEvents.modification(event => {
  event.modify('#mekanism:factory', machine => {
    machine.blockBuilder.noCollision()
    machine.blockBuilder.box(0, 0, 0, 16, 16, 16)
  })
})
