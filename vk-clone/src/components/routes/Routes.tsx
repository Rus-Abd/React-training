import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import { routes } from './list';
const Routes: FC = () => {
  const isAuth = true;
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          //   if (route.auth && !isAuth) {
          //     return false;
          //   }
          return (
            <Route
              path={route.path}
              key={`route ${route.path}`}
              element={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
