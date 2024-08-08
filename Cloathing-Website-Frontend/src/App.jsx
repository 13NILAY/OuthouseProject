import './App.css'
import RequireAuth from './Components/SignIn/RequireAuth.jsx'
import PersistLogin from './Components/SignIn/PersistLogin.jsx'
import Unauthorized from './Components/SignIn/Unauthorized.jsx'
import Layouts from './Components/Pages/Layouts.jsx'
import Home from "./Components/Pages/Home/Home.jsx"
import Shop from './Components/Pages/Shop/Shop.jsx'
import About from './Components/Pages/About/About.jsx'
import SignInPage from './Components/SignIn/SignInPage.jsx'
import Account from './Components/Pages/Account/Account.jsx'
import Cart from './Components/Pages/Cart/Cart.jsx'
import Orders from './Components/Pages/Account/Orders/Orders.jsx'
import SingleProductDetail from './Components/Pages/Shop/SingleProductDetail.jsx'
import AccDetails from './Components/Pages/Account/Details/AccDetails.jsx'
import Admin from './Components/Pages/Account/Admin/Admin.jsx'
import AddProducts from './Components/Pages/Account/Admin/AddProducts.jsx'
import Address from './Components/Pages/Account/Address/Address.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import { Provider } from 'react-redux'
import {store} from './app/store.jsx'

const Roles={
  'User':2001,
  'Admin':5150
}
const App =()=>{
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/unauthorized' element={<Unauthorized/>} />
          <Route path='/' element ={<Layouts />} >
            {/* public routes */}
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            
            
            {/* We want to protect these routes */}
            {/* <Route element={<PersistLogin/>}> */}
                {/* <Route element={<RequireAuth allowedRoles={[Roles.User]}/>}> */}
                    <Route path='shop' element={<Shop/>}/>
                    <Route path='account' element={<Account/>}/>
                    <Route path='account/my-orders' element={<Orders/>}/>
                    <Route path='account/account-details' element={<AccDetails/>}/>
                    <Route path='/account/address' element={<Address/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='shop/:_id' element={<SingleProductDetail/>}/>
                {/* </Route> */}

                {/* <Route element={<RequireAuth allowedRoles={[Roles.Admin]}/>}> */}
                    <Route path='account/admin' element={<Admin/>}/>
                    <Route path='account/admin/addProducts' element={<AddProducts/>}/>
                {/* </Route> */}
            {/* </Route> */}

          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
