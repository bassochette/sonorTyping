#!/usr/bin/env node
// Npm dependencies
const ioHook = require('iohook')
const tone = require('tonegenerator')

// tool
const { randomItemInArray } = require('./tools/meh.js')
const speaker = require('./tools/speaker');
const { speed, getCurrentFrequency } = require('./tools/speed');

const chordsProgression = require('./partitions/lesYeuxNoirs');

const SHAPES = [
  "sine",
  "triangle",
  "saw",
  "square"
];

const mappedKeyInScale = (key, scale) => {
  return scale[key] ? scale[key] : randomItemInArray(scale)
}

let beat = -1
let signature = 4;
let mesure = 0;
let scale = chordsProgression[mesure]
ioHook.on(
  "keydown",
  event => {
    beat += 1
    if (beat % signature === 0) {
      beat = 0
      if (mesure === chordsProgression.length-1) {
        mesure = 0
      } else mesure += 1;
    }
    const freq = mappedKeyInScale(event.rawcode, chordsProgression[mesure]);

    const sound = tone({
      freq,
      lengthInSecs: speed(),
      volume: tone.MAX_16/8,
      sampleRate: 44100,
      shape: 'sine'
    })

    const data = Int16Array.from(sound)
    const buffer = new Buffer(data.length*2)
    data.forEach(function (value, index) {
      buffer.writeInt16LE(value, index * 2)
    })

    speaker.write(buffer);
  }
)
ioHook.start();
