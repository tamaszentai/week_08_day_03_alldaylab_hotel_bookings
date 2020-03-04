<template lang="html">
  <div class="">
    <booking v-for="booking, index in bookings" :key="index" :booking="booking" />

  </div>
</template>

<script>
import { eventBus } from '../main';
import GuestService from '../services/GuestService'
import Booking from './Booking';

export default {
  name: "bookings-grid",
    data() {
        return {
          bookings: []
        }
    },
    components: {
      'booking': Booking
    },
    mounted(){
      this.fetchData();
      eventBus$on('booking-added', booking => this.bookings.push(booking));
    },
    methods: {
        fetchData(){
          GuestService.getGuests()
          .then(bookings => this.bookings = bookings);
        }
    }

}
</script>

<style lang="css" scoped>
</style>
