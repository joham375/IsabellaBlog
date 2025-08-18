<template>
  <teleport to="body">
    <div class="modal-overlay" @click="$emit('close')"></div>
    <div class="modal-content">
      <button class="action" @click="$emit('close')">Close</button>
      <h2>Blog Post Modal</h2>
      <p>Here’s where you can write a blog post!</p>
      <input type="text" placeholder="Title" />
      <textarea placeholder="Content"></textarea>
      <button class="action" @click="$emit('close')">Submit</button>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "BlogPost",
  emits: ["close"]
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  min-width: 300px;
}
</style>
