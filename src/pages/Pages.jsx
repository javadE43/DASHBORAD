import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import List from './list/List'
import Login from './login/Login'
import New from './new/New'
import Single from './single/Single';
import {Productdata,Inputdata} from '../formdata'
function Pages() {
  return (
   <Routes>
       <Route path='/'>
           <Route index element={<Home></Home>}></Route>
           <Route path='login' element={<Login></Login>}></Route>
           <Route path='users'>
               <Route index element={<List></List>}></Route>
               <Route path=':userid' element={<Single></Single>}></Route>
               <Route path='new' element={<New datainput={Inputdata} title='افزودن کاربر جدید'></New>}></Route>
           </Route>
           <Route path='products'>
               <Route index element={<List></List>}></Route>
               <Route path=':productsid' element={<Single></Single>}></Route>
               <Route path='new' element={<New datainput={Productdata} title='product data'></New>}></Route>
           </Route>
       </Route>
   </Routes>
  )
}

export default Pages