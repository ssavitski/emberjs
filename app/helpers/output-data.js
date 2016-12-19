import Ember from 'ember';

export function output_data(data) {
    return JSON.stringify(data[0], null, 4);
};

export default Ember.Helper.helper(output_data);