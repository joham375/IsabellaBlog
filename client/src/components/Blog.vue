<template>
  <div class="blog">
    <h1>Blog Component</h1>
    <ul class="blog-posts">
      <li 
        v-for="post in posts" 
        :key="post.id" 
        @click.stop.prevent="goToPost(post.id)"
      >
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      posts: [
        { id: 1, title: "First Post", content: "This is the content of the first post." },
        { id: 2, title: "Second Post", content: "This is the content of the second post." },
        { id: 3, title: "Third Post", content: "This is the content of the third post." },
        { id: 4, title: "Fourth Post", content: "This is the content of the fourth post." },
        { id: 5, title: "Fifth Post", content: "This is the content of the fifth post." },
        { id: 6, title: "Sixth Post", content: "This is the content of the sixth post." },
        { id: 7, title: "Seventh Post", content: "This is the content of the seventh post." },
        { id: 8, title: "Eighth Post", content: "This is the content of the eighth post." },
        { id: 9, title: "Ninth Post", content: "This is the content of the ninth post." },
        { id: 10, title: "Tenth Post", content: "This is the content of the tenth post." },
        { id: 11, title: "Eleventh Post", content: "This is the content of the eleventh post." },
        { id: 12, title: "Twelfth Post", content: "This is the content of the twelfth post." }
      ],
    };
  },
  methods: {
    goToPost(id) {
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style scoped lang="scss">
.blog {
  padding: 2rem;

  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .blog-posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      background-color: var(--primary-colour);
      padding: 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      h2 {
        margin: 0 0 0.5rem 0;
        font-size: 1.2rem;
      }

      p {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.4;
        color: #333;
      }
    }
  }
}
</style>
