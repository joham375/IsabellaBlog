<template>
    <div class="home-page">
        <h1>Welcome to Isabella's Blog</h1>
        <p>This is the homepage. Stay tuned for updates!</p>

        <div class="about">
            <h2>About Isabella's Blog</h2>
            <p>Isabella's Blog is a space for sharing thoughts, ideas, and stories. Join us on this journey!</p>
        </div>

        <div class="featured-posts">
            <h2>Featured Posts</h2>
            <ul>
                <li><a href="/Post/1">Post 1</a></li>
                <li><a href="/Post/2">Post 2</a></li>
                <li><a href="/Post/3">Post 3</a></li>
            </ul>
        </div>

        <div class="recent-posts">
            <h2>Recent Posts</h2>
            <ul>
                <li><a href="/Post/A">Post A</a></li>
                <li><a href="/Post/B">Post B</a></li>
                <li><a href="/Post/C">Post C</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
.home-page {
    max-width: 600px;
    margin: 40px auto;
    padding: 24px;
    background: #e479a5;
    border-radius: 8px;
    border: 10px solid #c30b23;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    text-align: center;
}
</style>