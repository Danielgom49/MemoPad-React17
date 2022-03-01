export const obtenerStateStorage = () => {
    const notasStorage = localStorage.getItem('notas')
    if (notasStorage === null) {
        return undefined
    }
    return JSON.parse(notasStorage)
}

export const guardarStateStorage = state => {
    const notasState = JSON.stringify(state)
    localStorage.setItem('notas', notasState)
}