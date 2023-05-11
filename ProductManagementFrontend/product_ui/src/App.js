import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
      
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={ProductList} />
            <Route path="/add" component={AddProduct} />
            <Route path="/editProduct/:id" component={EditProduct} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}


export default App;
