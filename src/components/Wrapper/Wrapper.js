import React from 'react';
import './Wrapper.css';

const Wrapper = props => (
  <div className="wrapper">
    <div className="container">
      <div className="card-columns">{props.children}</div>
    </div>
  </div>
);

export default Wrapper;
