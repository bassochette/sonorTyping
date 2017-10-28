const noteFrequency = (noteNumber) => Math.pow(2, (noteNumber-9)/12) * 432

// Interval Pattern
const minor = [1,0.5,1,1,0.5,1,1]
const major = [1,1,0.5,1,1,1,0.5]
const pintaMajor = [1,1,1.5,1,1.5]
const pintaMinor = [0.5,1,1,1.5,0.5]
const diminished = [1,0.5,1,0.5,1,0.5,1,0.5]
const harmoniqueMinor = [1,0.5,1,1,0.5,1,1]
const melodiqueMinor = [1,0.5,1,1,1,1,0.5]
const blues = [1.5,0.5,1,1,1.5,1]

const scaleOnXOctaves = (x, pattern) => {
  let base = -10
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


const scale = scaleOnXOctaves(3, pintaMajor)

module.exports = {
  noteFrequency,
  scale
}
