import Ember from 'ember';

export function sum(params/*, hash*/) {
	let sum = 0, v;
	
	for (let i = 0; i < params.length; i++) {
		v = parseFloat(params[i]);
		if (!isNaN(v)) sum += v;
	}
	
	return sum;
}

export default Ember.Helper.helper(sum);
