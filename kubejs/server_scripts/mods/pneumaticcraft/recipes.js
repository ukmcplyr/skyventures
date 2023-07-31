// priority: 0

ServerEvents.recipes(event =>
{
  event.remove({id: 'pneumaticcraft:amadron_tablet'})

  event.shaped(
    'pneumaticcraft:amadron_tablet',
    [
      'IRI',
      'LEL',
      'ICI',
    ],
    {
      I: 'minecraft:iron_ingot',
      R: 'minecraft:redstone',
      E: 'minecraft:emerald',
      L: 'minecraft:lapis_lazuli',
      C: 'pneumaticcraft:air_canister',
    }
  )

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
