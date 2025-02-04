<template>
  <h1>Comments</h1>
  <ul>
    <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
  </ul>
</template>

<script></script>

<style>
#app>div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}
</style>

<script setup>
  import { supabase } from '../utils/supabase'
  import { ref, onMounted } from 'vue'

  // Define the todos ref with correct typing if needed
  const todos = ref([])

  async function getTodos() {
    const { data, error } = await supabase.from('todos').select()
    if (error) {
      console.error(error)  // Log the error if something goes wrong
      return
    }
    todos.value = data
  }

  onMounted(() => {
    getTodos()  // Call getTodos when the component is mounted
  })
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
  </ul>
</template>