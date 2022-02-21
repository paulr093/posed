export function MaterialObj(materials) {
   const materialRoughness = Object.keys(materials).map((material) => ({ [material]: materials[material].roughness }))
   const roughness = Object.assign({}, ...materialRoughness)
   const materialMetalness = Object.keys(materials).map((material) => ({ [material]: materials[material].metalness }))
   const metalness = Object.assign({}, ...materialMetalness)

   return { roughness, metalness }
}
