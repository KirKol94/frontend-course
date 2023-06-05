import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'

import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync'
import { MainPageAsync } from './pages/MainPage/MainPageAsync'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
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
