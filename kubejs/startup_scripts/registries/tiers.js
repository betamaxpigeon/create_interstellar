ItemEvents.toolTierRegistry(event => {
  event.add('instakill', tier => {
    tier.uses = 0
    tier.speed = 100
    tier.attackDamageBonus = 2147483648.0
    tier.level = 100
    tier.enchantmentValue = 0
    tier.repairIngredient = '#kubejs:repair_item/instakill'
  })
})
