import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import Theme from "./ui/Theme";

import Layout from "./ui/Layout";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/booking">Booking</Route>
            <Route path="/contact">Contact</Route>
            <Route path="*">Not Found</Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
