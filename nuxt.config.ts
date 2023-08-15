// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ["@huntersofbook/naive-ui-nuxt", "nuxt-icon", "@formkit/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  naiveUI: {
    themeOverrides: {
      Menu: {
        itemTextColorInverted: "#ffffff",
        itemTextColorHoverInverted: "#3cc8c3",
        itemTextColorActiveInverted: "#0000CD",
        itemColorActiveInverted: "#A0522D",
        itemColorActiveHoverInverted: "#FFDEAD",

        itemTextColorHorizontalInverted: "#00FA9A",
        itemTextColorHoverHorizontalInverted: "#3cc8c3",
        itemTextColorActiveHorizontalInverted: "#FF00FF",
      },

      common: {
        primaryColor: "#ffffff",
        primaryColorPressed: "#3cc8c3",
        primaryColorHover: "#3cc8c3",
        textColor2: "#192335",
      },
      Button: {
        textColor: "#ffff",
        color: "#3cc8c3",
      },
    },
  },
});
