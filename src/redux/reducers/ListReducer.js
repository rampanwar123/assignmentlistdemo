let INITIAL_STATE = {
 loading:false,
  listData: [],
};

const ListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'list': {
      return {
        ...state,
        listData: action.payload,
      };
    }
    case 'loading': {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default ListReducer;
