<template>
  <div>
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
      <div class="form-group">
        <label for="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          v-model.trim="name" 
          required 
          class="form-control"
          placeholder="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea 
          id="comment" 
          v-model.trim="comment" 
          required 
          class="form-control"
          placeholder="Write your comment..."
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
        {{ isSubmitting ? 'Submitting...' : 'Submit' }}
      </button>
      <div v-if="submissionStatus" :class="statusClass" class="mt-2">
        {{ submissionStatus }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

const name = ref('');
const comment = ref('');
const submissionStatus = ref(null);
const isSubmitting = ref(false);

async function submitComment() {
  // Prevent empty submissions (after trimming)
  if (!name.value || !comment.value) {
    submissionStatus.value = "Please fill out all fields.";
    return;
  }

  submissionStatus.value = "Submitting...";
  isSubmitting.value = true;

  try {
    const { data, error } = await supabase
      .from('comments')
      .insert([{ name: name.value, comment: comment.value }]);

    if (error) {
      console.error("Error inserting comment:", error);
      submissionStatus.value = "❌ Error submitting comment. Please try again.";
    } else {
      submissionStatus.value = "✅ Comment submitted successfully!";
      name.value = '';  // Clear the name field after submission
      comment.value = '';  // Clear the comment field after submission
    }
  } catch (err) {
    console.error("Unexpected error:", err);  // Handle unexpected errors
    submissionStatus.value = "❌ An unexpected error occurred. Please try again later.";
  } finally {
    isSubmitting.value = false;  // Reset the submitting status
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.mt-2 {
  margin-top: 10px;
  font-weight: bold;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>