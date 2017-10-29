const { notes, scaleOnXOctaves, patterns } = require('../tools/scaleGenerator')

// const ApintaMinor = scaleOnXOctaves(2, patterns.minor, notes.A4);
const Amajor = scaleOnXOctaves(2, patterns.major, notes['A3'])
const DminDiminished = scaleOnXOctaves(2, patterns.diminished, notes['D3'])
const AsharpPintaMajor = scaleOnXOctaves(2, patterns.pintaMajor, notes['A#3'])
const Gm = scaleOnXOctaves(2, patterns.minor, notes['G3'])

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
