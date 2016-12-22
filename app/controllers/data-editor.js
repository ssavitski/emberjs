import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
    codeElement: null,
    jsonIsInvalid: false,

    outputData(data) {
        let outputData = _.map(data, (item, index) => {
            return item.toJSON();
        });

        return JSON.stringify(outputData, null, 4);
    },

    isJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    },

    actions: {
        onDeleteItem(id) {
            var _self = this;

            this.store.findRecord('data-item', id).then((item) => {
                item.deleteRecord();

                item.save().then(() => {
                    let dataItems = _self.get('dataItems').toArray();
                    _self.set('tableItems', dataItems);
                    console.log('Action > Table items size is ', _self.get('tableItems').length);
                });

                console.log('Action > Item has been deleted');
            });
        },

        onSetLinkOnTextarea(element) {
            this.set('codeElement', element);
        },

        onTableSyncCode() {
            let tableItems = this.get('tableItems');
            this.set('codeItems', tableItems);
            this.get('codeElement')[0].value = this.outputData(this.get('codeItems'));
            this.set('jsonIsInvalid', false);
        },

        onCodeSyncTable() {
            let str = this.get('codeElement')[0].value;
            const _self = this;

            if (this.isJsonString(str)) {
                let jsonStr = JSON.stringify(eval("(" + str + ")"));
                let json = JSON.parse(jsonStr);
                this.set('jsonIsInvalid', false);

                this.store.findAll('data-item').then(items => {
                    var i = 0;
                    var count = items.toArray().length;
                    _.each(items.toArray(), (item, index) => {
                        item.deleteRecord();
                        item.save().then(function() {
                            i++;

                            if (count === i) {
                                var j = 0;
                                var size = json.length;

                                _.each(json, (item, index) => {
                                    let newItem = _self.store.createRecord('data-item', item);
                                    newItem.save().then(() => {
                                        j++;
                                        if (size === j) {
                                            let dataItems = _self.get('dataItems');
                                            _self.set('tableItems', dataItems);
                                        }
                                    });
                                });
                            }
                        });
                    });
                    console.log(items);
                }, error => {

                });

                console.info('JSON in the editor is valid!');
            } else {
                this.set('jsonIsInvalid', true);
                console.warn('JSON in the editor is not valid!');
            }
        },
    },
});
