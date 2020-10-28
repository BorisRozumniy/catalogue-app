import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import { frontendUrls } from "./routes/frontendUrls";
import Product from "./modules/common/Product";
import Header from "./modules/header/Header";
import Catalogue from "./modules/catalogue/Catalogue";
import Registration from "./modules/registration/Registration";
import EditProduct from "./modules/editProduct/EditProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={frontendUrls.home}>
          <Product />
        </Route>
        <Route path={frontendUrls.catalogue}>
          <Catalogue />
        </Route>
        <Route path={frontendUrls.registration}>
          <Registration />
        </Route>
        <Route path={frontendUrls.editProduct}>
          <EditProduct />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
