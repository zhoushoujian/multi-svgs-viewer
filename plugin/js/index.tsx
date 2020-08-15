import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./main";

window.onload = () => {
  const node = document.querySelector('#mother');
  if (node) {
    document.body.removeChild(node);
  }
  const ele = document.createElement('div');
  ele.id = 'svg';
  document.body.appendChild(ele);
  ReactDOM.render(<Main />, document.querySelector('#svg'));
};
