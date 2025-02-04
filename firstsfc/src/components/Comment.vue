<template>
  <div>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.name }}: {{ comment.comment }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

const comments = ref([]);

async function getComments() {
  try {
    const { data, error } = await supabase.from('comments').select();

    if (error) {
      console.error("Error fetching comments:", error);
    } else {
      comments.value = data || [];
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}

onMounted(getComments);
</script>

<style scoped>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}
</style>