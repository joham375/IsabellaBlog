<template>
  <Header />  
  <router-view />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  async beforeCreate() {
    const token = await window.localStorage.getItem("token");
    // Comment this out if store not yet configured
    // this.$store.dispatch("setToken", token);
  },
};
</script>

<style>
header {
  background: #e479a5;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

footer {
  background: #f5f5f5;
  position: relative;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1000;
}
</style>
