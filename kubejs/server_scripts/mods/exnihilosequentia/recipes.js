// priority: 0
// requires: exnihilosequentia

ServerEvents.recipes(event =>
{
  event.recipes.exnihilosequentia.crook(
    'minecraft:grass_block',
    [
      {
        item: 'minecraft:sugar_cane',
        count: 1,
        chance: 0.5,
      },
      {
        item: 'minecraft:sweet_berries',
        count: 1,
        chance: 0.5,
      },
    ]
  )

  event.recipes.exnihilosequentia.crook(
    'minecraft:sand',
    [
      {
        item: 'minecraft:cactus',
        count: 1,
        chance: 0.5,
      },
      {
        item: 'minecraft:kelp',
        count: 1,
        chance: 0.5,
      },
    ]
  )

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
