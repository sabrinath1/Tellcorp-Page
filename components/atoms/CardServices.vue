<script setup lang="ts">
const props = defineProps<{
  title: string;
  color: "white" | "white-green";
  content: string;
}>();
</script>
<template>
  <div
    class="flex-col justify-center items-center rounded-lg border-2 px-6 h-80 lg:h-72 2xl:h-60 backdrop-blur-sm bg-secondary/30"
    :class="{
      'border-white': props.color === 'white',
      'border-secondary': props.color === 'white-green',
    }"
  >
    <h4 class="text-white font-semibold flex justify-center pt-6">
      {{ props.title }}
    </h4>
    <div
      class="flex text-white text-justify font-normal w-full justify-center my-6"
    >
      {{ props.content }}
    </div>
  </div>
</template>
