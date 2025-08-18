<template>
  <form @submit.prevent="signup">
    <input v-model="username" placeholder="Username" />
    <input v-model="password" placeholder="Password" type="password" />
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            username: "",
            email: "",
            password: ""
        };
    },
    methods: {
        async signup() {
            const res = await fetch("http://localhost:5001/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: this.username, password: this.password }),
            });
            const data = await res.json();
            alert(data.message || data.error);
        }
    }
};
</script>

<style scoped>
.register-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
}
</style>
