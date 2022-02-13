export default function DecimalToRGB(r, g, b, stringify) {
    r = r * 255
    g = g * 255
    b = b * 255
    var rgb = {r: r, g: g, b: b}

    if (stringify) {
        return "rgb(" + r + "," + g + "," + b + ")"
    } else {
        return rgb
    }

 }