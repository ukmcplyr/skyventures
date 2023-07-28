// priority: 0

ServerEvents.recipes(event =>
{
  // Gravel from 3x flint
  //
  event.shapeless('minecraft:gravel', ['3x minecraft:flint'])

  // Wheat seeds from wheat
  //
  event.shapeless('minecraft:wheat_seeds', ['minecraft:wheat'])

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
