import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context';
import ProtectedRoutes from './routes/ProtectedRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
         <ProtectedRoutes></ProtectedRoutes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App;
