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
        itemTextColorHoverInverted: "#a2d785",
        itemTextColorActiveInverted: "#FFFFFFFF",
        itemColorActiveInverted: "#D8394B",
        itemColorActiveHoverInverted: "#D8394B",
        itemTextColorHorizontalInverted: "#FFFFFFFF",
        itemTextColorHoverHorizontalInverted: "#a2d785",
        itemTextColorActiveHorizontalInverted: "#D8394B",
      },

      common: {
        primaryColor: "#ffffff",
        primaryColorPressed: "#A2D785",
        primaryColorHover: "#A2D785",
        textColor2: "#3F3955",
      },
      Button: {
        textColor: "#ffff",
        color: "#A2D785",
      },
    },
  },
});
