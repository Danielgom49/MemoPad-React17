import { combineReducers, createStore } from "redux";
import { NotasReducer } from "../reducers/NotasReducer";
import { obtenerStateStorage, guardarStateStorage } from '../../localStorage/LocalStorage'

const reducers = combineReducers({
    notas: NotasReducer
})

const storageState = obtenerStateStorage()

export const store = createStore(
    reducers,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    guardarStateStorage({
        notas: store.getState().notas
    })
})

export default store