const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

GTCEuStartupEvents.registry('gtceu:material', event => {
    const typeToProperty = (type) => {
        if (type = 'INGOT') {return $IngotProperty()}
        if (type = 'DUST') {return $DustProperty()}
    }
    const periodicTableElement = (material, property, type, blast_parameters) => {
        let type_caps = type.toUpperCase();
        switch(property) {
            case 'fluid': return `addFluid(GTMaterials.${material}, $FluidStorageKeys.${type_caps})`;
            case 'solid': return `GTMaterials.${material}.setProperty(PropertyKey.${type_caps}, new ${typeToProperty(type_caps)})`;
        }
    }
    const newBlastProperty = (material, temperature, gas_tier, voltage, ticks) => {
        return `GTMaterials.${material}.setProperty(PropertyKey.BLAST, new $BlastProperty(${temperature}, ${gas_tier}, ${VA(voltage)}, ${ticks}));`
    }
    
    //Solid Properties
    periodicTableElement(Radium, 'solid', 'ingot');
    periodicTableElement(Fermium, 'solid', 'ingot');
    periodicTableElement(Polonium, 'solid', 'ingot');
    periodicTableElement(Dubnium, 'solid', 'ingot');
    periodicTableElement(Rubidium, 'solid', 'dust');

    //Blast Properties
    newBlastProperty(Fermium, 10799, 3, 'uiv', secondsToTicks(60));
    newBlastProperty(Dubnium, 3306, 4, 'uv', secondsToTicks(79));

    
    //Fluid Properties
    // Can be LIQUID, GAS, PLASMA, or MOLTEN
    periodicTableElement(Radium, 'fluid', 'liquid');
    periodicTableElement(Fermium, 'fluid', 'liquid');
    periodicTableElement(Polonium, 'fluid', 'liquid');
    periodicTableElement(Dubnium, 'fluid', 'liquid');
    periodicTableElement(Oganesson, 'fluid', 'gas');
    periodicTableElement(Oganesson, 'fluid', 'plasma');
    periodicTableElement(Sodium, 'fluid', 'gas');
    periodicTableElement(Sodium, 'fluid', 'plasma');
})
