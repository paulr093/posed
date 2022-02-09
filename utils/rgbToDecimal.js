export default function RGBtoDecimal(r, g, b) {
    r = r / 255
    g = g / 255
    b = b / 255
    var rgbDecimal = { r: r, g: g, b: b }

    return rgbDecimal
 }