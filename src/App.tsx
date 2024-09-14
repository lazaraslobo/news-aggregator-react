import React, {useEffect} from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import "./resources/scss/app.scss"

function App() {

  return (
     <div className="container">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
