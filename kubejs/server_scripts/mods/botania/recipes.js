// priority: 0

const ALCHEMY_CATALYST = 'botania:alchemy_catalyst'

function BotaniaManaInfusedAlchemyRecipe(catalyst, input, output, cost)
{
  return {
    type: 'botania:mana_infusion',
    catalyst: {
      type: 'block',
      block: catalyst,
    },
    input: {
      item: input,
    },
    output: {
      item: output,
    },
    mana: cost,
  }
}

ServerEvents.recipes(event =>
{
  event.remove({id: 'botania:'})

  event.custom(BotaniaManaInfusedAlchemyRecipe(
    ALCHEMY_CATALYST,
    'minecraft:lapis_block',
    'geode:large_lapis_bud',
    6250
  ))

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
