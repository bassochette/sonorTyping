const { notes, scaleOnXOctaves, patterns } = require('../tools/scaleGenerator')

const ApintaMinor = scaleOnXOctaves(2, patterns.minor, notes.A4);
const DpintaMinor = scaleOnXOctaves(2, patterns.minor, notes.D4);
const EpintaMajor = scaleOnXOctaves(2, patterns.pintaMajor, notes.E4);

const chordsProgression = [
  ApintaMinor,
  ApintaMinor,
  DpintaMinor,
  DpintaMinor,
  EpintaMajor,
  EpintaMajor
]

module.exports = chordsProgression
