<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div class="flex w-full justify-center absolute">
    <div
      class="w-11/12 xl:w-8/12 navbar shadow-lg bg-white justify-between fixed h-16 mt-4 rounded-lg"
    >
      <div class="flex-none lg:hidden z-50">
        <label
          for="my-drawer-3"
          class="btn btn-circle swap swap-rotate bg-white text-primary border-white hover:bg-secondary"
        >
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 512 512"
          >
            <path
              d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
            />
          </svg>
        </label>
      </div>

      <div class="flex px-2 mx-2">
        <AtomsLogotipo></AtomsLogotipo>
      </div>

      <div
        class="flex-none hidden lg:block justify-center items-center text-secondary"
      >
        <MoleculesMenu></MoleculesMenu>
      </div>

      <div class="flex items-end space-x-4 mr-6">
        <button
          class="hidden sm:flex"
          text
          style="font-size: 35px"
          @click="social.redirect('whatsapp')"
        >
          <Icon name="mdi:whatsapp" class="text-primary transition-all" />
        </button>
        <button
          class="hidden sm:flex"
          text
          style="font-size: 35px"
          @click="social.redirect('instagram')"
        >
          <Icon name="mdi:instagram" class="text-primary transition-all" />
        </button>
      </div>
    </div>
  </div>
</template>
