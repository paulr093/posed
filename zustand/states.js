import create from "zustand"

export const activeModel = create((set) => ({
   label: "Low Poly Rocket",
   setLabel: (action) => set(() => ({ label: action })),
   colors: {},
   setColors: (action) => set(() => ({ colors: action })),
   metalness: 0,
   setMetalness: (action) => set(() => ({ metalness: action })),
   roughness: 0.5,
   setRoughness: (action) => set(() => ({ roughness: action })),
}))

export const authData = create((set) => ({
   loading: false,
   setLoading: (action) => set(() => ({ loading: action })),
   userData: {},
   setUserData: (action) => set(() => ({ userData: action })),
}))

export const renderSettings = create((set) => ({
   contactShadow: {
      show: true,
      shadowBlur: 1.5,
      shadowOpacity: 0.5,
      shadowRes: 256,
      focalLength: 10,
   },
   scene: {
      intensity: 0.5,
      environment: "studio.hdr",
   },

   setContactShadow: (action) => set(() => ({ contactShadow: action })),
   setScene: (action) => set(() => ({ scene: action })),
}))

export const modelTransforms = create((set) => ({
   // Set this to true to show transforms in Sidebar
   show: false,
   setShow: (action) => set(() => ({ show: action })),

   // head
   head: { x: 0, y: 0, z: 0 },
   setHead: (action) => set(() => ({ head: action })),

   // body
   body: { x: 0, y: 0, z: 0 },
   setBody: (action) => set(() => ({ body: action })),

   // arms
   upperArmL: { x: 0, y: 0, z: -1.5 },
   upperArmR: { x: 0, y: 0, z: 1.5 },
   lowerArmL: { x: 0, y: 0, z: 0 },
   lowerArmR: { x: 0, y: 0, z: 0 },
   setUpperArmL: (action) => set(() => ({ upperArmL: action })),
   setUpperArmR: (action) => set(() => ({ upperArmR: action })),
   setLowerArmL: (action) => set(() => ({ lowerArmL: action })),
   setLowerArmR: (action) => set(() => ({ lowerArmR: action })),

   // legs
   upperLegR: { x: 3.15, y: 1.5, z: 0 },
   upperLegL: { x: -3.15, y: -1.5, z: 0 },
   lowerLegR: { x: 0, y: 0, z: 0 },
   lowerLegL: { x: 0, y: 0, z: 0 },
   setUpperLegR: (action) => set(() => ({ upperLegR: action })),
   setUpperLegL: (action) => set(() => ({ upperLegL: action })),
   setLowerLegR: (action) => set(() => ({ lowerLegR: action })),
   setLowerLegL: (action) => set(() => ({ lowerLegL: action })),
}))

// Stripe
export const stripeData = create((set) => ({
   priceId: null,
   setPriceId: (action) => set(() => ({ priceId: action })),
}))
