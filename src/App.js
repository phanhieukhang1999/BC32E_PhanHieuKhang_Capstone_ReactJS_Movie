
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import  CheckoutTemplate  from './templates/CheckoutTemplate/CheckoutTemplate';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';

import { Suspense, lazy} from 'react';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';

// const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Loading/>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />

        <Route path="/register" exact Component={Register} />
        
        <UserTemplate path="/login" exact Component={Login} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout}/>
        {/* <Suspense fallback={<h1>LOADING ...</h1>}>
        <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */}

        <HomeTemplate path="/" exact Component={Home} />


      </Switch>

    </Router>
  );
}

export default App;
