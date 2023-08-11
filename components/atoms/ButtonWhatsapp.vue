<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <n-button
    text
    style="font-size: 30px"
    class="static"
    @click="social.redirect('whatsapp')"
  >
    <Icon
      name="mdi:whatsapp"
      class="text-secondary hover:text-primary transition-all"
    />
  </n-button>
</template>
