import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onSyncCodeEditor() {
            this.sendAction('syncTableToCode');
            console.log('Action > Syncronize with code editor');
        },

        onSyncDataView() {
            this.sendAction('syncCodeToTable');
            console.log('Action > Syncronize with data view');
        },
    }
});
