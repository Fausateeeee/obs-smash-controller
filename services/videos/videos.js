const fs = require('fs')

const listenDirectory = () => {
  fs.watch('/home/eeeee/Videos/OBS', (event, file) => {
    console.log(`Event is ${event}`)
    if (file) {
      console.log(`Filename is ${file}`)
    } else {
      console.log(`No file`)
    }
  })
}

export default listenDirectory
