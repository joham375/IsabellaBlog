<template>
    <div class="blog">
        <h1>Blog Component</h1>
        <ul>
            <li v-for="post in posts" :key="post.id" @click.stop.prevent="goToPost(post.id)">
                <h2>{{ post.title }}</h2>
                <p>{{ post.content }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Blog',
    data() {
        return {
            posts: [
                { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
                { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
                { id: 3, title: 'Third Post', content: 'This is the content of the third post.' }
            ]
        };
    },
    methods: {
        goToPost(id) {
            this.$router.push(`/post/${id}`);
        }
    }
};
</script>

<style scoped lang="scss">
.blog {
    padding: 1rem;
    li{
        background-color: red;
    }
}
</style>