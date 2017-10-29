const noteFrequency = (noteNumber) => Math.pow(2, (noteNumber-9)/12) * 432
const patterns = require('./patterns')

const notes = {
  'C3': -25,
  'C#3': -23,
  'D3': -22,
  'D#3': -21,
  'E3': -20,
  'F3': -19,
  'F#3': -18,
  'G3': -17,
  'G#3': -16,
  'A3': -15,
  'A#3': -14,
  'B3': -13,
  'C4': -12,
  'C#4': -11,
  'D4': -10,
  'D#4': -9,
  'E4': -8,
  'F4': -7,
  'F#4': -6,
  'G4': -5,
  'G#4': -4,
  'A4': -3,
  'A#4': -2,
  'B4': -1,
  'C5': 0,
  'C#5': 1,
  'D5': 2,
  'D#5': 3,
  'E5': 4,
  'F5': 5,
  'F#5': 6,
  'G5': 7,
  'G#5': 8,
  'A5': 9,
  'A#5': 10,
  'B5': 11,
  'C6': 12
};

const scaleOnXOctaves = (x, pattern, base = 0) => {
  let scale = [noteFrequency(base)]
  for (x; x!==0; x--) {
      pattern.forEach(
        (interval) => {
          base += interval
          scale.push(noteFrequency(base))
        }
      );
  }

  while (scale.length < 140 ) {
    scale = scale.concat(scale)
  }
  return scale
}

const scale = scaleOnXOctaves(2, patterns.pintaMajor, notes.C4);

module.exports = {
  noteFrequency,
  scaleOnXOctaves,
  notes,
  patterns,
  scale
}
