import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('beer', { awardwinner: true }).then((result) =>{
    	return result;
    });
  }
});
