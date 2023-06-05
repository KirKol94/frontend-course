import './styles/index.scss'

import { Link, Route, Routes } from 'react-router-dom'
import { Suspense, useState } from 'react'

import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync'
import { MainPageAsync } from './pages/MainPage/MainPageAsync'

export enum Themes {
    LIGHT = 'light',
    DARK = 'dark'
}

export const App = () => {
    const [theme, setTheme] = useState<Themes>(Themes.LIGHT)

    const toggleTheme = () => {
        setTheme(theme === Themes.DARK ? Themes.LIGHT : Themes.DARK)
    }
    return (
        <div className={`app ${theme}`}>
            <ul className='nav'>
                <li>
                    <Link to=''>main</Link>
                </li>
                <li>
                    <Link to='about'>about</Link>
                </li>
            </ul>

            <button onClick={toggleTheme}>toggle theme</button>

            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path='' element={<MainPageAsync />} />
                    <Route path='about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div >
    )
}
