import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HeaderPages from './components/header';
import IndexPage from './pages';
import LoginPage from './pages/login';
import JoinPage from './pages/join';
import { createContext, useState } from 'react';


const router = createBrowserRouter([
  { path: '/main', element: <HeaderPages /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <IndexPage /> },
  { path: '/join', element: <JoinPage /> },
]);

export const UserContext = createContext();

const App = () => {
  // 전역에서 사용할 변수
  const [accessToken, setAccessToken] = useState(null);
  return (
    <UserContext.Provider value={{ accessToken, setAccessToken }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default App;
 