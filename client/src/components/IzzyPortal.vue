<template>
  <div class="izzy-portal">
    <h2>Welcome to IzzyPortal</h2>
    <div class="details">
      <input type="text" placeholder="Enter Website Title" v-model="siteTitle" />
      <textarea placeholder="Enter Website Description" v-model="siteDescription"></textarea>
      <button @click.stop.prevent="saveProfile">Save</button>
    </div>
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
      siteTitle: "",
      siteDescription: "",
    };
  },
  methods: {
    saveProfile() {
      // Save the profile information
      const profileData = {
        website_title: this.siteTitle,
        website_description: this.siteDescription
      };
      const username = this.$store?.state?.user?.username || "admin";

      this.$http.post("/api/izzy_profile", { ...profileData, username })
        .then(response => {
          console.log("Profile saved:", response.data);
        })
        .catch(error => {
          console.error("Error saving profile:", error);
        });
    }
  }
};
</script>
