const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
    $FluidProperty.Sodium(GAS);
    $FluidProperty.Sodium(PLASMA);
    $FluidProperty.Ognesseon(GAS);
    $FluidProperty.Ognesseon(PLASMA);
})