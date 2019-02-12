import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todos');
  this.route('create');
  this.route('create',{path:'create/:id'})
  this.route('edit');
});

export default Router;
