import DS from 'ember-data';

// Let's add the same attributes for our rental that we used in our hard-coded
// array of JavaScript objects - title, owner, city, type, image, and bedrooms:
export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr()
});
