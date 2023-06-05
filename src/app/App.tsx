import { useTheme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

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
                    <Route path='' element={<MainPage />} />
                    <Route path='about' element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div >
    )
}
