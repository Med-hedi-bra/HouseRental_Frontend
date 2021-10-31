import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Foot from "./components/Foot";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Annon from "./pages/Annon";
import Sponsors from "./components/Sponsors";
import NouvelleAnnoce from "./pages/NouvelleAnnoce";



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Foot/>
<Switch>

<Route path="/annoncement">
  <Annon/>
</Route>
<Route path="/Annonce">
    <NouvelleAnnoce/>
  </Route>
  <Route path="/">
    <Home/>
  </Route>
</Switch>
<Sponsors />
<Footer/>

    </Router>
     
     
    </>
  );
}

export default App;
