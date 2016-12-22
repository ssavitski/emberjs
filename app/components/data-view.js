import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onDeleteItem(item) {
            let id = item.get('id');
        	this.sendAction('deleteItem', id);
        },
    },
});
