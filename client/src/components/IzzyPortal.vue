<template>
  <div class="izzy-portal">
    <h2>Welcome to IzzyPortal</h2>
    <button @click="openModal = true">Create Blog</button>

    <!-- Blog modal -->
    <BlogPost 
      v-if="openModal" 
      @close="openModal = false" 
    />
  </div>
</template>

<script>
import BlogPost from '../modals/BlogPost.vue';

export default {
  name: "IzzyPortal",
  components: { BlogPost },
  data() {
    return {
      openModal: false,
    };
  }
};
</script>
