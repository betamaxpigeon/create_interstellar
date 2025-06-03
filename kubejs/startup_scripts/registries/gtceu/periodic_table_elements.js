const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

GTCEuStartupEvents.registry('gtceu:material', event => {
    addFluid(GTMaterials.Oganesson, $FluidStorageKeys.GAS);
    addFluid(GTMaterials.Oganesson, $FluidStorageKeys.PLASMA);
    addFluid(GTMaterials.Sodium, $FluidStorageKeys.GAS);
    addFluid(GTMaterials.Sodium, $FluidStorageKeys.PLASMA);
    
})
