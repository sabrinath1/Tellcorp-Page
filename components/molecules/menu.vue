<script setup lang="ts">
import type { MenuOption } from "naive-ui";

const activeKey = ref(null);
const menuOptions = ref<MenuOption[]>([
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Sobre",
    key: "about",
  },
  {
    label: "Soluções",
    key: "solutions",
  },
  {
    label: "Contato",
    key: "contact",
  },
]);
const route = useRouter();
function handleSelect(event: any) {
  route.push("#" + event);
}
</script>

<template>
  <div class="flex-col justify-center items-center font-bold block lg:hidden">
    <n-menu
      class="!font-bold !text-white"
      v-model:value="activeKey"
      mode="vertical"
      :options="menuOptions"
      :inverted="true"
      :on-update:value="handleSelect"
    />
  </div>
  <div class="flex-col justify-center items-center hidden lg:block">
    <n-menu
      class="!font-semibold text-base"
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
      :on-update:value="handleSelect"
    />
  </div>
</template>
