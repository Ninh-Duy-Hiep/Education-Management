<template>
  <DefaultLayout>
    <h1>Quản lý bằng cấp</h1>

    <div class="d-flex justify-content-between gap-3">
      <div class=" flex-grow-1">
        <section v-if="loading">Đang tải danh sách bằng cấp...</section>
        <table v-else class="shadow table table-bordered">
          <thead>
            <tr class="text-center">
              <th class="w-10">STT</th>
              <th class="w-25">Tên bằng cấp</th>
              <th class="w-10">Kí hiệu</th>
              <th class="w-10">Hệ số</th>
              <th class="w-45">Thao tác</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="(degree, index) in degrees" :key="degree.id">
              <td>{{ index + 1 }}</td>
              <td>{{ degree.name }}</td>
              <td>{{ degree.symbol_name }}</td>
              <td>{{ degree.coefficient }}</td>
              <td>
                <div class="d-flex gap-2 justify-content-center align-items-center">
                  <button class="border-0 p-1 btn-update" @click="handleUpdate(degree.id)">Cập nhật</button>
                  <button class="border-0 p-1 btn-delete" @click="handleDelete(degree.id)">Xoá</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <DegreeForm @created="onDegreeCreated" />
    </div>

  </DefaultLayout>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import DegreeForm from '@/components/DegreeForm.vue';
import { degreeService, Degree } from '@/services/degreeService';

const degrees = ref<Degree[]>([]);
const loading = ref(false);


async function fetchDegrees() {
  loading.value = true;
  try {
    const data = await degreeService.getDegrees();
    degrees.value = data;
  } catch (error) {
    alert('Lấy danh sách bằng cấp thất bại');
    console.error(error);
  } finally {
    loading.value = false;
  }
}

async function handleUpdate(id:number) {
}


async function handleDelete(id: number) {
  if (!confirm('Bạn có chắc chắn muốn xoá bằng cấp này?')) return;

  try {
    await degreeService.deleteDegree(id);
    degrees.value = degrees.value.filter(degree => degree.id !== id);
  } catch (error) {
    alert('Xoá bằng cấp thất bại');
    console.error(error);
  }
}

onMounted(() => {
  fetchDegrees();
});

function onDegreeCreated(newDegree: Degree) {
  degrees.value.push(newDegree);
}
</script>

<style scoped></style>
