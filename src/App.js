import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { TermsAndConditionsPage } from "./Components/Legal/termsAndConditions";
import { LitePaper } from "./Components/LitePaper";
import Main from "./Components/main";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/terms' component={TermsAndConditionsPage} />
        <Route path='/litepaper' component={LitePaper} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
