import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);
    console.log(this._super(...arguments));
    this.replaceWith('rentals');
  }
});
// With our two static pages in place, we are ready to add our home page which
// welcomes users to the site. At this point our main page in our application is
// our rentals page, for which we've already created a route. So we want our
// index route to simply forward to the rentals route we've already created.
