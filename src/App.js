import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./components/StateProvider";
import "./App.css";
import Electronics from "./components/Electronics";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderMenu from "./components/HeaderMenu";
import Login from "./components/Login";
import Main from "./components/Main";
import Reg from "./components/Reg";
import Jewelery from "./components/Jewelery";
import MClothing from "./components/MClothing";
import WClothing from "./components/WClothing";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/electronics">
            <Electronics />
          </Route>
          <Route path="/jewelery">
            <Jewelery />
          </Route>
          <Route path="/m-clothing">
            <MClothing />
          </Route>
          <Route path="/w-clothing">
            <WClothing />
          </Route>
          <Route path="/" exact>
            <Header />
            <HeaderMenu />
            <Main />
            <Footer />
          </Route>
          {!user && (
            <>
              <Route path="/reg">
                <Reg />
              </Route>
              <Route path="/log">
                <Login />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
