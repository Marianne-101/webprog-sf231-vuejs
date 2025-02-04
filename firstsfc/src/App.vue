<template>
  <div>
    <h1>My App</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(import.meta.env.VITE_SUPABASE_URL);  // This should log the URL
    console.log(import.meta.env.VITE_SUPABASE_KEY);  // This should log the key
  },
};
</script>
