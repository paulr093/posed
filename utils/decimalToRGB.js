export default function DecimalToRGB(r, g, b, condition) {
    r = r * 255
    g = g * 255
    b = b * 255
    var rgb = {r: r, g: g, b: b}

    if (condition) {
        return "rgb(" + r + "," + g + "," + b + ")"
    } else {
        return rgb
    }

 }