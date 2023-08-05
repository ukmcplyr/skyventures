// priority: 0

ItemEvents.modification(event =>
{
  const items = [
    'minecraft:acacia_sign',
    'minecraft:birch_sign',
    'minecraft:crimson_sign',
    'minecraft:dark_oak_sign',
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:jungle_sign',
    'minecraft:mangrove_sign',
    'minecraft:warped_sign',
    'minecraft:bucket',
    'minecraft:egg',
    'minecraft:ender_pearl',
    'resourcechickens:duck_egg',
  ]

  event.modify(items, item =>
  {
    item.maxStackSize = 64
  })

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
