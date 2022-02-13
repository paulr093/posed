import create from "zustand"

export const activeModel = create((set) => ({
   label: "Low Poly Rocket",
   setLabel: (action) => set(() => ({ label: action })),
   colors: {},
   setColors: (action) => set(() => ({ colors: action })),
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
