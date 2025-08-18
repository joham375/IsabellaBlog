<template>
    <div class="login-page">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="email">Email:</label>
                <input id="email" v-model="email" type="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input id="password" v-model="password" type="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleLogin() {
            // Handle login logic here
            alert(`Logging in as ${this.email}`);

            this.$router.push({ path: '/HomePage' });
        }

    }
}
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