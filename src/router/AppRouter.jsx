import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <>
        <Routes>

          <Route path="/*" element={
            <PublicRoute>
              <HeroesRoutes />
              {/* <LoginPage /> */}
            </PublicRoute>
          }/>


          {/* <Route path="/*" element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }/> */}

          {/* <Route path="/*" element={ <HeroesRoutes />} /> */}

        </Routes>
    </>
  )
}
