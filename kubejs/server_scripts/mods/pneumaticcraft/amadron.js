// priority: 0

function AmadronDefaultRecipes()
{
  return JsonIO.read('kubejs/remove.json').amadron_default_recipes
}

function AmadronSimpleRecipe(is_static, out_item, out_amount, in_item, in_amount)
{
  return {
    type: 'pneumaticcraft:amadron',
    level: 0,
    static: is_static,
    input: {
      type: 'ITEM',
      id: in_item,
      amount: in_amount,
    },
    output: {
      type: 'ITEM',
      id: out_item,
      amount: out_amount,
    }
  }
}

function EnchantedBookNBT(id, level)
{
  return `{StoredEnchantments: [{lvl: ${level}s, id: "${id}"}]}`
}

ServerEvents.recipes(event =>
{
  AmadronDefaultRecipes().forEach(recipe =>
  {
    event.remove({id: recipe})
  })

  event.custom(AmadronSimpleRecipe(
    true,
    'easy_villagers:villager',
    1,
    'minecraft:emerald',
    8
  ))

  event.custom(AmadronSimpleRecipe(
    true,
    'easy_villagers:piglin',
    1,
    'minecraft:emerald',
    8
  ))

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
