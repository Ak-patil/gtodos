import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todos', function() {
    this.route('edit', {path:'edit/:todos_id'});
    });
  this.route('create');
  this.route('tableview');
  this.route('table');
});

export default Router;
