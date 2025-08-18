<template>
    <div class="post">
        <!-- Post content goes here -->
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
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
            }
        };
    },
    methods: {
        // Component methods
    }
};
</script>

<style scoped lang="scss">
.post {
    /* Component styles */
    background-color: red;
}
</style>