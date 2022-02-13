import DecimalToRGB from "./decimalToRGB"
import rgbToHex from "./rgbToHex"

export function setHexFromMaterial(materials) {
    const transform = Object.values(materials).map((material) => {
       const rgb = DecimalToRGB(material.color.r, material.color.g, material.color.b)
       const hex = rgbToHex(Math.floor(rgb.r), Math.floor(rgb.g), Math.floor(rgb.b))

       return hex
    })
    const materialNames = Object.keys(materials)
    const combined = materialNames.map((material, id) => ({ [material]: transform[id] }))
    const reduced = Object.assign({}, ...combined)

    return reduced
 }