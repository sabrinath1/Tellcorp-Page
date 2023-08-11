<script setup lang="ts">
const props = defineProps<{
  imgMobile: string;
}>();
const social = useSocialRedirect();
</script>
<template>
  <div
    :style="{ backgroundImage: `url(${props.imgMobile})` }"
    class="hero mb-10 block lg:hidden mt-4"
  >
    <div class="text-center text-neutral-content h-[20rem] w-full px-5">
      <div class="flex-col text-center ml-48 md:ml-80 md:w-1/2">
        <h1 class="mb-5 text-4xl font-bold pt-24 text-white">
          Solução em Alimentação Industrial
        </h1>
        <div class="">
          <button
            class="btn bg-secondary text-white border-secondary hover:bg-secondary"
            @click="social.redirect('whatsapp')"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
