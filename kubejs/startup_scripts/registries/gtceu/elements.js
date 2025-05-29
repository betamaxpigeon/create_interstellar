priority: 1;
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

//Subscript Numbers
//₀₁₂₃₄₅₆₇₈₉

//Superscript Numbers
//⁰¹²³⁴⁵⁶⁷⁸⁹

GTCEuStartupEvents.registry('gtceu:element', event => {
  const elem = (name, p, n, sym) => {
    event.create(name)
    .protons(p)
    .neutrons(n)
    .symbol(sym)
  };
  elem('mystery', -1, -1, '?');
  elem('test', -1, -1, 'Test');
  elem('prismarine', -1, -1, 'Ps');
  elem('debris', -1, -1, '?');
  elem('chorus', 136, 265, 'Ch');
  elem('plutonium244', 94, 150, 'Pu²⁴⁴');
  elem('polonium', 84, 126, 'Po²¹⁰');
  elem('duotonium', -1, -1, 'Du');
  elem('tritonium', -1, -1, 'To');
  elem('sodium33', 11, 22, 'Na³³');
  elem('calorite', 112, 180, 'Ci',);
  elem('ostrum', 112, 181, 'Ou');
  elem('desh', 112, 179, 'Dh');
  elem('radium', 88, 138, 'Ra²²⁶');
  elem('radium223', 88, 135, 'Ra²²³');
  elem('oganesson', 118, 176, 'Og²⁹⁴');
})
GTCEuStartupEvents.registry('gtceu:material', event => {
  GTMaterials.Lead.addFlags(frame)
  GTMaterials.Neutronium.addFlags(foil, rotor)
  GTMaterials.WroughtIron.setMaterialIconSet(DULL)
  GTMaterials.Steel.setMaterialIconSet(DULL)
  GTMaterials.Aluminium.setMaterialIconSet(DULL)
  GTMaterials.StainlessSteel.setMaterialIconSet(DULL)
  GTMaterials.Titanium.setMaterialIconSet(DULL)
  GTMaterials.TungstenSteel.setMaterialIconSet(DULL)
  GTMaterials.RhodiumPlatedPalladium.setMaterialIconSet(DULL)
  GTMaterials.NaquadahAlloy.setMaterialIconSet(DULL)
  GTMaterials.Darmstadtium.setMaterialIconSet(DULL)
  GTMaterials.Neutronium.setMaterialIconSet(DULL)
  GTMaterials.Americium.setMaterialIconSet(RADIOACTIVE)
  GTMaterials.Europium.setMaterialIconSet(SHINY)
  GTMaterials.Tritanium.setMaterialIconSet(RADIOACTIVE)
  GTMaterials.Lutetium.setMaterialIconSet(SHINY)
  GTMaterials.Plutonium241.setMaterialIconSet(RADIOACTIVE)
  GTMaterials.Plutonium239.setMaterialIconSet(RADIOACTIVE)
  GTMaterials.Uranium238.setMaterialIconSet(RADIOACTIVE)
  GTMaterials.Uranium235.setMaterialIconSet(RADIOACTIVE)
  GTMaterials.Duranium.setMaterialIconSet(RADIOACTIVE)
})
