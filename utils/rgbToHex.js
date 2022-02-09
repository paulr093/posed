import componentToHex from "./componentToHex";

export default function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
 }