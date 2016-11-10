// import { moduleFor, test } from 'ember-qunit';
//
// moduleFor('route:index', 'Unit | Route | index', {
//   // Specify the other units that are required for this test.
//   // needs: ['controller:foo']
// });
//
// test('it exists', function(assert) {
//   let route = this.subject();
//   assert.ok(route);
// });

// Since all we want to do is transition to rentals, our unit test will make
// sure that the route's replaceWith method is called with the desired route.
// replaceWith is similar to the route's transitionTo function, the difference
// being that replaceWith will replace the current URL in the browser's history,
// while transitionTo will add to the history. Since we want our rentals route
// to serve as our home page, we will use the replaceWith function. We'll verify
// that by stubbing the replaceWith method for the route and asserting that the
// rentals route is passed when called.

import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('should transition to rentals route', function(assert) {
  let route = this.subject({
    replaceWith(routeName) {
      assert.equal(routeName, 'rentals', 'replace with route name rentals');
    }
  });
  route.beforeModel();
});
