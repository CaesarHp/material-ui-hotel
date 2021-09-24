import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import Theme from "./ui/Theme";

import ScrollToTop from "./Components/ScrollToTop";
import Layout from "./ui/Layout";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import Booking from "./Pages/Booking";
import BookingPayment from "./Pages/BookingPayment";
import Contact from "./Pages/Contact";
import RoomDetail from "./Pages/RoomDetail";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider theme={Theme}>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/rooms" exact>
              <Rooms />
            </Route>
            <Route path="/rooms/:roomId">
              <RoomDetail />
            </Route>
            <Route path="/booking" exact>
              <Redirect to="/booking/select-room-and-date" />
            </Route>
            <Route path="/booking/select-room-and-date">
              <Booking />
            </Route>
            <Route path="/booking/payment">
              <BookingPayment />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
