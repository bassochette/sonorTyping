require('chai').should()
const { noteFrequency, scale } = require('./scaleGenerator')

describe(
  "notes frequency generation",
  () => {
    it(
      "noteFrequency return frequencies",
      () => {
          for(let i = -100; i < 100; i++) {
            const freq = noteFrequency(i);
            freq.should.be.a("number")
            freq.should.be.above(0)
          }
      }
    )
    it(
      "scale generate enough notes for the whole keyboard",
      () => {
        scale.length.should.be.above(128);
      }
    )
  }
)
