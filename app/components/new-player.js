import Ember from 'ember';

export default Ember.Component.extend({
  savePlayer() {
    var params = {
      god: this.get('god'),
      lives: 3,
      level: 1,
      wonLevels: []
    };
    this.sendAction('savePlayer', params);
  }
})
