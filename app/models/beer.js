import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  style: DS.attr(),
  image: DS.attr(),
  awardwinner: DS.attr()
});
