import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
        onEditItem(id) {
            const name = this.get('model.name');
            const value = this.get('model.value');
            const _self = this;

            this.store.findRecord('data-item', id).then(function(item) {
        		item.set('name', name);
        		item.set('value', value);

        		item.save();
        		_self.transitionToRoute('data-editor');
        		console.log('Action > Item has been modified');
            }, function(error) {

            });

            this.setProperties({
            	name: '',
            	value: '',
            });
        },

        onCloseItem() {
            console.log('Action > Form with edited item has been canceled without saving');

            this.transitionToRoute('data-editor');
        },
    }
});
