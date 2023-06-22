import { ADD_FAV,REMOVE_FAV } from "./actions"

const initialState = {
    myFavorites: []
}

function reducer (state = initialState ,{type,payload}){
    switch(type){
                        // estado base //// pisa la clave myFavorites: con lo que habia ahi mas el payload
        case ADD_FAV: return {...state,  myFavorites: [payload, ...state.myFavorites]}

        case REMOVE_FAV:

            const newFavorites = state.myFavorites.filter((ch) => ch.id !== payload);
              return {
                ...state,
                myFavorites: newFavorites,
              };

        default:
            return state
    }
}

export default reducer