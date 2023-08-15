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
        itemTextColorInverted: "#FFFFFFFF",
        itemTextColorHoverInverted: "#3cc8c3",
        itemTextColorActiveInverted: "#FFFFFFFF",
        itemColorActiveInverted: "#071C42",
        itemColorActiveHoverInverted: "#071C42",
        itemTextColorHorizontalInverted: "#FFFFFFFF",
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
