// priority: 0

ServerEvents.recipes(event =>
{
  event.remove({id: 'waterstrainer:strainer_base'})

  event.shaped(
    'waterstrainer:strainer_base',
    [
      'S S',
      'WHW',
      'WCW',
    ],
    {
      S: 'minecraft:stick',
      W: 'minecraft:oak_wood',
      H: 'woodenhopper:wooden_hopper',
      C: '#forge:chests/wooden',
    }
  )

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
