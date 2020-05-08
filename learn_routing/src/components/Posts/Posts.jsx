import React from 'react';

function Posts(props) {
  const redirectTodetail = () => {
    // props.history.push(props.match.url + "/არა! ცდები! მოღალატეებად იბადებიან");
    props.history.push({
      pathname: props.match.url + "/არა! ცდები! მოღალატეებად იბადებიან",
      search:"title=html"
    });
  };
  return (
    <div className="row p-4 flex-column">
      <h2>Posts Page</h2>
      <hr />
      <button onClick={redirectTodetail}>Post Detail button</button>
    </div>
  );
}

export default Posts;
