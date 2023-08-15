<script setup lang="ts">
const props = defineProps<{
  name: string;
  color: "blue" | "white-green";
}>();
</script>
<template>
  <div class="flex flex-row mt-6">
    <h2
      class="font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl mx-6 md:mx-10 text-center my-4"
      :class="{
        'text-primary': props.color === 'blue',
        'text-secondary': props.color === 'white-green',
      }"
    >
      {{ props.name }}
    </h2>
  </div>
</template>
