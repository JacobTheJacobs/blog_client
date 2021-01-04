import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SigninComponent from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Layout>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SigninComponent} />
          <Route path="/myDashboard" exact component={Dashboard} />
          <Route path="/myDashboard/post/:id" exact component={PostDetails} />
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
