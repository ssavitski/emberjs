import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onSyncCodeEditor() {
            console.log('Syncronize with code editor');
        },

        onSyncDataView() {
            console.log('Syncronize with data view');
        },
    }
});
