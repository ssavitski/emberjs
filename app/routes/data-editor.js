import Ember from 'ember';

const { Route, set } = Ember;

export default Route.extend({
	model() {
		return this.store.findAll('data-item');
	},

	setupController(controller, model) {
		set(controller, 'dataItems', model);
		set(controller, 'tableItems', model.toArray());
		set(controller, 'codeItems', model.toArray());
	},
});
