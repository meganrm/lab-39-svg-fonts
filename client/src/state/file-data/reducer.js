
export default (state = [], { type, payload }) => {
  switch (type) {
    case 'INIT':
      return payload || [];
    case 'CREATE':
      return [...state, payload];
    case 'UPDATE':
      return state.map(item => (item.id === payload.id ? payload : item));
    case 'DELETE':
      console.log(payload);
      return state.filter(item => (item._id !== payload));
    default:
      return state;
  }
};
