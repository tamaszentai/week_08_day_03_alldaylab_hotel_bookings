<template>
  <div id="app">
    <bookings-form/>
    <bookings-grid/>
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';

export default {
  name: 'App',
  components: {
      'bookings-form': BookingsForm,
      'bookings-grid': BookingsGrid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
