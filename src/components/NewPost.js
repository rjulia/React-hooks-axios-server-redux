
import React, { useState, useEffect } from 'react';

export default function NewPost () {
 
  const [postState, setPostState] = useState({
    title: '',
    body: ''
  });

  function handleInputChange (e) {
    console.log(e.target.name)
    console.log(postState)
    setPostState({
      ...postState,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit (e) {
    e.preventDefault();
    if (postState.title.trim() && postState.body.trim()) {
      console.log(postState);
      handleReset();
    }
  };

  function handleReset () {
    setPostState({
      title: '',
      body: ''
    });
  };

  
  return (
    <div>
        <form onSubmit={ handleSubmit }>
        <div className="form-group">
            <input
            type="text"
            placeholder="Title"
            className="form-control"
            name="title"
            onChange={ handleInputChange }
            value={ postState.title }
          />
        </div>
        <div className="form-group">
          <textarea
            cols="19"
            rows="8"
            placeholder="Body"
            className="form-control"
            name="body"
            onChange={ handleInputChange }
            value={ postState.body }>
          </textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Add Post</button>
          <button type="button" className="btn btn-warning" onClick={ handleReset }>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
  
}