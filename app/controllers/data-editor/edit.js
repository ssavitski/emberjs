import Ember from 'ember';

export default Ember.Controller.extend({
    dataEditorController: Ember.inject.controller('data-editor'),

	actions: {
        onEditItem(id) {
            const name = this.get('model.name');
            const value = this.get('model.value');
            const dataEditorCtrl = this.get('dataEditorController');
            const _self = this;

            this.store.findRecord('data-item', id).then(item => {
        		item.set('name', name);
        		item.set('value', value);

        		item.save().then(() => {
                    _self.setProperties({
                        name: '',
                        value: '',
                    });

                    let tableItems = dataEditorCtrl.get('dataItems').toArray();
                    dataEditorCtrl.set('tableItems', tableItems);

                    _self.transitionToRoute('data-editor');
                    console.log('Action > Item has been modified');
                });
            }, error => {

            });
        },

        onCloseItem() {
            console.log('Action > Form with edited item has been canceled without saving');

            this.transitionToRoute('data-editor');
        },
    }
});
