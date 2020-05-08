import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import "./style/App.css";

import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

// import Users from "./container/Users/Users";
// import Blog from "./container/Blog/Blog";
import Home from "./container/Home/Home";

// import lazyComponent from "./hoc/lazyComponent";

// const Blog = lazyComponent(() => {
//   return import("./container/Blog/Blog");
// });
// const Users = lazyComponent(() => {
//   return import("./container/Users/Users");
// });
const Blog = React.lazy(() => {
  return import("./container/Blog/Blog");
});
const Users = React.lazy(() => {
  return import("./container/Users/Users");
});

const componentLoading = (
  <div className="alert alert-info">Component is Loading...</div>
);

function App() {
  // const isAuth = false;
  return (
    <Router>
      <div className="container">
        <Navbar />
        <hr />
        <Link
          to={{
            pathname: "/blog",
            search: "s=javascript&page=5",
            hash: "main",
          }}
        >
          Visit Blog
        </Link>
        <Switch>
          {/* <Route path="/blog" component={Blog} /> */}
          <Route
            path="/blog"
            render={(props) => {
              return (
                <Suspense fallback={componentLoading}>
                  <Blog {...props} />
                </Suspense>
              );
            }}
          />
          <Route
            path="/users"
            render={(props) => {
              return (
                <Suspense fallback={componentLoading}>
                  <Users {...props} title="Users Page Title" />
                </Suspense>
              );
            }}
          />

          <Redirect from="/old/users" to="/users" />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
