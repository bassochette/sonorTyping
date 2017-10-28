#!/usr/bin/env node

// Npm dependencies
const ioHook = require('iohook')
const tone = require('tonegenerator')

// tool
const { randomItemInArray } = require('./tools/meh.js')
const speaker = require('./tools/speaker');
const { noteFrequency, scale } = require('./tools/scaleGenerator');

const SHAPES = [
  "sine",
  "triangle",
  "saw",
  "square"
];

ioHook.on(
  "keyup",
  event => {
    const freq = scale[event.rawcode] ? scale[event.rawcode] : randomItemInArray(scale);
    const sound = tone({
      freq,
      lengthInSecs: 0.2,
      volume: tone.MAX_8,
      sampleRate: 44100,
      shape: 'sine'
    });

    const data = Uint8Array.from(sound, (val) => val+128);
    const buffer = new Buffer(data);
    speaker.write(buffer);
  }
)
ioHook.start();
