<template>
  <div class="izzy-portal">
    <h2>Welcome to IzzyPortal</h2>

    <div class="profile section">
      <div class="details">
        <h3>Profile Information</h3>
        <p>Username: {{ $store?.state?.user?.username || "admin" }}</p>
        <p>Website Title: {{ siteTitle }}</p>
        <p>Website Description: {{ siteDescription }}</p>
      </div>
      <div class="update-details section">
        <p>Update Homepage Details</p>
        <input type="text" placeholder="Enter Website Title" v-model="siteTitle" />
        <textarea placeholder="Enter Website Description" v-model="siteDescription"></textarea>
        <button @click.stop.prevent="saveProfile">Save</button>
      </div>
    </div>

    <div class="create-blog section">
      <p>Create a new blog post</p>
      <button @click="openModal = true">Create Blog</button>
      <div class="new-blog">
        <p>New Blog Post</p>
        <button @click.stop.prevent="createPost">Publish Blog</button>
      </div>
    </div>

    <div class="edit-posts section">
      <p>Edit existing blog posts</p>
      <ul>
        <li v-for="post in blogPosts" :key="post.id">
          <span>{{ post.title }}</span>
          <button @click="editPost(post)">Edit</button>
        </li>
      </ul>
    </div>

    <!-- Blog modal -->
    <BlogPost v-if="openModal" @close="openModal = false" />
  </div>
</template>

<script>
import BlogPost from "../modals/BlogPost.vue";

export default {
  name: "IzzyPortal",
  components: { BlogPost },
  data() {
    return {
      openModal: false,
      siteTitle: "",
      siteDescription: "",
      blogPosts: [], // added to prevent errors if empty
    };
  },
  methods: {
    saveProfile() {
      const profileData = {
        website_title: this.siteTitle,
        website_description: this.siteDescription,
      };
      const username = this.$store?.state?.user?.username || "admin";

      this.$http
        .post("/api/izzy_profile", { ...profileData, username })
        .then((response) => {
          console.log("Profile saved:", response.data);
        })
        .catch((error) => {
          console.error("Error saving profile:", error);
        });
    },
    editPost(post) {
      this.$router.push(`/Post/${post.id}`);
    },
    createPost() {
      // Handle create post logic
    },
  },
};
</script>

<style lang="scss">
.izzy-portal {
  padding: 2rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  background-color: var(--secondary-colour);
  min-width: 90vw;

  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .section {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border: 2px solid black;
    border-radius: 0.5rem;
    background-color: var(--background-colour);
  }

  .profile {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;

    .details {
      flex: 1 1 40%;
      padding: 1rem;
      border-radius: 0.5rem;
      background-color: var(--background-colour);
    }

    .update-details {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      input,
      textarea {
        padding: 0.5rem;
        border: 1px solid var(--border-colour);
        border-radius: 0.25rem;
        font-size: 1rem;
      }

      button {
        align-self: flex-start;
        padding: 0.5rem 1rem;
        background-color: var(--primary-colour);
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: background 0.2s ease;

        &:hover {
          background-color: var(--tertiary-colour);
        }
      }
    }
  }

  .create-blog {
    margin-top: 2rem;

    button {
      margin-top: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: var(--primary-colour);
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;

      &:hover {
        background-color: var(--tertiary-colour);
      }
    }

    .new-blog {
      margin-top: 1rem;
      padding: 1rem;
      border: 1px dashed var(--border-colour);
      border-radius: 0.5rem;
    }
  }

  .edit-posts {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem;
        margin-bottom: 0.5rem;
        border: 1px solid var(--border-colour);
        border-radius: 0.25rem;
        background-color: var(--background-colour);

        button {
          padding: 0.25rem 0.75rem;
          background-color: var(--primary-colour);
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;

          &:hover {
            background-color: var(--tertiary-colour);
          }
        }
      }
    }
  }
}
</style>
