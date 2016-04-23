import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  name: DS.attr(),
  image: DS.attr(),
  details: DS.attr()
});
