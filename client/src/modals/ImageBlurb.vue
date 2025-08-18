<template>
    <div class="image-blurb">
        <!-- Image and blurb content goes here -->
    </div>
</template>

<script>
export default {
    name: 'ImageBlurb',
    props: {
        imageUrl: {
            type: String,
            required: false,
            default: ''
        },
        blurb: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>

<style scoped>
.image-blurb {
    /* Add your styles here */
}
</style>