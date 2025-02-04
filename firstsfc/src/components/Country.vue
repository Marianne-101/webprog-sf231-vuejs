<template>
  <div>
    <h2>Countries List</h2>
    <ul>
      <li v-for="country in countries" :key="country.id">
        {{ country.name }}
      </li>
    </ul>
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
    } else {
      countries.value = data || [];
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}

onMounted(getCountries);
</script>

<style scoped>
/* Add relevant styling here */
</style>