import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { frontendUrls } from "./routes/frontendUrls";

import Header from "./modules/header/Header";
import Catalogue from "./modules/catalogue/Catalogue";
import Registration from "./modules/registration/Registration";
import EditProduct from "./modules/product/EditProduct";
import AddProduct from "./modules/product/AddProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={frontendUrls.catalogue}>
          <Catalogue />
        </Route>
        <Route path={frontendUrls.registration}>
          <Registration />
        </Route>
        <Route path={frontendUrls.editProduct}>
          <EditProduct />
        </Route>
        <Route path={frontendUrls.addProduct}>
          <AddProduct />
        </Route>
        <Route exact path={frontendUrls.home}>
          <h1>Welcome to our store</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
