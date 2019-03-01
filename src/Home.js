import React from 'react';
import CreatePost from './containers/CreatePost';

const stylesApp = {
  marginTop: 40
};

function App(props) {
  return (
    <div className="container">
      <div className="row" style={ stylesApp }> 
        <div className="col-md-6">
          <CreatePost />
        </div>
        <div className="col-md-6">
          Display Post
        </div>
      </div>
    </div>
  );
}


export default App;
