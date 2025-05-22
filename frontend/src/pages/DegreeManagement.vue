<template>
  <DefaultLayout>
    <h1>Quản lý bằng cấp</h1>

    <DegreeForm @created="onDegreeCreated" />

    <section v-if="loading">Đang tải danh sách bằng cấp...</section>

    <ul v-else>
      <div>
        <li v-for="degree in degrees" :key="degree.id">
          {{ degree.name }} - {{ degree.coefficient }}
        </li>
      </div>
    </ul>
  </DefaultLayout>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import DefaultLayout from '@/layouts/DefaultLayout.vue';
  import DegreeForm from '@/components/common/DegreeForm.vue';
  import { degreeService, Degree } from '@/services/degreeService';

  const degrees = ref<Degree[]>([]);
  const loading = ref(false);

  async function fetchDegrees() {
    loading.value = true;
    try {
      const data = await degreeService.getDegrees();
      console.log('Degrees API:', data);
      degrees.value = data;
    } catch (error) {
      alert('Lấy danh sách bằng cấp thất bại');
      console.error(error);
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    fetchDegrees();
  });

  function onDegreeCreated(newDegree: Degree) {
    degrees.value.push(newDegree);
  }
</script>

<style scoped>
</style>
