import React from "react";
import { Route, Link } from "react-router-dom";

import Posts from "../../components/Posts/Posts";
import Post from "../../components/Posts/Post/Post";

function Blog(props) {
  const { location } = props;
  console.log("[Blog.jsx]", location);
  const query = new URLSearchParams(location.search);

  for (let [key, value] of query.entries()) {
    console.log(key, value);
  }

  // blog => posts
  // blog/javascript-post => post
  return (
    <div className="row p-4 flex-column">
      <h4>Blog Page</h4>
      {/* <Route path="/" component={Posts}/> */}
      {/* <Route path="/:postId" component={Post}/> */}
      {/* <Posts/> */}
      {/* <Post/> */}

      <Route path={props.match.url} component={Posts} exact />
      <Route path={props.match.url + "/:postId"} component={Post} />
      <Link
        to={props.match.url + "/მოღალატეები არ იბადებიან მოღალატეები ხდებიან"}
      >
        პასუხი
      </Link>
    </div>
  );
}
export default Blog;
