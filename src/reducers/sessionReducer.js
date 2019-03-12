

const fromCities = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_CITIES':
      return {
        ...state,
        ...action.result
      };
    default:
      return state;
  }
};


export default fromCities;
