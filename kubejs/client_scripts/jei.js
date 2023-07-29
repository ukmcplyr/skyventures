// priority: 0

JEIEvents.hideItems(event =>
{
  var hidden_items = JsonIO.read('kubejs/remove.json').jei.hidden_items

  hidden_items.forEach(item =>
  {
    event.hide(item)
  })

  event.hide([
    'ae2:facade',
  ])

})

//
// vim: ts=2 sw=2 et fdm=marker :
//

