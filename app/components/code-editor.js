import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
    codeElement: null,

    didInsertElement() {
        this._super(...arguments);
        this.set('codeElement', this.$().find('#data-code'));
        this.sendAction('action', this.get('codeElement'));
    },
});
