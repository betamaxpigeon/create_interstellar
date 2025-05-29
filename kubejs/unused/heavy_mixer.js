
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('heavy_mixer')
        .setEUIO('in')
        .setMaxIOSize(8,2,4,2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MIXER)
});


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('heavy_mixer')
        .recipeType('heavy_mixer', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableCasingRenderer("gtceu:block/machines/mixer");
});
