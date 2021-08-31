import { Route ,BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
         <Header/>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />

         </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
