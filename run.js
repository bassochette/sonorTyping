#!/usr/bin/env node
// Npm dependencies
const ioHook = require('iohook')
const tone = require('tonegenerator')

// tool
const { randomItemInArray } = require('./tools/meh.js')
const speaker = require('./tools/speaker');
const { noteFrequency, scale } = require('./tools/scaleGenerator');
const { speed } = require('./tools/speed');

const SHAPES = [
  "sine",
  "triangle",
  "saw",
  "square"
];

const mappedKeyInScale = (key, scale) => {
  return scale[key] ? scale[key] : randomItemInArray(scale)
}
ioHook.on(
  "keydown",
  event => {
    const freq = mappedKeyInScale(event.rawcode, scale);
    const sound = tone({
      freq,
      lengthInSecs: speed(),
      volume: tone.MAX_16,
      sampleRate: 44100,
      shape: 'sine'
    });

    const data = Int16Array.from(sound)
    const buffer = new Buffer(data.length*2);
    data.forEach(function (value, index) {
      buffer.writeInt16LE(value, index * 2)
    })

    speaker.write(buffer);
  }
)
ioHook.start();
