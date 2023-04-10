const initialState = {
    keywords: [],
    activities: [],
    advancedSettings: {},
    generatedNames: [],
  };
  
  const nameGeneratorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_KEYWORDS':
      return {
        ...state,
        keywords: action.payload,
      };
      default:
        return state;
    }
  };
  
  export default nameGeneratorReducer;
  