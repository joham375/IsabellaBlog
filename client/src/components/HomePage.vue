<template>
  <div class="home-page">
    <div class="content">
      <img src="../../placeholder.jpg" alt="Placeholder Image" class="image"/>
      <div class="about">
        <h2>Title {{ siteTitle }}</h2>
        <p>Description {{ siteDescription }}</p>
        <div class="fav-pics">
          <img src="../../placeholder.jpg" alt="Favorite Pictures" class="image"/>
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

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-width: 100vw;
  overflow: auto;
  margin-top: 2rem;

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
    justify-content: center;

    .about {
      border: 1px solid var(--border-colour);
      flex: 1 1 300px;
      margin: 1rem;
      padding: 2rem;
      border-radius: 8px;
      background: #fff;
    }

    .image {
      max-width: 300px;
      height: auto;
      border-radius: 8px;
    }
  }

  .blog-posts {
    margin-top: 2rem;
    width: 100%;

    h2 {
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: flex-start;

      li {
        flex: 1 1 calc(25% - 1rem);
        min-width: 150px;
        max-width: 200px;
        height: auto;
        padding: 1rem;
        background-color: var(--tertiary-colour);
        border: 1px solid var(--border-colour);
        border-radius: 8px;
        text-align: center;

        img {
          max-width: 100%;
          height: auto;
          margin-bottom: 0.5rem;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
