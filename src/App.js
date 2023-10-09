import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { createContext, useState } from 'react';
import Main from './pages/main';

const router = createBrowserRouter([{ path: '/main', element: <Main /> }]);

export const UserContext = createContext();

function App(){
  return(
    <RouterProvider router={router}/>
  )
}

export default App;
