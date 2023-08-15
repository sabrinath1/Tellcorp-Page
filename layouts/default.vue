<template>
  <div class="drawer bg-primary">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <OrganismsHeader />

      <div class="mb-20 mt-20">
        <slot></slot>
      </div>
      <OrganismsFooter />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3  " class="drawer-overlay"></label>
      <MoleculesMenuMobile />
    </div>
  </div>
</template>
