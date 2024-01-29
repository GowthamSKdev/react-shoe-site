import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { DotLoader } from 'react-spinners';



const Shop = lazy( () => import( "./pages/Shop" ) );
const Navbar = lazy( () => import( "./components/Navbar" ) );
const ShopCatagory = lazy( () => import( "./pages/ShopCatagory" ) );
const Product = lazy( () => import( "./pages/Product" ) );
const LoginSignup = lazy( () => import( "./pages/LoginSignup" ) );
const Cart = lazy( () => import( "./pages/Cart" ) );
const Footer = lazy( () => import( "./components/Footer" ) );

function App ()
{
  return (
    <>
      <main id='main'>
        <Suspense fallback={<DotLoader color="#000" className='loader' />}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCatagory catagory="men" />} />
            <Route path='/women' element={<ShopCatagory catagory="women" />} />
            <Route path='/kids' element={<ShopCatagory catagory="kids" />} />

            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>

            <Route path='/login' element={<LoginSignup Type='Login' />} />
            <Route path='/signup' element={<LoginSignup Type='Signup' />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;
