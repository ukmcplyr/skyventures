// priority: 0

ServerEvents.recipes(event =>
{
  const buds = [
    'lapis',
  ]

  buds.forEach(bud =>
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
        'DDD',
        'DBD',
        'DDD',
      ],
      {
        D: 'minecraft:deepslate',
        B: `geode:budding_${bud}`
      }
    )
  })

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
