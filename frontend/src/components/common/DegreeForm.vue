<template>
  <form @submit.prevent="onSubmit">
    <label for="degreeName">Tên bằng cấp:</label>
    <input id="degreeName" v-model="name" type="text" placeholder="Nhập tên bằng cấp" required />

    <label for="degreeCoefficient">Hệ số bằng cấp:</label>
    <input id="degreeCoefficient" v-model.number="coefficient" type="number" placeholder="Nhập hệ số bằng cấp" required
      min="0" step="0.01" />

    <button type="submit" :disabled="loading">
      {{ loading ? 'Đang gửi...' : 'Tạo mới' }}
    </button>
  </form>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { degreeService, Degree } from '@/services/degreeService'

  const loading = ref(false)
  const name = ref('')
  const coefficient = ref<number | null>(null)

  const emit = defineEmits<{
    (e: 'created', degree: Degree): void
  }>()

  async function onSubmit() {
    if (!name.value.trim() || coefficient.value === null) {
      alert('Vui lòng nhập đầy đủ thông tin')
      return
    }

    loading.value = true
    try {
      const payload = {
        name: name.value.trim(),
        coefficient: coefficient.value,
      }
      console.log('Payload gửi lên:', payload);
      const newDegree = await degreeService.createDegree(payload)
      emit('created', newDegree)
      name.value = ''
      coefficient.value = null
    } catch (error) {
      alert('Tạo bằng cấp thất bại')
      console.error(error)
    } finally {
      loading.value = false
    }
  }
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
  }

  input {
    padding: 8px;
    font-size: 1rem;
  }

  button {
    padding: 8px;
    font-weight: 600;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>
