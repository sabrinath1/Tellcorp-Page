<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <n-button
    type="primary"
    ghost
    text-color="#fff"
    @click="() => social.redirect('whatsapp')"
  >
    <slot></slot>
  </n-button>
</template>
