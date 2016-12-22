import Ember from 'ember';
import _ from 'lodash/lodash';

export function output_data(data) {
	let outputData = _.map(data[0], (item, index) => {
		return item.toJSON();
	});

    return JSON.stringify(outputData, null, 4);
};

export default Ember.Helper.helper(output_data);