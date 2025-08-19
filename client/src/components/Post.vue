<template>
    <div class="post">
        <!-- Post content goes here -->
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>

        <button v-if="isOwner" @click="editPost">Edit</button>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        // Define your props here
    },
    data() {
        return {
            post: {
                title: 'Sample Post Title',
                content: 'This is the content of the sample post.'
            },
            isOwner: true
        };
    },
    methods: {
        editPost() {
            // Handle edit post logic
            this.$router.push(`/Post/${this.post.id}/edit`);
        }
    }
};
</script>

<style scoped lang="scss">
.post {
    /* Component styles */
    background-color: red;
}
</style>