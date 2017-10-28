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


const pattern = pintaMinor
let base = -10

const scale = [noteFrequency(base)].concat(pattern.map(
  (interval) => {
    base += interval
    return noteFrequency(base)
  }
))

console.log(scale);

module.exports = {
  noteFrequency,
  scale
}
