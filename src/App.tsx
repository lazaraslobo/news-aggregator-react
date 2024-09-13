import React, {useEffect} from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import "./resources/scss/app.scss"
import {get_userInfo} from "./apis";
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {
  const {isAuthenticated, isProcessing} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    isAuthenticated === true && get_userInfo();
  }, [isAuthenticated]);

  return (
     <div className="container">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
