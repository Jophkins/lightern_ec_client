import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Shops from "../../pages/Shops";
import About from "../../pages/About";
import Contacts from "../../pages/Contacts";
import Delivery from "../../pages/Delivery";
import ProductPage from "../../pages/ProductPage";
import BasketPage from "../../pages/BasketPage";
import ProductByType from "../../pages/ProductByType";

const AppRouter = () => {

  return (

    <Routes>
      <Route path='/' element={<MainPage/>} exact/>

      {/*<Route path='/light-sp/admin' element={<AdminPage/>}/>*/}

      <Route path='/shops' element={<Shops/>} exact/>
      <Route path='/about' element={<About/>} exact/>
      <Route path='/contacts' element={<Contacts/>} exact/>
      <Route path='/delivery' element={<Delivery/>} exact/>

      <Route path='/:type' element={<ProductByType/>} exact/>

      <Route path='/basket' element={<BasketPage/>} exact/>

      <Route path='/product/:id' element={<ProductPage/>} exact/>

      <Route path="*" element={<MainPage/>}/>
    </Routes>
  );
};

export default AppRouter;
