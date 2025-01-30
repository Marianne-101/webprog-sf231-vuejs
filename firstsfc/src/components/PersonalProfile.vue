<template>
    <h1>Personal Profile Web Page</h1>
    <div class="box-container">
      <div class="box" v-for="(section, index) in sections" :key="index" @click="toggleContent(index)">
        {{ section.title }}
        <div class="content" v-show="activeIndex === index">
          <h2>{{ section.title }}</h2>
          <p v-if="section.type === 'text'">{{ section.content }}</p>
          <ul v-else-if="section.type === 'list'">
            <li v-for="(item, idx) in section.content" :key="idx">{{ item }}</li>
          </ul>
          <div v-else-if="section.type === 'gallery'" class="gallery-container">
            <div class="gallery-item" v-for="(img, idx) in section.content" :key="idx">
              <img :src="img.url" :alt="img.alt">
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: null,
        sections: [
          {
            title: "About Me",
            type: "text",
            content: "Hello! My name is Marianne Ellise P. Lama. I am a computer science student..."
          },
          {
            title: "Education / Achievements",
            type: "list",
            content: [
              "High School: Signal Village National High School",
              "Senior High: Learn & Explore Montessori School",
              "Currently: Asia Pacific College",
              "Graduated High School & Senior High with Honors"
            ]
          },
          {
            title: "IT Experience",
            type: "list",
            content: ["Programming", "Code Combat"]
          },
          {
            title: "Hobbies & Interests",
            type: "list",
            content: ["Camping", "Hiking", "Swimming", "Learning guitar", "Traveling"]
          },
          {
            title: "Goals",
            type: "list",
            content: ["To be successful", "To give back to those who believe in me", "Maintain a healthy lifestyle", "Adventure and exploration"]
          },
          {
            title: "Picture Gallery",
            type: "gallery",
            content: [
              { url: "https://github.com/Marianne-101/Webprog_Personal-Website/blob/main/Images/camping.jpg?raw=true", alt: "Camping" },
              { url: "https://github.com/Marianne-101/Webprog_Personal-Website/blob/main/Images/ocean.jpg?raw=true", alt: "Ocean" },
              { url: "https://github.com/Marianne-101/Webprog_Personal-Website/blob/main/Images/picture%20of%20me.jpg?raw=true", alt: "My Picture" }
            ]
          }
        ]
      };
    },
    methods: {
      toggleContent(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      }
    }
  };
  </script>  