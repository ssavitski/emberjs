import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { name: 'name1', value: 'value1' },
            { name: 'name2', value: 'value2' }
        ];
    }
});
