// priority: 0

ServerEvents.recipes(event =>
{
  event.remove({id: 'jamd:mine_portal_block'})

  event.shaped(
    'jamd:mine_portal_block',
    [
      'CCC',
      'CPC',
      'CCC',
    ],
    {
      C: 'minecraft:black_concrete',
      P: 'minecraft:iron_pickaxe',
    }
  )

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
