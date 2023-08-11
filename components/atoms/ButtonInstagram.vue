<script setup lang="ts">
const social = useSocialRedirect();
</script>
<template>
  <n-button
    class="static"
    text
    style="font-size: 30px"
    @click="social.redirect('instagram')"
  >
    <Icon
      name="mdi:instagram"
      class="text-secondary hover:text-primary transition-all"
    />
  </n-button>
</template>
