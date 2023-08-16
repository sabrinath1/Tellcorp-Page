<script setup lang="ts">
const props = defineProps<{
  title: string;
  color: "white" | "white-green";
  content: string;
}>();
</script>
<template>
  <div
    class="flex-col justify-center items-center rounded-lg border-2"
    :class="{
      'border-white': props.color === 'white',
      'border-secondary': props.color === 'white-green',
    }"
  >
    <h4>{{ props.title }}</h4>
    <div
      class="flex text-white text-justify text-base font-normal w-full justify-center my-6"
    >
      {{ props.content }}
    </div>
  </div>
</template>
