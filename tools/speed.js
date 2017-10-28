let baseSpeed = 1;
let touch = 1;
let start = new Date;
let currentFrequency;

const speed = () => {
  currentFrequency = ++touch / (new Date - start) * 1000
  const s = baseSpeed / currentFrequency
  if (s === 0.4) {
    start = new Date
    touch = 5
  }
  return s > 0.4 ? 0.4 : s
}

const getCurrentFrequency = ()=> currentFrequency
module.exports = {
  speed,
  getCurrentFrequency
}
