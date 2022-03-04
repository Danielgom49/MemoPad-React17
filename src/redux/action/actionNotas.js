import { types } from "../types/types"


export const AddNotas = (nota) => {
    return {
        type: types.agregar,
        payload: nota
    }
}

export const Borrar = (id) => {
    return {
        type: types.borrar,
        payload: id
    }
}

export const CompleteDelete = (nota) => {
    return {
        type: types.completeDelete,
        payload: nota
    }
}