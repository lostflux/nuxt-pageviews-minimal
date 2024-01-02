<script lang="ts" setup>
const views = await usePageViews()
</script>

<template>
  <div>
    <div>Blog views: {{ views }}</div>
  </div>
</template>
