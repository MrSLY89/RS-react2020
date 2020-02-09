import _ from 'lodash';
import Print from './print';
import ReactDOM from 'react-dom';
import React from 'react';

function component() {
    const el = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    el.innerHTML = _.join(['Hello', 'webpack'], ' ');
    el.onclick = Print.bind(null, 'Hello SLY');

    return el;
}

document.body.appendChild(component());

const el = document.createElement('div');
el.id = 'app';
document.body.appendChild(el);
ReactDOM.render(el);