<template lang="html">
  <div class="booking">
      <h2>Name: {{booking.name}}</h2>
      <h2>Email: {{booking.email}}</h2>
      <h2>Checked In?: {{booking.checkbox}}</h2>
      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
  </div>
</template>

<script>
import BookingService from '../services/GuestService';
import { eventBus } from '../main';

export default {
  name: "booking",
  props: ['booking'],
  methods: {
      handleDelete(id) {
          GuestService.deleteGuest(id)
          .then(res => eventBus.$emit('booking-delete', id ));
      }
    }
}
</script>

<style lang="css" scoped>
</style>
