import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './routes' // ---> import from routes.js file

function RouterProvider() {
    return (
        <Router>
            <Routes>
                {
                    routes.map((route, i) =>
                        <Route key={i + 'route'} path={route.path} element={route.component} />
                    )
                }
            </Routes>
        </Router>
    )
}

export default RouterProvider;