import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';
import HeaderPages from './components/header';
import IndexPage from './pages';
import LoginPage from './pages/login';

const router = createBrowserRouter([
  { path: '/main', element: <HeaderPages /> },
  {path:'/login', element:<LoginPage />},
  { path: '/', element: <IndexPage /> },
]);

export const UserContext = createContext();

function App() {
  return <RouterProvider router={router} />;
}

export default App;
