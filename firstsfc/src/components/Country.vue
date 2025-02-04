<template>
  <div>
    <h1>Countries</h1>
    <ul v-if="countries.length">
      <li v-for="country in countries" :key="country.id">
        {{ country.name }}
      </li>
    </ul>
    <p v-else>No countries found.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

const countries = ref([]);

async function getCountries() {
  try {
    const { data, error } = await supabase.from('countries').select();
    if (error) {
      console.error("Error fetching countries:", error);
      countries.value = [];
    } else {
      countries.value = data || [];
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    countries.value = [];
  }
}

onMounted(() => {
  getCountries();
});
</script>

<style scoped>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}

ul {
  padding-left: 20px;
}

li {
  list-style-type: square;
}
</style>