// priority: 0
// requires: exnihilosequentia

function ExNihiloSequentiaSieveRecipe (item, chance, mesh)
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

  const sieved_gravel = [
    ExNihiloSequentiaSieveRecipe('minecraft:coal', 0.75, 'diamond'),
  ]

  sieved_gravel.forEach(drop =>
  {
    event.recipes.exnihilosequentia.sieve('minecraft:gravel', drop.item, [
      {
        chance: drop.chance,
        mesh: drop.mesh,
      },
    ])

  })

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
