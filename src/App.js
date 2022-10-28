
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';

import { Suspense, lazy } from 'react';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Films from './pages/Admin/Films/Films';
import Showtime from './pages/Admin/Showtime/Showtime';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';

// const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/profile" exact Component={Profile} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />

        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/users" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={Showtime} />
        {/* <Suspense fallback={<h1>LOADING ...</h1>}>
        <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */}

        <HomeTemplate path="/" exact Component={Home} />


      </Switch>

    </Router>
  );
}

export default App;
