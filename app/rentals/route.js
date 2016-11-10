import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('rental');

  }
});
// The model function acts as a hook, meaning that Ember will call it for us
// during different times in our app. The model hook we've added to our rentals
// route handler will be called when a user enters the rentals route.

// let rentals = [{
//   id: 'grand-old-mansion',
//   title: 'Grand Old Mansion',
//   owner: 'Veruca Salt',
//   city: 'San Francisco',
//   type: 'Estate',
//   bedrooms: 15,
//   image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
// }, {
//   id: 'urban-living',
//   title: 'Urban Living',
//   owner: 'Mike TV',
//   city: 'Seattle',
//   type: 'Condo',
//   bedrooms: 1,
//   image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
// }, {
//   id: 'downtown-charm',
//   title: 'Downtown Charm',
//   owner: 'Violet Beauregarde',
//   city: 'Portland',
//   type: 'Apartment',
//   bedrooms: 3,
//   image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
// }];



// When we call this.get('store').findAll('rental'), Ember Data will make a GET
// request to /rentals. You can read more about Ember Data in the Models section.
//
// Since we're using Mirage in our development environment, Mirage will return
// the data we've provided. When we deploy our app to a production server,
// we will need to provide a backend for Ember Data to communicate with.
