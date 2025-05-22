<template>
  <div class="layout">
    <Sidebar />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from '@/components/common/Sidebar.vue';
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}
.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
}
</style>
