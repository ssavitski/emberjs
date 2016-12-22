import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
    dataEditorController: Ember.inject.controller('data-editor'),

	actions: {
        onSaveItem() {
            const name = this.get('name');
            const value = this.get('value');
            const dataEditorCtrl = this.get('dataEditorController');
            const _self = this;

            if (_.isEmpty(_.trim(name)) || _.isEmpty(_.trim(value))) {
                console.warn('Items can\'t be empty');
                return;
            }

            const newItem = this.store.createRecord('data-item', { name, value, });

            newItem.save().then(() => {
                _self.setProperties({
                    name: '',
                    value: '',
                });

                let tableItems = dataEditorCtrl.get('dataItems').toArray();
                dataEditorCtrl.set('tableItems', tableItems);

                console.log('Action > New Item has been saved');
            });
        },

        onCloseItem() {
            console.log('Action > Form with add item has been canceled');

            this.setProperties({
                name: '',
                value: '',
            });

            this.transitionToRoute('data-editor');
        },
    },
});
