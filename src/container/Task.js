import React, { useState } from 'react'
import BgDarkColor from '../components/BgDarkColor'
import BgDarkImg from '../components/BgDarkImg'
import Notes from '../components/Notes'
import Themes from '../components/Theme/Theme'
import { ThemeProvider } from 'styled-components'

const Task = () => {

    const [theme, setTheme] = useState(false)


    return (
        <ThemeProvider theme={theme === false ? Themes['dark'] : Themes['light']}>
            <div className="absolute">
                <Notes state={theme} setState={setTheme} />
            </div>
            <BgDarkImg />
            <BgDarkColor />
        </ThemeProvider>

    )
}

export default Task