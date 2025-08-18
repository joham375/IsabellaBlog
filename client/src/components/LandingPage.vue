<template>
    <div class="landing-page">
        <h1>Welcome to Isabella's Blog</h1>
        <p>Your journey starts here.</p>
        <div>
            <button @click.stop.prevent="goToLogin">Login</button>
            <button @click.stop.prevent="goToRegister">Register</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LandingPage',
    
    methods: {
        goToLogin() {
            this.$router.push({ path: '/LoginPage' });
        },
        goToRegister() {
            this.$router.push({ path: '/RegisterPage' });
        }
    }
};
</script>

<style scoped>
.landing-page {
    text-align: center;
    margin-top: 50px;
    font-size: 1.5rem;
}
</style>