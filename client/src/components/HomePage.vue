<template>
  <div class="home-page">
    <div class="content">
      <img src="../../placeholder.jpg" alt="Placeholder Image" />
      <div class="about">
        <h2>Title {{ siteTitle }}</h2>
        <p>Description{{ siteDescription }}</p>
        <div class="fav-pics">
          <img src="../../placeholder.jpg" alt="Favorite Pictures" />
        </div>
      </div>
    </div>
    <div class="blog-posts">
      <h2>Fav Blog Posts</h2>
      <ul class="fav-posts">
        <li><img src="../../placeholder.jpg" alt="Blog Post 1" />Blog Post 1</li>
        <li><img src="../../placeholder.jpg" alt="Blog Post 2" />Blog Post 2</li>
        <li><img src="../../placeholder.jpg" alt="Blog Post 3" />Blog Post 3</li>
      </ul>
    </div>
    <div class="blog-posts">
      <h2>Recent Blog Posts</h2>
      <ul class="recent-posts">
        <li>Blog Post 1</li>
        <li>Blog Post 2</li>
        <li>Blog Post 3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      siteTitle: "",
      siteDescription: "",
    };
  },
  mounted() {
    this.fetchProfile();
  },
  methods: {
    async fetchProfile() {
      try {
        const res = await fetch("http://localhost:5001/api/izzy_profile");
        const data = await res.json();
        this.siteTitle = data.website_title || "Default Title";
        this.siteDescription = data.website_description || "Default description";
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    },
  },
};
</script>

<style scope lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-width: 100vw;
  overflow: auto;
  .content {
    display: flex;
    flex-direction: row;
    .about {
      background-color: var(--tertiary-colour);
      min-width: 40%;
      margin: 1rem;
      padding: 5rem;
    }
  }
  .blog-posts {
    margin-top: 2rem;
    width: 100%;
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: row;
      li {
        width: 10rem;
        height: 10rem;
        margin: 1rem;
        padding: 0.5rem 0;
        background-color: var(--tertiary-colour);
        border-bottom: 1px solid var(--border-colour);
        img{
            max-width: 8rem;
        }
      }
    }
  }
}
</style>
