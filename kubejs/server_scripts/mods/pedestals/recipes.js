// priority: 0
// requires: pedestals

function PedestalsMaterialGeneratorRecipe (below, output)
{
  return {
    type: 'pedestals:cobblegen',
    blockBelow: {
      item: below,
    },
    result: {
      item: output,
    }
  }
}

ServerEvents.recipes(event =>
{
  event.custom(
    PedestalsMaterialGeneratorRecipe('farmersdelight:organic_compost', 'minecraft:dirt')
  )

  event.custom(
    PedestalsMaterialGeneratorRecipe('farmersdelight:rich_soil', 'minecraft:dirt')
  )

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
