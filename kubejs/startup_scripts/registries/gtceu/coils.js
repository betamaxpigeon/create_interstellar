StartupEvents.registry('block', coil => {
    const coil = (material, temp, level, discount, tier) => {
        event.create(`${material}_coil_block`, 'gtceu:coil')
            .temperature(temp)
            .level(level)
            .energyDiscount(discount)
            .tier(tier)
            .coilMaterial(() => GTMaterials.get(material))
            .hardness(5)
            .soundType('metal')
            .requiresTool(true);
    }
    const coilmat = (name, temp, level, discount, tier, material) => {
        event.create(`${name}_coil_block`, 'gtceu:coil')
            .temperature(temp)
            .level(level)
            .energyDiscount(discount)
            .tier(tier)
            .coilMaterial(() => GTMaterials.get(material))
            .hardness(5)
            .soundType('metal')
            .requiresTool(true);
    }

    coil('cet_alloy', 20000, 24, 16, 10);
    coil('trinaquadalloy', 50000, 50, 100, 25);
//  coilmat('2', 9000, 20, 16, 8, 'lutetium');
})