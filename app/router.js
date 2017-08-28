import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('midgard');
  this.route('alfheim');
  this.route('svartalfheim');
  this.route('niflheim');
  this.route('muspelheim');
  this.route('vanaheim');
  this.route('jotunheim');
  this.route('hel');
  this.route('asgard');
});

export default Router;
