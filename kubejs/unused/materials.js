function materialRegistry(func) { GTCEuStartupEvents.registry('gtceu:material', func); };
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

// Icon Sets
const DULL = GTMaterialIconSet.DULL;
const METALLIC = GTMaterialIconSet.METALLIC;
const MAGNETIC = GTMaterialIconSet.MAGNETIC;
const SHINY = GTMaterialIconSet.SHINY;
const BRIGHT = GTMaterialIconSet.BRIGHT;
const DIAMOND = GTMaterialIconSet.DIAMOND;
const EMERALD = GTMaterialIconSet.EMERALD;
const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
const RUBY = GTMaterialIconSet.RUBY;
const OPAL = GTMaterialIconSet.OPAL;
const GLASS = GTMaterialIconSet.GLASS;
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
const FINE = GTMaterialIconSet.FINE;
const SAND = GTMaterialIconSet.SAND;
const WOOD = GTMaterialIconSet.WOOD;
const ROUGH = GTMaterialIconSet.ROUGH;
const FLINT = GTMaterialIconSet.FLINT;
const LIGNITE = GTMaterialIconSet.LIGNITE;
const QUARTZ = GTMaterialIconSet.QUARTZ;
const CERTUS = GTMaterialIconSet.CERTUS;
const LAPIS = GTMaterialIconSet.LAPIS;
const FLUID = GTMaterialIconSet.FLUID;
const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;

// Flags
// Generic flags
const no_unify = GTMaterialFlags.NO_UNIFICATION;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;
// Generation Flags
// Dust Flags
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;
// Ingot Flags
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;
// Gem Flags
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;
// Fluid Flags
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;
// Ore Flags
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;
// Misc
const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
const no_working = GTMaterialFlags.NO_WORKING;
const no_smashing = GTMaterialFlags.NO_SMASHING;
const no_smelt = GTMaterialFlags.NO_SMELTING;
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;

function V(voltage) {
  let v;
  switch(voltage) {
      case 'ulv': v = GTValues.V[GTValues.ULV]; break;
      case 'lv': v = GTValues.V[GTValues.LV]; break;
      case 'mv': v = GTValues.V[GTValues.MV]; break;
      case 'hv': v = GTValues.V[GTValues.HV]; break;
      case 'ev': v = GTValues.V[GTValues.EV]; break;
      case 'iv': v = GTValues.V[GTValues.IV]; break;
      case 'luv': v = GTValues.V[GTValues.LuV]; break;
      case 'zpm': v = GTValues.V[GTValues.ZPM]; break;
      case 'uv': v = GTValues.V[GTValues.UV]; break;
      case 'uhv': v = GTValues.V[GTValues.UHV]; break;
      case 'uev': v = GTValues.V[GTValues.UEV]; break;
      case 'uiv': v = GTValues.V[GTValues.UIV]; break;
      case 'uxv': v = GTValues.V[GTValues.UXV]; break;
      case 'opv': v = GTValues.V[GTValues.OpV]; break;
      case 'max': v = GTValues.V[GTValues.MAX]; break;
  }
  return v;
}

function VA(voltage) {
  let v;
  switch(voltage) {
      case 'ulv': v = GTValues.VA[GTValues.ULV]; break;
      case 'lv': v = GTValues.VA[GTValues.LV]; break;
      case 'mv': v = GTValues.VA[GTValues.MV]; break;
      case 'hv': v = GTValues.VA[GTValues.HV]; break;
      case 'ev': v = GTValues.VA[GTValues.EV]; break;
      case 'iv': v = GTValues.VA[GTValues.IV]; break;
      case 'luv': v = GTValues.VA[GTValues.LuV]; break;
      case 'zpm': v = GTValues.VA[GTValues.ZPM]; break;
      case 'uv': v = GTValues.VA[GTValues.UV]; break;
      case 'uhv': v = GTValues.VA[GTValues.UHV]; break;
      case 'uev': v = GTValues.VA[GTValues.UEV]; break;
      case 'uiv': v = GTValues.VA[GTValues.UIV]; break;
      case 'uxv': v = GTValues.VA[GTValues.UXV]; break;
      case 'opv': v = GTValues.VA[GTValues.OpV]; break;
      case 'max': v = GTValues.VA[GTValues.MAX]; break;
  }
  return v;
}

function VH(voltage) {
  let v;
  switch(voltage) {
      case 'ulv': v = GTValues.VH[GTValues.ULV]; break;
      case 'lv': v = GTValues.VH[GTValues.LV]; break;
      case 'mv': v = GTValues.VH[GTValues.MV]; break;
      case 'hv': v = GTValues.VH[GTValues.HV]; break;
      case 'ev': v = GTValues.VH[GTValues.EV]; break;
      case 'iv': v = GTValues.VH[GTValues.IV]; break;
      case 'luv': v = GTValues.VH[GTValues.LuV]; break;
      case 'zpm': v = GTValues.VH[GTValues.ZPM]; break;
      case 'uv': v = GTValues.VH[GTValues.UV]; break;
      case 'uhv': v = GTValues.VH[GTValues.UHV]; break;
      case 'uev': v = GTValues.VH[GTValues.UEV]; break;
      case 'uiv': v = GTValues.VH[GTValues.UIV]; break;
      case 'uxv': v = GTValues.VH[GTValues.UXV]; break;
      case 'opv': v = GTValues.VH[GTValues.OpV]; break;
      case 'max': v = GTValues.VH[GTValues.MAX]; break;
  }
  return v;
}

function VHA(voltage) {
  let v;
  switch(voltage) {
      case 'ulv': v = GTValues.VHA[GTValues.ULV]; break;
      case 'lv': v = GTValues.VHA[GTValues.LV]; break;
      case 'mv': v = GTValues.VHA[GTValues.MV]; break;
      case 'hv': v = GTValues.VHA[GTValues.HV]; break;
      case 'ev': v = GTValues.VHA[GTValues.EV]; break;
      case 'iv': v = GTValues.VHA[GTValues.IV]; break;
      case 'luv': v = GTValues.VHA[GTValues.LuV]; break;
      case 'zpm': v = GTValues.VHA[GTValues.ZPM]; break;
      case 'uv': v = GTValues.VHA[GTValues.UV]; break;
      case 'uhv': v = GTValues.VHA[GTValues.UHV]; break;
      case 'uev': v = GTValues.VHA[GTValues.UEV]; break;
      case 'uiv': v = GTValues.VHA[GTValues.UIV]; break;
      case 'uxv': v = GTValues.VHA[GTValues.UXV]; break;
      case 'opv': v = GTValues.VHA[GTValues.OpV]; break;
      case 'max': v = GTValues.VHA[GTValues.MAX]; break;
  }
  return v;
}

materialRegistry(event=> {

  event.create('prismarine_neutronate')
    .ingot()
    .fluid()
    .components('500x prismarine', '1x neutronium')
    .iconSet(GTMaterialIconSet.DULL)
    .color(0x06a178)
    .blastTemp(10750, 'highest', VA('uhv'), 72000)
    .flags

  event.create('void')
    .components('1x echo', '1x neutronium')
    .ingot(1)
    .blastTemp(10799, 'highest', VA('uev'), 8000)
    .color(0x001a1a)
    .iconSet(DULL)
    .flags(rod, long_rod, frame, no_decomp);


    GTMaterials.Neutronium.addFlags(foil)
    GTMaterials.Lead.addFlags(frame)
})

GTCEuStartupEvents.materialModification(event=> {
  GTMaterials.Netherite.setComponents('4x debris', '4x gold')
  GTMaterials.Netherite.setMaterialIconSet(DULL)
  GTMaterials.Netherite.addFlags(rotor)
})
