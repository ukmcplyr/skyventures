// priority: 1000

ServerEvents.recipes(event =>
{
  var recipes = JsonIO.read('kubejs/remove.json').recipes

  recipes.forEach(id =>
  {
    event.remove({id: id})
  })

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
