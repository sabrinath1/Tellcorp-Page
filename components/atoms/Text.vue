<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();
</script>
<template>
  <div
    class="flex text-white text-justify text-base font-normal w-full justify-center my-6"
  >
    {{ props.content }}
  </div>
</template>
