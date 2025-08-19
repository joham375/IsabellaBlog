<template>
  <div class="container">
    <form @submit.prevent="login" class="login">
      <input v-model="username" placeholder="Username" type="text" />
      <input v-model="password" placeholder="Password" type="password" />
      <button type="submit">Login</button>
      <div v-if="error" class="error">{{ error }}</div>
      <a href="/RegisterPage">Don't have an account? Sign up</a>
    </form>
  </div>
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
        this.$router.push({ path: "/HomePage" });
      } else {
        alert(data.error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  background-color: red;
  min-width: 50%;
  min-height: 50%;
  margin: auto;
  padding: 10rem;
  display: flex;
  justify-content: center;
}
</style>
