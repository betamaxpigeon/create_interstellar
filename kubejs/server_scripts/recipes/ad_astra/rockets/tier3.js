ServerEvents.recipes(event => {
  event.remove({id: 'ad_astra:nasa_workbench/tier_3_rocket_from_nasa_workbench'})

  event.custom({
    type: 'ad_astra:nasa_workbench',
    ingredients: [
      {
        item: 'kubejs:reinforced_rocket_nose_cone'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_3'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_3'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_3'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_3'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_3'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_3'
      },
      {
        item: 'kubejs:reinforced_rocket_fin'
      },
      {
        item: 'ad_astra:ostrum_tank'
      },
      {
        item: 'ad_astra:ostrum_tank'
      },
      {
        item: 'kubejs:reinforced_rocket_fin'
      },
      {
        item: 'kubejs:reinforced_rocket_fin'
      },
      {
        item: 'tfmg:lpg_engine'
      },
      {
        item: 'kubejs:reinforced_rocket_fin'
      }
    ],
    result: {
      count: 1,
      id: 'ad_astra:tier_3_rocket'
    }
  })
})
