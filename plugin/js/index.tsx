import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./main";

const debug = false;

window.onload = () => {
  if (location.host === "newtab"
    || location.host === "local-ntp"
    || location.host === ""
    || location.protocol === "file:"
    || location.href === "https://www.zhoushoujian.com/svg/"
    // eslint-disable-next-line no-useless-escape
    || /chrome\-extension/.test(location.origin)
    || debug) {
    const ele = document.createElement('div');
    ele.id = 'svg';
    document.body.appendChild(ele);
    ReactDOM.render(<Main />, document.querySelector('#svg'));
  } else {
    // console.log('no suitable case');
  }
};
