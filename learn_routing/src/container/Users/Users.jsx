import React from "react";
import UsersList from '../../components/Users/Users';

function Users(props) {
  return (
    <div className="row p-4 flex-column">
      <h4>Users Page</h4>
      <UsersList />
      {/* <UsersList {...props}/> */}
    </div>
  );
}
export default Users;
