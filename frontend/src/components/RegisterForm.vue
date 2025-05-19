<template>
  <div class="register-form">
    <h2>Đăng ký</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Tên đăng nhập:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <div>
        <label for="confirmPassword">Xác nhận mật khẩu:</label>
        <input type="password" v-model="confirmPassword" id="confirmPassword" required />
      </div>
      <div>
        <label>Quyền:</label>
        <div>
          <input type="radio" id="admin-truong" value="AdminTruong" v-model="role" />
          <label for="admin-truong">AdminTruong</label>
        </div>
        <div>
          <input type="radio" id="admin-khoa" value="AdminKhoa" v-model="role" />
          <label for="admin-khoa">AdminKhoa</label>
        </div>
        <div>
          <input type="radio" id="giao-vien" value="GiaoVien" v-model="role" />
          <label for="giao-vien">GiaoVien</label>
        </div>
      </div>

      <button type="submit">Đăng ký</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <div>
      <p>Đã có tài khoản <router-link to="/login">Đăng nhập</router-link> </p>
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
      confirmPassword: "",
      role: "",
      errorMessage: ""
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Mật khẩu không khớp";
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/api/accounts/register", {
          username: this.username,
          password: this.password,
          role: this.role
        });
        console.log(response);
        this.$router.push("/login");
      } catch (error) {
        this.errorMessage = error.response?.data?.message || "Đăng ký không thành công";
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}

label {
  width: 100px;
}
</style>
