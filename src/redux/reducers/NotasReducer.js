import { types } from "../types/types";


const initialState = {
    notas: []
}

export const NotasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.agregar:
            return {
                ...state,
                notas: [...state.notas, action.payload]
            }
        case types.borrar:
            return {
                ...state,
                notas: state.notas.filter(nota => nota.nota.id !== action.payload)
            }

        default:
            return state
    }
}