<template>
  <div class="login-form">
    <h2>Đăng nhập</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Tên đăng nhập:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <div>
      <p>Chưa có tài khoản? <router-link to="/register">Đăng ký ngay</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        // Gửi yêu cầu đăng nhập tới API
        const response = await axios.post("http://localhost:3000/api/accounts/login", {
          username: this.username,
          password: this.password
        });

        // Lưu token vào localStorage nếu đăng nhập thành công
        localStorage.setItem("auth_token", response.data.token);

        this.$router.push("/dashboard");
      } catch (error) {
        this.errorMessage = error.response?.data?.error || "Đăng nhập không thành công";
      }
    }
  }
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.error {
  color: red;
}
</style>
