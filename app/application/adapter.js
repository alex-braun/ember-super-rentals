// import ActiveModelAdapter from 'active-model-adapter';
//
// export default ActiveModelAdapter.extend({
// });

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api'
});
