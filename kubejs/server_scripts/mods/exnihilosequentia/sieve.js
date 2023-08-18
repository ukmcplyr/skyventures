// priority: 0
// requires: exnihilosequentia

function SievedItem (item, chance, mesh)
{
  return {
    item: item,
    chance: chance,
    mesh: mesh,
  }
}

ServerEvents.recipes(event =>
{
  event.remove({type: 'exnihilosequentia:sieve'})

  let SieveRecipe = (input, output, chance, mesh) =>
  {
    event.recipes.exnihilosequentia.sieve(input, output, [
      {
        chance: chance,
        mesh: mesh,
      }
    ])
  }

  const sieved_dirt =
  [
    SievedItem('exnihilosequentia:stone_pebble', 0.80, 'emerald'),
    SievedItem('exnihilosequentia:andesite_pebble', 0.75, 'emerald'),
    SievedItem('exnihilosequentia:diorite_pebble', 0.75, 'emerald'),
    SievedItem('exnihilosequentia:granite_pebble', 0.75, 'emerald'),
    SievedItem('minecraft:wheat_seeds', 0.70, 'emerald'),
    SievedItem('minecraft:beetroot_seeds', 0.70, 'emerald'),
    SievedItem('minecraft:melon_seeds', 0.60, 'emerald'),
    SievedItem('minecraft:pumpkin_seeds', 0.60, 'emerald'),
    SievedItem('exnihilosequentia:grass_seeds', 0.50, 'emerald'),
    SievedItem('exnihilosequentia:mycelium_spores', 0.40, 'emerald'),
  ]

  sieved_dirt.forEach(drop =>
  {
    SieveRecipe('minecraft:dirt', drop.item, drop.chance, drop.mesh)
  })

  const sieved_gravel =
  [
    SievedItem('minecraft:flint', 0.85, 'emerald'),
    SievedItem('minecraft:coal', 0.75, 'emerald'),
    SievedItem('minecraft:raw_copper', 0.70, 'emerald'),
    SievedItem('thermal:apatite', 0.70, 'emerald'),
    SievedItem('create:raw_zinc', 0.65, 'emerald'),
    SievedItem('mekanism:raw_osmium', 0.65, 'emerald'),
    SievedItem('thermal:raw_lead', 0.60, 'emerald'),
    SievedItem('thermal:raw_tin', 0.55, 'emerald'),
    SievedItem('minecraft:raw_iron', 0.50, 'emerald'),
    SievedItem('thermal:raw_nickel', 0.45, 'emerald'),
    SievedItem('thermal:raw_silver', 0.45, 'emerald'),
    SievedItem('thermal:cinnabar', 0.40, 'emerald'),
    SievedItem('minecraft:lapis_lazuli', 0.40, 'emerald'),
    SievedItem('minecraft:raw_gold', 0.30, 'emerald'),
    SievedItem('minecraft:diamond', 0.10, 'emerald'),
    SievedItem('minecraft:emerald', 0.05, 'emerald'),
  ]

  sieved_gravel.forEach(drop =>
  {
    SieveRecipe('minecraft:gravel', drop.item, drop.chance, drop.mesh)
  })

  const sieved_sand =
  [
    SievedItem('thermal:bitumen', 0.60, 'emerald'),
    SievedItem('thermal:quartz_dust', 0.55, 'emerald'),
    SievedItem('minecraft:raw_iron', 0.50, 'emerald'),
    SievedItem('minecraft:raw_gold', 0.40, 'emerald'),
    SievedItem('mekanism:raw_uranium', 0.25, 'emerald'),
    SievedItem('powah:uraninite_raw', 0.25, 'emerald'),
    SievedItem('minecraft:prismarine_shard', 0.15, 'emerald'),
    SievedItem('minecraft:prismarine_crystals', 0.05, 'emerald'),
  ]

  sieved_sand.forEach(drop =>
  {
    SieveRecipe('minecraft:sand', drop.item, drop.chance, drop.mesh)
  })

  const sieved_dust =
  [
    SievedItem('minecraft:bone_meal', 0.65, 'emerald'),
    SievedItem('minecraft:gunpowder', 0.60, 'emerald'),
    SievedItem('minecraft:redstone', 0.50, 'emerald'),
    SievedItem('ae2:sky_dust', 0.30, 'emerald'),
    SievedItem('ae2:certus_quartz_dust', 0.25, 'emerald'),
    SievedItem('fluxnetworks:flux_dust', 0.15, 'emerald'),
    SievedItem('ae2:fluix_dust', 0.05, 'emerald'),
  ]

  sieved_dust.forEach(drop =>
  {
    SieveRecipe('exnihilosequentia:dust', drop.item, drop.chance, drop.mesh)
  })

  const sieved_crushed_deepslate =
  [
    SievedItem('exnihilosequentia:deepslate_pebble', 0.75, 'emerald'),
    SievedItem('exnihilosequentia:tuff_pebble', 0.75, 'emerald'),
    SievedItem('exnihilosequentia:calcite_pebble', 0.75, 'emerald'),
    SievedItem('exnihilosequentia:dripstone_pebble', 0.75, 'emerald'),
    SievedItem('thermal:niter', 0.70, 'emerald'),
    SievedItem('thermal:sulfur', 0.65, 'emerald'),
    SievedItem('minecraft:raw_iron', 0.60, 'emerald'),
    SievedItem('mekanism:raw_uranium', 0.50, 'emerald'),
    SievedItem('powah:uraninite_raw', 0.50, 'emerald'),
    SievedItem('mekanism:fluorite_gem', 0.45, 'emerald'),
    SievedItem('minecraft:raw_gold', 0.40, 'emerald'),
    SievedItem('minecraft:diamond', 0.30, 'emerald'),
    SievedItem('minecraft:emerald', 0.25, 'emerald'),
    SievedItem('minecraft:amethyst_shard', 0.10, 'emerald'),
    SievedItem('silentgear:bort', 0.025, 'emerald'),
  ]

  sieved_crushed_deepslate.forEach(drop =>
  {
    SieveRecipe('exnihilosequentia:crushed_deepslate', drop.item, drop.chance, drop.mesh)
  })

  const sieved_soul_sand =
  [
    SievedItem('minecraft:quartz', 0.50, 'emerald'),
    SievedItem('minecraft:nether_wart', 0.35, 'emerald'),
    SievedItem('minecraft:ghast_tear', 0.15, 'emerald'),
    SievedItem('thermal:netherite_nugget', 0.05, 'emerald'),
  ]

  sieved_soul_sand.forEach(drop =>
  {
    SieveRecipe('minecraft:soul_sand', drop.item, drop.chance, drop.mesh)
  })

  const sieved_crushed_netherrack =
  [
    SievedItem('exnihilosequentia:netherrack_pebble', 0.80, 'emerald'),
    SievedItem('exnihilosequentia:basalt_pebble', 0.75, 'emerald'),
    SievedItem('exnihilosequentia:blackstone_pebble', 0.75, 'emerald'),
    SievedItem('minecraft:glowstone_dust', 0.60, 'emerald'),
    SievedItem('minecraft:raw_gold', 0.50, 'emerald'),
    SievedItem('exnihilosequentia:crimson_nylium_spores', 0.40, 'emerald'),
    SievedItem('exnihilosequentia:warped_nylium_spores', 0.40, 'emerald'),
    SievedItem('minecraft:blaze_powder', 0.35, 'emerald'),
    SievedItem('silentgear:raw_crimson_iron', 0.10, 'emerald'),
    SievedItem('minecraft:netherite_scrap', 0.025, 'emerald'),
  ]

  sieved_crushed_netherrack.forEach(drop =>
  {
    SieveRecipe('exnihilosequentia:crushed_netherrack', drop.item, drop.chance, drop.mesh)
  })

  const sieved_crushed_end_stone =
  [
    SievedItem('exnihilosequentia:end_stone_pebble', 0.75, 'emerald'),
    SievedItem('minecraft:ender_pearl', 0.50, 'emerald'),
    SievedItem('minecraft:chorus_fruit', 0.25, 'emerald'),
    SievedItem('minecraft:chorus_flower', 0.15, 'emerald'),
    SievedItem('rftoolsbase:dimensionalshard', 0.10, 'emerald'),
    SievedItem('silentgear:raw_azure_silver', 0.05, 'emerald'),
  ]

  sieved_crushed_end_stone.forEach(drop =>
  {
    SieveRecipe('exnihilosequentia:crushed_end_stone', drop.item, drop.chance, drop.mesh)
  })

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
