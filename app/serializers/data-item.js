import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	 serialize(snapshot, options) {
	    var json = this._super(...arguments);

	    console.log('JSON >', json);

	    return json;
	},
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		payload = { 'data-items': payload }

		console.log('Data items: ', payload);

		return this._super(store, primaryModelClass, payload, id, requestType);
	},
});