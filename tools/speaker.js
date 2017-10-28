const Speaker = require('speaker')

const speaker = new Speaker({
  channels: 2,
  bitDepth: 8,
  sampleRate: 44100
})

module.exports = speaker
