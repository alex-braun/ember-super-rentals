import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list-rentals');

// We want the main focus of our site to be selecting rentals, so we plan to
// redirect traffic going to the root URL /, to our rentals route.
// We can create a simple test using our test helpers to verify this:

// The visit helper loads the route specified for the given URL.
// The andThen helper waits for all previously called test helpers to complete
//before executing the function you provide it. In this case, we need to wait
//for the page to load after visit, so that we can assert that the listings
//are displayed.
// currentURL returns the URL that test application is currently visiting.

test('should redirect to rentals route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });
});

// To check that rentals are listed, we'll first visit the index route and
// check that the results show 3 listings:
// The test assumes that each rental element will have a CSS class called
//listing.
test('should list available rentals.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});

// we want to verify that clicking the about and contact page links successfully
// load the proper URLs. We'll use the click helper to simulate a user clicking
// these links. After the new screen loads, we just verify that the new URL
// matches our expectation using the currentURL helper.
test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

// We anticipate having an input field in a container with a class of list-filter.
// We will fill out "Seattle" as the search criteria in that field and send a key
// up event to trigger our filtering action. Since we control our data, we know
// that there is only one rental with a city of "Seattle", so we assert that the
// number of listings is one and that its location is "Seattle".
test('should filter the list of rentals by city.', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'seattle');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(find('.listing').length, 1, 'should show 1 listing');
    assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should contain 1 listing with location Seattle');
  });
});

// we want to verify that we can click on a specific rental and load a detailed
// view to the page. We'll click on the title and validate that an expanded
// description of the rental is shown.
test('should show details for a specific rental', function (assert) {
  visit('/rentals');
  click('a:contains("Grand Old Mansion")');
  andThen(function() {
    assert.equal(currentURL(), '/rentals/grand-old-mansion', "should navigate to show route");
    assert.equal(find('.show-listing h2').text(), "Grand Old Mansion", 'should list rental title');
    assert.equal(find('.description').length, 1, 'should list a description of the property');
  });
});
