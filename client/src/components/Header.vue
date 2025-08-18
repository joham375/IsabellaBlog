<template>
    <header class="header">
        <h1>Izzy Blog</h1>
        <button @click.stop.prevent="signOut">Sign Out</button>
        <button @click.stop.prevent="goTo('Profile')">Profile</button>
        <button @click.stop.prevent="goTo('Blog')">Blog</button>
        <button @click.stop.prevent="goTo('IzzyPortal')">IzzyPortal</button>
        <button @click.stop.prevent="goTo('HomePage')">Home</button>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        signOut() {
            // Handle sign out logic
            this.$router.push('/');
        },
        goTo(page) {
            this.$router.push(`/${page}`);
        }
    }
}
</script>

<style scoped>
.header {
    background: #e479a5;
    position: fixed;
    margin: none;
}
</style>