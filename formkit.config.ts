import { defineFormKitConfig } from "@formkit/vue";
import myTailwindTheme from "./tailwind-theme.js"; // change to your theme's path
import { generateClasses } from "@formkit/themes";
export default defineFormKitConfig({
  config: {
    classes: generateClasses(myTailwindTheme),
  },
});
