export default (state = null, action) => {
  switch(action.type) {

    case 'select_library':
      return action.payload;

    // return last state
    default:
      return state;

  }
};
