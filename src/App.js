import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import { frontendUrls } from "./routes/frontendUrls";
import Product from "./modules/common/Product";
import Header from "./modules/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={frontendUrls.home}>
          <Product />
        </Route>
        <Route path={frontendUrls.catalogue}>
          <Product />
        </Route>
        <Route path={frontendUrls.registration}>
          <Product />
        </Route>
        <Route path={frontendUrls.editProduct}>
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
