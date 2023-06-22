export const ADD_FAV = "addFav"
export const REMOVE_FAV = "removeFav"

export const addFav = (char)=>{
    return {type:ADD_FAV,
        payload:char}
}
export const removeFav = (id)=>{
    return {type:REMOVE_FAV,
        payload:id}
}
