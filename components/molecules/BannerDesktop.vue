<script setup lang="ts">
const props = defineProps<{
  imgDesktop: string;
}>();
const social = useSocialRedirect();
</script>
<template>
  <div
    :style="{ backgroundImage: `url(${props.imgDesktop})` }"
    class="mb-10 hidden lg:block sm:bg-left lg:bg-center mt-4"
  >
    <div
      class="text-center lg:text-end text-neutral-content h-[30rem] w-full px-20"
    >
      <div class="flex-col pt-10">
        <h1
          class="mb-5 text-6xl font-bold pt-24 lg:pt-20 items-center text-white"
        >
          Solução em
        </h1>
        <h3 class="mb-5 text-6xl font-bold text-star text-white">
          Alimentação Industrial
        </h3>
      </div>

      <div class="sm:py-10">
        <button
          class="btn bg-secondary text-white border-secondary hover:bg-secondary"
          @click="social.redirect('whatsapp')"
        >
          Solicitar um Orçamento
        </button>
      </div>
    </div>
  </div>
</template>
