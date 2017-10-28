let baseSpeed = 1;
let touch = 1;
let start = new Date;

const speed = () => {
  frequency = ++touch / (new Date - start) * 1000
  const s = baseSpeed / frequency
  if (s === 0.5) {
    start = new Date
    touch = 5
  }
  return s > 0.5 ? 0.5 : s
}


module.exports = {
  speed
}
