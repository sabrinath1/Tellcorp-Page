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
        itemTextColorInverted: "#071C42",
        itemTextColorHoverInverted: "#3cc8c3",
        itemTextColorActiveInverted: "#0000CD",
        itemColorActiveInverted: "#071C42",
        itemColorActiveHoverInverted: "#071C42",
        itemTextColorHorizontalInverted: "#00FA9A",
        itemTextColorHoverHorizontalInverted: "#3cc8c3",
        itemTextColorActiveHorizontalInverted: "#071C42",
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
