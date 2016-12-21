import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
	store: Ember.inject.service(),

    actions: {
        onDeleteItem(item) {
        	let store = this.get('store');
            let data = this.get('data');
            let id = item.get('id');
            let _self = this;
        	
        	store.findRecord('data-item', id).then((item) => {
        		item.deleteRecord();
        		item.save();
                _.each(data, (item, index) => {
                    if (_.isMatch(item, { id })) {
                        data.splice(index, 1);
                    }
                });
                _self.set('data', data);
                _self.itemChanged(id);
        		console.log('Action > Item has been deleted');
        	});
        },
    },

    itemChanged: function(id) {
        this.$().find(`#${id}`).remove();
    },
});
