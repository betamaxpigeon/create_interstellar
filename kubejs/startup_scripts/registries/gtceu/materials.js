const no_unify = GTMaterialFlags.NO_UNIFICATION;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;
const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;
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
  return V;
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
  return V;
}

//Subscript Numbers
//₀₁₂₃₄₅₆₇₈₉

//Superscript Numbers
//⁰¹²³⁴⁵⁶⁷⁸⁹
GTCEuStartupEvents.registry('gtceu:material', event => {

  event.create('calorite')
    .fluid()
    .ingot()
    .element(GTElements.get('calorite'))
    .iconSet(GTMaterialIconSet.METALLIC)
    .color(0xe6443e)
    .flags(plates, foil, dense_plate)
    .ore(true);

  event.create('ostrum')
    .fluid()
    .ingot()
    .element(GTElements.get('ostrum'))
    .iconSet(GTMaterialIconSet.METALLIC)
    .color(0x632e41)
    .flags(plates, foil, dense_plate)
    .ore(true);

  event.create('desh')
    .fluid()
    .ingot()
    .element(GTElements.get('desh'))
    .iconSet(GTMaterialIconSet.METALLIC)
    .color(0xff9c2b)
    .flags(plates, foil, dense_plate)
    .ore(true);

  event.create('plutonium244')
    .fluid()
    .dust()
    .element(GTElements.get('plutonium244'))
    .iconSet(GTMaterialIconSet.RADIOACTIVE)
    .color(0xeb372a);

  event.create('sodium33')
    .gas()
    .iconSet(GTMaterialIconSet.LIGNITE)
    .element(GTElements.get('sodium33'))

  event.create('polonium210')
    .fluid()
    .ingot()
    .element(GTElements.get('polonium'))
    .iconSet(GTMaterialIconSet.RADIOACTIVE)
    .color(0x24d496)
    .flags(frame, foil, plates, spring, small_spring, rod, long_rod);

  event.create('radum')
    .fluid()
    .ingot()
    .element(GTElements.get('radium'))
    .iconSet(GTMaterialIconSet.RADIOACTIVE)
    .color(0x65cf81)
    .flags(plates);

  event.create('radum223')
    .fluid()
    .ingot()
    .element(GTElements.get('radium223'))
    .iconSet(GTMaterialIconSet.RADIOACTIVE)
    .color(0x64a375)
    .flags(plates);

  event.create('radim')
    .gas()
    .element(GTElements.get('radium'))
    .color(0x65cf81);

  event.create('radim223')
    .gas()
    .element(GTElements.get('radium223'))
    .color(0x64a375);

  event.create('test')
    .gas()
    .plasma()
    .element(GTElements.get('oganesson'))
    .color(0xfc5800);

  event.create('duotonium')
    .fluid()
    .element(GTElements.get('duotonium'))
    .color(0x90d424);

  event.create('prismarine')
    .gem()
    .fluid()
    .element(GTElements.get('prismarine'))
    .iconSet(GTMaterialIconSet.RUBY)
    .color(0x0281a4);

  event.create('pris_nt')
    .ingot()
    .fluid()
    .iconSet(GTMaterialIconSet.DULL)
    .color(0x06a178)
    .components('125x prismarine', '36x neutronium')
    .flags(plates, dense_plate, frame, foil);

  event.create('tritonium')
    .ingot()
    .fluid()
    .element(GTElements.get('tritonium'))
    .iconSet(GTMaterialIconSet.RADIOACTIVE)
    .color(0xb84058)
    .flags(plates, fine_wire, dense_plate, foil, frame, rod, long_rod, gear, small_gear, rotor, round)
    .cableProperties(V('zpm'), 32, 4);

  event.create('uranium_triniobium')
    .ingot()
    .fluid()
    .components('1x uranium', '3x niobium')
    .iconSet(GTMaterialIconSet.BRIGHT)
    .color(0x9d679e)
    .flags(plates, foil, frame, rod, long_rod, bolt_and_screw)
    .blastTemp(4499, 'low', VA('hv'), 100)
    .cableProperties(V('luv'), 8, 1);

  event.create('nasa_grade_soldering_alloy')
    .fluid()
    .ingot()
    .components('3x soldering_alloy', '5x europium', '1x tritonium', '1x trinium', '2x osmiridium')
    .iconSet(GTMaterialIconSet.DULL)
    .color(0x9d71c9)
    .blastTemp(14999, 'highest', VA('uxv'), 1000)
    .flags(solder_mat_good)
    .cableProperties(V('uxv'), 256, 0, true);

  event.create('peek')
    .fluid()
    .polymer()
    .components('19x carbon', '14x hydrogen', '3x oxygen')
    .formula('(C₁₉H₁₄O₃)n')
    .iconSet(GTMaterialIconSet.LIGNITE)
    .color(0xbfad8e)
    .flags(not_alloy, plates, rod, long_rod, ring, no_decomp);

  event.create('enderium')
    .ingot(1)
    .fluid()
    .components('3x lead', '1x diamond', '2x ender_pearl')
    .color(0x006666)
    .iconSet(GTMaterialIconSet.METALLIC)
    .blastTemp(3500, 'low', VA('ev'), 1500)
    .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame)
    .cableProperties(V('ev'), 32, 0, true)
    .rotorStats(130, 160, 3, 45600);

  event.create('signalum')
    .ingot(1)
    .fluid()
    .components('1x silver', '3x copper', '4x redstone')
    .color(0xff3300)
    .iconSet(GTMaterialIconSet.METALLIC)
    .blastTemp(1700, 'low', VA('mv'), 1200)
    .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame)
    .cableProperties(V('mv'), 16, 0, true)
    .rotorStats(130, 140, 3, 24000);

  event.create('shellite')
    .ingot(1)
    .fluid()
    .components('1x black_bronze', '3x signalum')
    .color(0x9933ff)
    .iconSet(GTMaterialIconSet.METALLIC)
    .blastTemp(4400, 'mid', VA('iv'), 1800)
    .flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame)
    .cableProperties(V('iv'), 64, 0, true)
    .rotorStats(450, 220, 3, 37600);

  event.create('trinaquadalloy')
    .ingot()
    .fluid()
    .color(0x281832)
    .iconSet(BRIGHT)
    .flags(plates, rod, frame, foil, fine_wire, rotor)
    .components('6x trinium', '2x naquadah', '1x carbon')
    .blastTemp(8747, 'higher', VA('uiv'), 1200);

  event.create('ancient_alloy')
    .ingot()
    .fluid()
    .components('20x purest_plutonium', '5x trinium', '64x ender_air', '5x helium', '64x tritanium', '1x tritonium', '35x polonium', '2x nasa_grade_soldering_alloy', '6x enderium')
    .iconSet(GTMaterialIconSet.RADIOACTIVE)
    .color(0x5e0044)
    .flags(bolt_and_screw, dense_plate, fine_wire, foil, frame, gear, long_rod, plates, ring, rod, rotor, small_gear, spring, small_spring)
    .blastTemp(49999, 'higher', VA('opv'), 200000)
    .cableProperties(V('opv'), 4096, 0, true);

  event.create('chorus')
    .dust()
    .element(GTElements.get('chorus'))
    .iconSet(GTMaterialIconSet.LIGNITE)
    .color(0x913f7a);

  event.create('naquadrinium')
    .dust()
    .components('2x naquadria', '3x trinium')
    .iconSet(GTMaterialIconSet.FINE)
    .color(0x000000)
    .secondaryColor(0xffffff);

  event.create('silica_gel')
    .fluid()
    .components('1x chlorine', '1x hydrogen', '6x oxygen', '1x silicon')
    .color(0xe6e6e6)
    .flags(no_decomp);

  event.create('cet_alloy')
    .ingot()
    .fluid()
    .components('5x chorus', '3x enderium', '3x trinium')
    .iconSet(GTMaterialIconSet.DULL)
    .color(0xff66ff)
    .flags(frame, plates, dense_plate, foil, rod, long_rod)
    .blastTemp(14999, 'high', VA('uhv'), 10000)
    .cableProperties(V('uev'), 64, 4);

  event.create('piglin_gold')
    .ingot()
    .fluid()
    .components('10x gold', '2x naquadrinium', '5x carbon_dioxide')
    .iconSet(GTMaterialIconSet.METALLIC)
    .color(0xE5B80B)
    .blastTemp(10799, 'highest', VA('uev'), 80000);

  event.create('pig_iron')
    .ingot()
    .fluid()
    .components('6x iron', '3x carbon', '1x silicon')
    .iconSet(GTMaterialIconSet.DULL)
    .color(0xd18984)
    .flags(plates, frame, rod, long_rod, bolt_and_screw)
    .blastTemp(750, 'low', VA('hv'), 200);

  event.create('rocket_tier_1')
    .ingot()
    .fluid()
    .components('5x titanium', '4x steel', '3x stainless_steel', '2x enderium')
    .iconSet(GTMaterialIconSet.DULL)
    .color(0x544854)
    .flags(plates, dense_plate)
    .blastTemp(4499, 'mid', VA('ev'), 1700);

  event.create('rocket_tier_2')
    .ingot()
    .fluid()
    .components('1x rocket_tier_1', '2x desh', '3x shellite', '5x tungsten_steel')
    .iconSet(GTMaterialIconSet.DULL)
    .color(0xad701a)
    .flags(plates, dense_plate)
    .blastTemp(5399, 'high', VA('iv'), 2700);

  event.create('rocket_tier_3')
    .ingot()
    .fluid()
    .components('1x rocket_tier_2', '2x ostrum', '3x uranium_triniobium', '5x rhodium_plated_palladium')
    .iconSet(GTMaterialIconSet.DULL)
    .color(0x593b51)
    .flags(plates, dense_plate)
    .blastTemp(7199, 'higher', VA('luv'), 3700);

  event.create('rocket_tier_4')
    .ingot()
    .fluid()
    .components('1x rocket_tier_3', '2x calorite','3x osmiridium', '5x naquadah_alloy')
    .iconSet(GTMaterialIconSet.DULL)
    .color(0xfc3243)
    .flags(plates, dense_plate)
    .blastTemp(9000, 'highest', VA('zpm'), 3700);


  event.create('moon_desh_rich_magma')
    .fluid()
    .components('5x desh')
    .color(0xffad1f);

  event.create('mars_desh_rich_magma')
    .fluid()
    .components('4x desh')
    .color(0xffad1f);

  event.create('mercury_desh_rich_magma')
    .fluid()
    .components('3x desh')
    .color(0xffad1f);

    event.create('venus_desh_rich_magma')
    .fluid()
    .components('3x desh')
    .color(0xffad1f);

  event.create('mars_ostrum_rich_magma')
    .fluid()
    .components('6x ostrum')
    .color(0xff531f);

  event.create('venus_ostrum_rich_magma')
    .fluid()
    .components('5x ostrum')
    .color(0xff531f);

  event.create('mercury_ostrum_rich_magma')
    .fluid()
    .components('4x ostrum')
    .color(0xff531f);

  event.create('venus_calorite_rich_magma')
    .fluid()
    .components('3x calorite')
    .color(0xff4f1f);
})
