<script setup lang="ts">
const props = defineProps<{
  name: string;
  color: "blue" | "white-green";
}>();
const social = useSocialRedirect();
</script>
<template>
  <div class="flex">
    <button
      class="text-white hover:text-secondary rounded-lg w-auto h-10 flex justify-center items-center px-6 font-semibold"
      :class="{
        'bg-primary': props.color === 'blue',
        'bg-secondary': props.color === 'white-green',
      }"
      @click="() => social.redirect('whatsapp')"
    >
      {{ props.name }}
    </button>
  </div>
</template>
