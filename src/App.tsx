import './index.scss'

import { Link, Route, Routes } from 'react-router-dom'

import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync'
import { MainPageAsync } from './pages/MainPage/MainPageAsync'
import { Suspense } from 'react'

export const App = () => {
    return (
        <div className="app">
            <Link to=''>main</Link>
            <Link to='about'>about</Link>

            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path='' element={<MainPageAsync />} />
                    <Route path='about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
