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
  event.remove({id: 'botania:mana_infusion/quartz_deconstruct'})
  event.remove({id: 'botania:mana_infusion/glowstone_deconstruct'})

  event.custom(BotaniaManaInfusedAlchemyRecipe(
    ALCHEMY_CATALYST,
    'minecraft:lapis_block',
    'geode:large_lapis_bud',
    6250
  ))

  event.custom(BotaniaManaInfusedAlchemyRecipe(
    ALCHEMY_CATALYST,
    'minecraft:redstone_block',
    'geode:large_redstone_bud',
    6250
  ))

  event.custom(BotaniaManaInfusedAlchemyRecipe(
    ALCHEMY_CATALYST,
    'minecraft:emerald_block',
    'geode:large_emerald_bud',
    6250
  ))

  event.custom(BotaniaManaInfusedAlchemyRecipe(
    ALCHEMY_CATALYST,
    'minecraft:diamond_block',
    'geode:large_diamond_bud',
    6250
  ))

  event.custom(BotaniaManaInfusedAlchemyRecipe(
    ALCHEMY_CATALYST,
    'minecraft:quartz_block',
    'geode:large_nether_quartz_bud',
    6250
  ))

  event.custom(BotaniaManaInfusedAlchemyRecipe(
    ALCHEMY_CATALYST,
    'minecraft:glowstone',
    'geode:large_nether_glowstone_bud',
    6250
  ))

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
