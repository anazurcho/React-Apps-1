import React from "react";
import { Redirect } from 'react-router-dom';

function Post(props) {
  console.log(props);
  
  return (
    <div className="row p-4 flex-column">
      <Redirect to="/users" />
      {/* ესეც შეგიძლია */}
      {/* <button
        className="btn btn-info"
        onClick={() => {
          props.history.replace('/blog');
        }}
      >
        Go Back
      </button> */}

      <h2>Post Page</h2>
      <h3>POST Id = {props.match.params.postId}</h3>
    </div>
  );
}

export default Post;
