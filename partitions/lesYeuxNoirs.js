const { notes, scaleOnXOctaves, patterns } = require('../tools/scaleGenerator')

// const ApintaMinor = scaleOnXOctaves(2, patterns.minor, notes.A4);
const Amajor = scaleOnXOctaves(2, patterns.major, notes['A4'])
const DminDiminished = scaleOnXOctaves(2, patterns.diminished, notes['D4'])
const AsharpPintaMajor = scaleOnXOctaves(2, patterns.pintaMajor, notes['A#4'])
const Gm = scaleOnXOctaves(2, patterns.minor, notes['G5'])

const lesYeuxNoirs = [
    Amajor,
    Amajor,
    DminDiminished,
    DminDiminished,
    Amajor,
    Amajor,
    AsharpPintaMajor,
    AsharpPintaMajor,
    Gm,
    Gm,
    DminDiminished,
    DminDiminished,
    AsharpPintaMajor,
    AsharpPintaMajor,
    DminDiminished,
    DminDiminished
]

module.exports = lesYeuxNoirs;
