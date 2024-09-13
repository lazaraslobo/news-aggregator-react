import React, {useEffect} from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import "./resources/scss/app.scss"
import {get_userInfo} from "./apis";

function App() {
  useEffect(() => {
    get_userInfo();
  }, []);

  return (
     <div className="container">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
