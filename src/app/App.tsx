import { useTheme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

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

            <AppRouter />
        </div >
    )
}
