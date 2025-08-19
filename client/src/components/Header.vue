<template>
  <header class="header">
    <h1 v-if="loggedIn" @click.stop.prevent="goTo('HomePage')">Izzy Blog</h1>
    <h1 v-if="!loggedIn" @click.stop.prevent="goTo('')">Izzy Blog</h1>
    <div class="buttons">
      <button v-if="loggedIn" @click.stop.prevent="goTo('HomePage')">Home</button>
      <button v-if="loggedIn" @click.stop.prevent="goTo('Blog')">Blog</button>
      <!-- <button @click.stop.prevent="goTo('Profile')">Profile</button> -->
      <button v-if="izzyAccount" @click.stop.prevent="goTo('IzzyPortal')">IzzyPortal</button>
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
      loggedIn: true,
      izzyAccount: true,
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
