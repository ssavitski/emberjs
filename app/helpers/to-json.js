import Ember from 'ember';

export function to_json(params) {
  return (params[1] !== 'id') ? params[0].toJSON()[params[1]] : params[0].get(params[1]);
}

export default Ember.Helper.helper(to_json);
