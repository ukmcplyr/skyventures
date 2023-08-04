// priority: 0

ServerEvents.recipes(event =>
{
  const overworld_buds = [
    'lapis',
    'redstone',
    'emerald',
    'diamond',
  ]

  const nether_buds = [
    'quartz',
    'glowstone',
  ]

  overworld_buds.forEach(bud =>
  {
    event.shaped(
      `geode:budding_${bud}`,
      [
        'BBB',
        'BAB',
        'BBB',
      ],
      {
        B: `geode:large_${bud}_bud`,
        A: 'minecraft:budding_amethyst',
      }
    )

    event.shaped(
      `geode:budding_deepslate_${bud}`,
      [
        'BBB',
        'BAB',
        'BBB',
      ],
      {
        B: 'minecraft:deepslate',
        A: `geode:budding_${bud}`
      }
    )
  })

  nether_buds.forEach(bud =>
  {
    event.shaped(
      `geode:budding_nether_${bud}`,
      [
        'BBB',
        'BAB',
        'BBB',
      ],
      {
        B: `geode:large_nether_${bud}_bud`,
        A: 'minecraft:budding_amethyst',
      }
    )

    event.shaped(
      `geode:budding_basalt_${bud}`,
      [
        'BBB',
        'BAB',
        'BBB',
      ],
      {
        B: 'minecraft:basalt',
        A: `geode:budding_nether_${bud}`,
      }
    )

    event.shaped(
      `geode:budding_blackstone_${bud}`,
      [
        'BBB',
        'BAB',
        'BBB',
      ],
      {
        B: 'minecraft:blackstone',
        A: `geode:budding_basalt_${bud}`,
      }
    )

  })

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
