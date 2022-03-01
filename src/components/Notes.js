import React, { useEffect, useState } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { HiMoon } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { AddNotas, Borrar } from '../redux/action/actionNotas'
import { BgForm, Input, Container, Li, Button } from '../styles/StyledComponent'
import useInputNote from './hooks/useInputNote'
import { obtenerStateStorage } from '../localStorage/LocalStorage'
import uuid from 'react-uuid'

const Notes = ({ state, setState }) => {


    const dispatch = useDispatch()
    const [items, setItems] = useState(0)
    const [icon, setIcon] = useState(false)
    const [valueNote, handleOnchange, reset] = useInputNote({
        id: uuid(),
        nota: ''
    })

    const nota = valueNote;

    // FUNCION PARA AGREGAR UNA NOTA
    const nuevaNota = (newNota) => {
        dispatch(AddNotas(newNota))
        setItems(items + 1)
    }

    // FUNCION PARA ELIMINAR UNA NOTA
    const handleDelete = (id) => {
        dispatch(Borrar(id))
        setItems(items - 1)
    }

    const { notas } = useSelector(store => store.notas)

    // OBTENER LOS DATOS DEL LOCALSTORAGE
    useEffect(() => {
        const storageState = obtenerStateStorage()
        if (storageState !== undefined) {
            const numItems = storageState.notas.notas
            setItems(numItems.length)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        reset()
        nuevaNota({ nota })
    }

    // FUNCION PARA CAMBIAR DE TEMA
    const changeTheme = () => {
        setState(!state)
        setIcon(!icon)
    }

    // FUNCION PARA ELIMINAR TODAS LAS NOTAS
    const clearCompleted = () => {
    }

    return (
        <Container>
            <div>
                <div className="title flex flex-row justify-between items-center mx-24">
                    <h1 className="text-white font-bold text-4xl">TODO</h1>
                    <button onClick={() => changeTheme()}>
                        <p className="text-4xl text-white">{icon === false ? <><BsSunFill /></> : <><HiMoon /></>}</p>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center my-5 pt-5">
                        <Input type="text" name="nota" autoComplete="off" value={nota.nota} onChange={handleOnchange} placeholder="Create a new todo..." className=' py-4 px-5 rounded w-full' />
                    </div>
                </form>

                <BgForm className="border-hidden rounded">
                    <ul className=" text-white flex flex-col justify-center items-center">
                        {
                            notas.map((nota) => (
                                <Li key={nota.nota.id} className="flex flex-row justify-between py-5 px-5 border-b-gray-500 border-b-2">
                                    <div className="flex flex-row items-center w-4/5">
                                        {/* <input className="px-5" type="checkbox" id="check" onChange={() => handleChange(nota.nota.id)} /> */}
                                        <p className="px-5 truncate">{nota.nota.nota}</p>
                                    </div>
                                    <Button onClick={() => handleDelete(nota.nota.id)} className="close text-2xl text-white">
                                        <IoMdClose />
                                    </Button>
                                </Li>
                            ))
                        }
                        <Li className="flex flex-row justify-between py-5 px-5 border-b-gray-500 border-b-2">
                            <div>
                                <p className="text-gray-500 text-sm">{items} items left</p>
                            </div>
                            <div className="options">
                                <a className="text-gray-500 text-sm px-2" href="/">All</a>
                                <a className="text-gray-500 text-sm px-2" href="/">Active</a>
                                <a className="text-gray-500 text-sm px-2" href="/">Completed</a>
                            </div>
                            <div>
                                <button onClick={clearCompleted} className="text-gray-500 text-sm hover:text-white">Clear Completed</button>
                            </div>
                        </Li>
                    </ul>

                </BgForm>
                <div className="section-responsive flex justify-center items-center">
                    <div className="options">
                        <a className="text-gray-500 text-sm px-2" href="/">All</a>
                        <a className="text-gray-500 text-sm px-2" href="/">Active</a>
                        <a className="text-gray-500 text-sm px-2" href="/">Completed</a>
                    </div>
                </div>
                <p className="text-center mt-8 text-gray-600 text-lg font-medium">Drag and drop to reorder list</p>
            </div>
        </Container>
    )
}

export default Notes