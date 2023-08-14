// priority: 0
// requires: botania

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
  event.custom(BotaniaManaInfusedAlchemyRecipe(
    ALCHEMY_CATALYST,
    'resourcechickens:duck_feather',
    'minecraft:feather',
    500
  ))

  event.custom(BotaniaManaInfusedAlchemyRecipe(
    ALCHEMY_CATALYST,
    'resourcechickens:duck_egg',
    'minecraft:egg',
    500
  ))

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
