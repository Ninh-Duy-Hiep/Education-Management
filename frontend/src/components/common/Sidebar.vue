<template>
  <div class="d-flex">
    <aside class="sidebar">
      <nav>
        <ul class="list-unstyled">
          <li class="d-flex justify-content-between align-items-center p-3">
            <router-link to="/degrees">
              <font-awesome-icon icon="graduation-cap" />
              Quản lý bằng cấp
            </router-link>
            <font-awesome-icon icon="chevron-right" />
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #F9E0AE;
  }
  .sidebar ul li {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
    padding: 3px;
  }
</style>
