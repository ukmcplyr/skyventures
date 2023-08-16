// priority: 0
// requires: thermal
// requires: exnihilosequentia

function ThermalPulverizerSimpleRecipe (input, output)
{
  return {
    type: 'thermal:pulverizer',
    ingredient: {
      item: input,
    },
    result: [
      {
        item: output,
      },
    ],
    experience: 0.1,
  }
}

ServerEvents.recipes(event =>
{
  const conflicts =
  [
    'thermal:machines/pulverizer/pulverizer_cobblestone',
    'thermal:machines/pulverizer/pulverizer_gravel',
    'thermal:compat/create/pulverizer_create_netherrack',
  ]

  conflicts.forEach(id =>
  {
    event.remove({id: id})
  })

  global.crush_simple.forEach(recipe =>
  {
    event.custom(ThermalPulverizerSimpleRecipe(recipe.input, recipe.output))
  })

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
