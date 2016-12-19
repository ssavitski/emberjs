import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onAddItem() {
            console.log('Item has been added');
        },

        onEditItem() {
            console.log('Item has been edited');
        },

        onDeleteItem() {
            console.log('Item has been deleted');
        },
    }
});
