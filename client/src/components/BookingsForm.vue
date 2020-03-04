<template lang="html">
  <div class="container">
    <p>Bookings Form</p>
    <form id="bookings-form" v-on:submit="handleSubmit">
      <h2>Create New Booking</h2>
      <div class="formWrap">
        <label for="species">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div class="formWrap">
        <label for="location">Email:</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div class="formWrap">
        <label for="date">Checked in?</label>
        <input type="checkbox" id="checkbox" v-model="checkbox" />
      </div>
      <input type="submit" value="Save" id="save"/>
    </form>
  </div>

</template>

<script>
import {eventBus} from '../main';
import GuestService from '../services/GuestService';
export default {
  name: "bookings-form",
    data(){
        return {
          name: "",
          email: "",
          checkbox: false,
        }
    },
  methods: {
    handleSubmit(evt){
      evt.preventDefault();
      console.log("Values", this.name);
      const payload = {
        name: this.name,
        email: this.email,
        checkbox: this.checkbox,
      };
      GuestService.postGuests(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      })
    }
  }

}
</script>

<style lang="css" scoped>
</style>
