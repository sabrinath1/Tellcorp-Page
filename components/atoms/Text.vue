<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();
</script>
<template>
  <div
    class="flex text-white text-base font-mono w-full justify-center my-6 relative -z-30"
  >
    {{ props.content }}
  </div>
</template>
