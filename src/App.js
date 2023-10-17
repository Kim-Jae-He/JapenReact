import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { createContext, useState } from 'react';
import Main from './pages/main';
import HeaderPages from './components/header';

const router = createBrowserRouter([
  { path: '/main', element: <HeaderPages /> },
  { path: '/', element: <Main /> },
]);

export const UserContext = createContext();

function App() {
  return <RouterProvider router={router} />;
}

export default App;
