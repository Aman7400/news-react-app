import "./App.css";
import Business from "./components/content/News/Business";

import Latest from "./components/content/News/Latest";

import Nav from "./components/navigation/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sports from "./components/content/News/Sports";

import Technology from "./components/content/News/Technology";
import Search from "./components/content/News/Search";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Latest} />

          <Route path="/business" exact component={Business} />

          <Route path="/technology" exact component={Technology} />
          <Route path="/sports" exact component={Sports} />
          <Route path="/search" exact component={Search} />
        </Switch>

        {/* <Category category="sports" />
        <Category category="business" />
        <Category category="politics" />
        <Category category="entertainment" />
        <Category category="technology" /> */}
      </div>
    </Router>
  );
}

export default App;
