// priority: 0

const be_rightclick_pebble_blocks = [
  'minecraft:dirt',
  'minecraft:coarse_dirt',
  'minecraft:grass_block',
]

function random_range(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min)
}

BlockEvents.rightClicked(be_rightclick_pebble_blocks, event =>
{
  const {item, hand, player} = event

  if (hand != "MAIN_HAND" || item.id != 'minecraft:air')
    return

  // Poor attempt at 50/50 chance
  var rand = random_range(0, 1)
  if (rand & 1)
    return

  event.block.popItem('exnihilosequentia:stone_pebble')

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
