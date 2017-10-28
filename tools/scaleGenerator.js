const noteFrequency = (noteNumber) => Math.pow(2, (noteNumber-9)/12) * 432

const minor = [2,1,2,2,1,2,2]
const major = [2,2,1,2,2,2,1]
const pintaMajor = [2,2,3,2,3]
const pintaMinor = [1,2,2,3,1]
const diminished = [2,1,2,1,2,1,2,1]
const harmoniqueMinor = [2,1,2,2,1,2,2]
const melodiqueMinor = [2,1,2,2,2,2,1]
const blues = [3,1,2,2,3,2]

let base = -20
const MAX_KEY_CODE = 125
const MIN_KEY_CODE = 1

const pattern = diminished

const o1 = pattern.map(
  (interval) => {
    base += interval
    return noteFrequency(base)
  }
)
const o2 = pattern.map(
  (interval) => {
    base += interval
    return noteFrequency(base)
  }
)
const o3 = pattern.map(
  (interval) => {
    base += interval
    return noteFrequency(base)
  }
)

const o4 = pattern.map(
  (interval) => {
    base += interval
    return noteFrequency(base)
  }
)

const scale = o1
  .concat(o2)
  .concat(o3)
  .concat(o4)
  .concat(o1)
  .concat(o2)
  .concat(o3)
  .concat(o4)
  .concat(o1)
  .concat(o2)
  .concat(o3)
  .concat(o4)
  .concat(o1)
  .concat(o2)
  .concat(o3)
  .concat(o4)
  .concat(o1)
  .concat(o2)
  .concat(o3)
  .concat(o4)
  .concat(o1)
  .concat(o2)
  .concat(o3)
  .concat(o4)

module.exports = {
  noteFrequency,
  scale
}
