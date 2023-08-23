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
      class="text-white rounded-lg w-auto h-10 flex justify-center items-center px-6 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
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
