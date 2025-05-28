ItemEvents.tooltip(event => {
  event.addAdvanced('minecraft:player_head', (item, advanced, text) => {
    let playerName = item.nbt?.SkullOwner?.Name
    if (playerName) {
      text.add(Text.red(`The head of $==={playerName}===`))
  }})
  
})
