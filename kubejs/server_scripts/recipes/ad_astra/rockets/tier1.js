ServerEvents.recipes(event => {
  event.remove({id: 'ad_astra:nasa_workbench/tier_1_rocket_from_nasa_workbench'})

  event.custom({
    type: 'ad_astra:nasa_workbench',
    ingredients: [
      {
        item: 'ad_astra:rocket_nose_cone'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_1'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_1'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_1'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_1'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_1'
      },
      {
        tag: 'forge:dense_plates/rocket_tier_1'
      },
      {
        item: 'ad_astra:rocket_fin'
      },
      {
        item: 'ad_astra:steel_tank'
      },
      {
        item: 'ad_astra:steel_tank'
      },
      {
        item: 'ad_astra:rocket_fin'
      },
      {
        item: 'ad_astra:rocket_fin'
      },
      {
        item: 'tfmg:compact_engine'
      },
      {
        item: 'ad_astra:rocket_fin'
      }
    ],
    result: {
      count: 1,
      id: 'ad_astra:tier_1_rocket'
    }
  })
})
