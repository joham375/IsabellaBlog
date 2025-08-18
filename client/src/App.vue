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
#app{
  min-width: 100vw;
  overflow: auto;
}
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1000;
}

:root {
  --primary-colour: #e479a5;
  --secondary-colour: #f5f5f5;
  --tertiary-colour: #f4f4f4;
  --action-colour: #3bafda;
  --text-colour: #2e2f35;
  --secondary-text-colour: #fff;
  --warning-colour: #f44336;
  --banner-colour: #2e2f35;
  --border-colour: #ecf2f8;
  --hover-colour: #ededed;
  --opacity-background: rgba(0, 0, 0, 0.3);
  --box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
}
</style>
