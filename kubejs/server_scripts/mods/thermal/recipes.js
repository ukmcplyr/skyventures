// priority: 0

ServerEvents.recipes(event =>
{
  event.remove({id: 'thermal:machine_crystallizer'})

  event.shaped(
    'thermal:machine_crystallizer',
    [
      ' G ',
      'PFP',
      'ECE',
    ],
    {
      G: '#forge:glass',
      P: 'thermal:signalum_plate',
      F: 'thermal:machine_frame',
      E: 'thermal:constantan_gear',
      C: 'thermal:rf_coil',
    }
  )

})

//
// vim: ts=2 sw=2 et fdm=marker :
//
