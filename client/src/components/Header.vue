<template>
  <header class="header">
    <h1>Izzy Blog</h1>
    <div class="buttons">
      <button @click.stop.prevent="goTo('HomePage')">Home</button>
      <button @click.stop.prevent="goTo('Blog')">Blog</button>
      <button @click.stop.prevent="goTo('Profile')">Profile</button>
      <button @click.stop.prevent="goTo('IzzyPortal')">IzzyPortal</button>
      <button v-if="loggedIn" @click.stop.prevent="signOut">Sign Out</button>
      <button v-else @click.stop.prevent="goTo('LoginPage')">Login</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    signOut() {
      // Handle sign out logic
      this.$router.push("/");
    },
    goTo(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  background: var(--primary-colour);
  position: fixed;
  margin: none;
  display: flex;
  justify-content: space-between;
  .buttons {
    display: flex;
    gap: 1rem;
    margin: 1rem;
    button {
      border: 1px solid var(--secondary-colour);
      background-color: var(--secondary-colour);
      color: var(--text-colour);
      border-radius: 0.25rem;
    }
  }
}
</style>
