const initialState = {
    value: 0
};
  
function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_VALUE' :
            return Object.assign({}, state, {
                value: state.value + 1
            });
        
        case 'SUBTRACT_VALUE' :
            return Object.assign({}, state, {
                value: state.value - 1
            });

        default: 
            return state;
    }
};

export default rootReducer;