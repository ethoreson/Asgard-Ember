import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('player');
  },
  actions: {
    savePlayer(params) {
      var player = this.store.createRecord('player', params);
      player.save();
      this.transitionTo('midgard');
    }
  }
});
