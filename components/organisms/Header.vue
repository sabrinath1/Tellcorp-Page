<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <div
    class="w-full navbar bg-primary justify-around fixed h-24 mr-14"
    id="header-top"
  >
    <div class="flex-none lg:hidden">
      <label
        for="my-drawer-3"
        class="btn btn-circle swap swap-rotate bg-primary text-white border-white hover:bg-primary"
      >
        <!-- hamburger icon -->
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

    <div class="flex px-2 mx-2 justify-end pt-3">
      <AtomsLogotipo></AtomsLogotipo>
    </div>

    <div class="flex-none hidden lg:block justify-center items-center">
      <MoleculesMenu></MoleculesMenu>
    </div>

    <div class="flex items-end space-x-4">
      <div class="hidden sm:flex">
        <AtomsButtonContact> Orçamento</AtomsButtonContact>
      </div>
      <button
        class="hidden sm:flex"
        text
        style="font-size: 35px"
        @click="social.redirect('instagram')"
      >
        <Icon name="mdi:instagram" class="text-base-100 transition-all" />
      </button>
      <!-- <button
        class="hidden sm:flex"
        text
        style="font-size: 35px"
        @click="social.redirect('linkedin')"
      >
        <Icon name="mdi:linkedin" class="text-secondary transition-all" />
      </button> -->
    </div>
  </div>
</template>
