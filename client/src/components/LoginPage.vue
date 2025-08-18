<template>
  <form @submit.prevent="login">
    <input v-model="username" placeholder="Username" type="text" />
    <input v-model="password" placeholder="Password" type="password" />
    <button type="submit">Login</button>
    <div v-if="error" class="error">{{ error }}</div>
    <a href="/RegisterPage">Don't have an account? Sign up</a>
  </form>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const res = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: this.username, password: this.password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Logged in as " + data.username);
        this.$store.commit("setUser", { username: data.username });
      } else {
        alert(data.error);
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.login-page h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.login-page form > div {
  margin-bottom: 1rem;
}
.login-page label {
  display: block;
  margin-bottom: 0.5rem;
}
.login-page input {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}
.login-page button {
  width: 100%;
  padding: 0.75rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.login-page button:hover {
  background: #0056b3;
}
</style>
