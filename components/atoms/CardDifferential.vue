<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
}>();
</script>
<template>
  <div class="w-full mx-auto flex lg:flex-row justify-center my-4">
    <div class="flex justify-center lg:justify-start mx-auto">
      <img
        src="/img/check.png"
        alt="Foto do Escritório"
        class="w-12 h-12 justify-center"
      />
    </div>
    <div class="flex-col w-full my-auto font-normal text-justify mb-6">
      <h3 class="flex px-4 text-secondary font-bold text-xl py-2 justify-start">
        {{ props.title }}
      </h3>
      <p
        class="w-full px-4 justify-end font-sans text-lg text-white font-normal text-justify xl:text-2xl"
      >
        {{ props.content }}
      </p>
    </div>
  </div>
</template>
