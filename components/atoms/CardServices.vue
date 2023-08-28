<script setup lang="ts">
const props = defineProps<{
  title: string;
  color: "white" | "white-green";
  content: string;
}>();
</script>
<template>
  <div
    class="flex-col -z-50 justify-center items-center rounded-lg border-2 px-6 h-auto lg:h-60 2xl:h-64 backdrop-blur-sm bg-secondary/30 hover:bg-primary/50"
    :class="{
      'border-white': props.color === 'white',
      'border-secondary': props.color === 'white-green',
    }"
  >
    <h4
      class="text-secondary font-semibold flex justify-center text-center pt-6 font-mono text-lg"
    >
      {{ props.title }}
    </h4>
    <div
      class="flex text-white text-justify w-full justify-center my-6 font-light"
    >
      {{ props.content }}
    </div>
  </div>
</template>
