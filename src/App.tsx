import React, {useEffect} from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import "./resources/scss/app.scss"
import {NavBarComponent} from "./components/nav-bar";

function App() {

  return (
      <div className="d-flex flex-wrap w-100 p-0">
        <NavBarComponent />
         <div className="container-fluid">
            <RouterProvider router={router} />
        </div>
      </div>
  );
}

export default App;
