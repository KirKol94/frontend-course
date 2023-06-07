import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <div className="page-wrapper">
                        <Suspense fallback={<>Загрузкаююю</>}>{element}</Suspense>
                    </div>
                )}
            />
        ))}
    </Routes>
);
