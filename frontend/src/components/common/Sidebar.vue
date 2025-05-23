<template>
  <div class="d-flex">
    <aside class="sidebar shadow-lg">
      <nav>
        <div class="d-flex justify-content-center align-items-center mt-3">
          <img src="@/assets/images/Group.avif" class="logo" alt="Logo" />
        </div>
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
  a {
    text-decoration: none;
    transition: 0.4s;
    padding: 3px;
  }
  .logo {
    width: 100px;
    height: auto;
    object-fit: contain;
  }
  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: var(--color-sidebar);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .sidebar ul li {
    width: 100%;
    cursor: pointer;
    color: var(--icon-sidebar);
  }
  .sidebar ul li:hover {
    background: var(--hover-sidebar);
  }
</style>
