import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { createContext, useState } from 'react';
import Main from './pages/inedx';

const router = createBrowserRouter([{ path: '/index', element: <Main /> }]);

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
