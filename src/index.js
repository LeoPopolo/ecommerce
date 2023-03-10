import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  Route, 
  createBrowserRouter, 
  Outlet, 
  RouterProvider, 
  createRoutesFromElements 
} from 'react-router-dom';
import Home from './Layouts/Home';
import Navbar from './Components/Navbar';
import StateCartContext from './Context/StateCartContext';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Home/>}/>
    <Route path='/about' element={<Home/>}/>
    <Route path='/contact' element={<Home/>}/>
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateCartContext>
      <RouterProvider router={router} />
    </StateCartContext>
  </React.StrictMode>
);
