import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.attr(),
  year: DS.attr(),
  category: DS.attr(),
  beer: DS.attr(),
  place: DS.attr(),
  details: DS.attr()
});
