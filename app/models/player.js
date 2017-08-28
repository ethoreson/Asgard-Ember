import DS from 'ember-data';

export default DS.Model.extend({
  god: DS.attr(),
  lives: DS.attr(),
  level: DS.attr(),
  wonLevels: DS.attr()
});
