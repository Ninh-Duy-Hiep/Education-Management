<template>
  <form @submit.prevent="onSubmit" class="p-3 rounded-4 shadow-lg">
    <label for="degreeName">Tên bằng cấp:</label>
    <input class="p-2 rounded-3" id="degreeName" v-model="name" type="text" placeholder="Nhập tên bằng cấp" required />
    <div v-if="errorName" class="error-message">{{ errorName }}</div>

    <label for="symbolName">Kí hiệu:</label>
    <input class="p-2 rounded-3" id="symbolName" v-model="symbolname" type="text" placeholder="Nhập kí hiệu" required />
    <div v-if="errorSymbolName" class="error-message">{{ errorSymbolName }}</div>

    <label for="degreeCoefficient">Hệ số bằng cấp:</label>
    <input class="p-2 rounded-3" id="degreeCoefficient" v-model.number="coefficient" type="number"
      placeholder="Nhập hệ số bằng cấp" required min="0" step="0.01" />

    <button class="p-2 border-0 rounded-3" type="submit" :disabled="loading">
      {{ loading ? 'Đang gửi...' : 'Tạo mới' }}
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { degreeService, Degree } from '@/services/degreeService'


const loading = ref(false)
const name = ref('')
const symbolname = ref('')
const coefficient = ref<number | null>(null)

const errorName = ref('');
const errorSymbolName = ref('');

const emit = defineEmits<{
  (e: 'created', degree: Degree): void
}>()

async function onSubmit() {
  if (!name.value.trim() || coefficient.value === null) {
    alert('Vui lòng nhập đầy đủ thông tin')
    return
  }

  loading.value = true

  errorName.value = '';
  errorSymbolName.value = '';

  try {
    const payload = {
      name: name.value.trim(),
      symbol_name: symbolname.value.trim().toUpperCase(),
      coefficient: coefficient.value,
    }
    // console.log('Payload gửi lên:', payload);
    const newDegree = await degreeService.createDegree(payload)
    emit('created', newDegree)
    name.value = ''
    symbolname.value = ''
    coefficient.value = null
  } catch (err: any) {

    errorName.value = '';
    errorSymbolName.value = '';

    if (err.response?.data?.error) {
      const errorMsg = err.response.data.error;

      if (errorMsg.includes('Không được trùng tên bằng !')) {
        errorName.value = errorMsg;
      } else if (errorMsg.includes('Không được trùng tên kí hiệu !')) {
        errorSymbolName.value = errorMsg;
      }
    } else {
      errorName.value = 'Tạo bằng cấp thất bại';
    }
  }
  finally {
    loading.value = false;
  }
}

</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  width: 100%;
  background-color: white;
}

input:focus {
  outline: none;
}

button {
  background-color: var(--color-submit);
  color: white;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
