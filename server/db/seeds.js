use hotel_bookings;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Michael English",
    email: "me@gmail.com",
    checkid: true
  },
  {
    name: "Laura Alexander",
    email: "la@gmail.com",
    checkid: false
  },
  {
    name: "John Doe",
    email: "jd@gmail.com",
    checkid: true
  },
]);
