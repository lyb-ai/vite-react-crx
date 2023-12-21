import {createHashRouter, Navigate} from 'react-router-dom';

import Login from '@/popup/pages/login';
import Home from '@/popup/pages/home';
import Entry from '@/popup/pages/entry';
import User from '@/popup/pages/user';

const globalRouter = createHashRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Entry />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '*',
        element: <Navigate to="/home" />
      },
      {
        path: '/',
        element: <Navigate to="/home" />
      }
    ]
  }
])

export default globalRouter
