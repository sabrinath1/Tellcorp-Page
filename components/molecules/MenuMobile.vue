<script setup lang="ts">
const social = useSocialRedirect();
</script>

<template>
  <div
    class="menu p-4 w-80 bg-primary/60 backdrop-blur-sm text-base-content z-50 h-full"
  >
    <div class="flex justify-end">
      <label
        for="my-drawer-3"
        class="btn btn-circle bg-white text-primary hover:bg-white"
      >
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 512 512"
        >
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
          />
        </svg>
      </label>
    </div>
    <div class="flex mt-10 justify-start">
      <MoleculesMenu />
    </div>
    <div class="flex my-10 justify-center">
      <button
        class="btn bg-primary text-white hover:bg-secondary"
        @click="social.redirect('whatsapp')"
      >
        Solicitar Orçamento
      </button>
    </div>
    <div class="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
      <AtomsButtonInstagram />

      <AtomsButtonWhatsapp />
    </div>
  </div>
</template>
