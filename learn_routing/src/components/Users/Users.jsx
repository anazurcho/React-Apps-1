import React from 'react';
import { withRouter } from 'react-router-dom';

function Users(props) {
  console.log(props);
  return (
    <div className="row p-4 flex-column">
      <h2>Users List Page</h2>
      {/* <h3>Users Id = {props}</h3> */}
    </div>
  );
}

export default withRouter(Users);
// export default Users;