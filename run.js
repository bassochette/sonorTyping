#!/usr/bin/env node
const ioHook = require('iohook');
const tone = require('tonegenerator');
const Speaker = require('speaker');

/*
 * LA SI DO# MI FA#
 */
const LA = 432
const SI = 484.90
const DOd = 305.47
const MI = 323.63
const FAd = 363.27

const pintaMajeur = [LA, SI, DOd, MI, FAd];

const speaker = new Speaker({
  channels: 2,
  bitDepth: 8,
  sampleRate: 44100
});

const shapes = [
  "sine",
  "triangle",
  "saw",
  "square"
];

const randomIndexInArray = (array) => Math.floor(Math.random()*array.length)

const selectShape = () => shapes[randomIndexInArray(shapes)]

const selectFrequencie = () => pintaMajeur[randomIndexInArray(pintaMajeur)]

ioHook.on(
  "keyup",
  event => {
    const sound = tone({
      freq: selectFrequencie(),
      lengthInSecs: 0.4,
      volume: tone.MAX_8,
      sampleRate: 44100,
      shape: selectShape()
    });

    const data = Uint8Array.from(sound, (val) => val+128);
    const buffer = new Buffer(data);
    speaker.write(buffer);
  }
)
ioHook.start();

