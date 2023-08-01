// priority: 0

ServerEvents.recipes(event =>
{
  event.remove({id: 'gag:time_sand_pouch'})

  event.shaped(
    'gag:time_sand_pouch',
    [
      'GBG',
      'LEL',
      'LLL',
    ],
    {
      G: 'minecraft:raw_gold_block',
      B: 'minecraft:blaze_rod',
      E: 'minecraft:ender_eye',
      L: 'minecraft:leather',
    }
  )

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
