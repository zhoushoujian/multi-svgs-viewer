import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./main";

const debug = false;

window.onload = () => {
  // eslint-disable-next-line no-useless-escape
  if (location.host === "newtab" || location.host === "local-ntp" || /chrome\-extension/.test(location.origin) || debug) {
    const ele = document.createElement('div');
    ele.id = 'svg';
    document.body.appendChild(ele);
    ReactDOM.render(<Main />, document.querySelector('#svg'));
  } else {
    //
  }
};
