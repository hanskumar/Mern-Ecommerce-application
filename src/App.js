import { Route ,BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import TemplateProvider from './components/templates/TemplateProvider';

function App() {
  return (
    <>
    <TemplateProvider>
      <BrowserRouter>
         <Header/>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />

         </Switch>
      </BrowserRouter>
    </TemplateProvider>  
    </>
  );
}

export default App;
