
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import News from './pages/News/News';
import Register from './pages/Register/Register';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
        <HomeTemplate path="/" exact Component={Home} />

      </Switch>

    </Router>
  );
}

export default App;
