<script setup lang="ts">
const props = defineProps<{
  name: string;
  color: "blue" | "white-green";
}>();
</script>
<template>
  <div class="flex flex-row mt-6 relative -z-30">
    <h2
      class="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto md:mx-10 text-center my-4 font-mono"
      :class="{
        'text-primary': props.color === 'blue',
        'text-secondary': props.color === 'white-green',
      }"
    >
      {{ props.name }}
    </h2>
  </div>
</template>
