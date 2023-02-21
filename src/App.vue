<template>
  <div>
    <Header />
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar
  }
}
</script>

<style>
:root {
  --cl-black: #000;
  --cl-light-gray: #7F7F7F;
  --cl-dark-gray: #4A4B4C;
  --cl-time: #5E5F61;
  --cl-white: #fff;
  --cl-orange: #F78B3B;
  --cl-blue: #7296EC;
  --cl-light-blue: #DCE6FF;
  --cl-lang: #A6A6A6;
  --cl-btn-bg: #EAEAEA;
  --cl-card-bg: #F6F6F6;
  --cl-border: #D1D1D1;
  --cl-course-icon: #2959CE;
  --cl-course-value: #555555;
  --cl-placeholder: #8D8D8D;
}
</style>