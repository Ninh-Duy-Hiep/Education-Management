<template>
  <div class="d-flex default-layout">
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
.default-layout {
  background: var(--color-background);
}
.content {
  flex-grow: 1;
  padding: 20px;
  /* background-color: #fff; */
}
</style>
