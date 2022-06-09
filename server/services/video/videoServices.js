const fs = require('fs-extra')

export async function appendMetaDataFile(data) {
  const { title, playerNames, characters, round } = data
  const json = {
    title: `${title} - ${playerNames.p1} [${characters.p1}] VS ${playerNames.p2} [${characters.p2}] - ${round}`,
  }

  const string = JSON.stringify(json) + '\n'
  fs.appendFile('test.txt', string)
}

// appendMetaDataFile({
//   title: 'test',
//   playerNames: { p1: 'eeeee', p2: 'allo' },
//   characters: { p1: 'Roy, Zelda', p2: 'Mewtwo' },
//   round: 'Winners Quarter',
// })
