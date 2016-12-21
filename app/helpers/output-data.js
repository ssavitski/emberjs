import Ember from 'ember';

export function output_data(data) {
	let outputData = _.map(data, (item, index) => {
		return item.toJSON();
	};

    return JSON.stringify(outputData, null, 4);
};

export default Ember.Helper.helper(output_data);