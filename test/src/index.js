import _ from 'lodash';
import printMe from './print.js';

function  component() {
    const el = document.createElement('div');
    const btn = document.createElement('button');

    el.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Нажать';
    btn.onclick = printMe;

    el.appendChild(btn);
    return el;
}

document.body.appendChild(component());