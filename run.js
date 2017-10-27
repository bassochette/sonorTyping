const ioHook = require('iohook');
const tone = require('tonegenerator');
const Speaker = require('speaker');

/*
 * LA SI DO# MI FA#
 */
const  LA = 432
const SI = 484.90
const DOd = 305.47
const MI = 323.63
const FAd = 363.27

const pintaMajeur = [LA, SI, DOd, MI, FAd];

const speaker = new Speaker({
  channels: 2,
  bitDepth: 16,
  sampleRate: 44100
});

ioHook.on(
  "keyup",
  event => {
    console.log(" key up ", event);
    const sound = tone({
      freq: pintaMajeur[Math.floor(Math.random()*pintaMajeur.length)],
      lengthInSecs: 0.2,
      volume: tone.MAX_8,
      sampleRate: 44100,
      shape: 'triangle'
    }); 

    const data = Uint8Array.from(sound, (val) => val+128);
    const buffer = new Buffer(data);
    speaker.write(buffer);
  }
)

//ioHook.on(
//  "keydown",
//  event => {
//    console.log(" key down ", event);
//  }
//)
ioHook.start();
