import { useState } from 'react'

const useInputNote = (initialState = {}) => {

    const [valueNote, setValueNote] = useState(initialState)

    const reset = () => {
        setValueNote(initialState)
    }

    const handleOnchange = ({ target }) => {
        setValueNote({
            ...valueNote,
            [target.name]: target.value
        })
    }

    return [valueNote, handleOnchange, reset]
}

export default useInputNote