import './style/index.css'
import './style/index.sass'
import './style/index.styl'
import './style/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import testImg from './img/img-test.jpg'
import bbb from './img/aaa.png'

import 'core-js/stable';
import 'regenerator-runtime/runtime';

console.log('aaa')

const aaa = () => {
  console.log('asdf')
}
const app = document.getElementById('app')
// app.onclick = () => {
//   console.log(testImg)
//   console.log(bbb)
// }

const dom = <button onClick={() => {console.log(bbb);console.log(testImg)}}>aaa</button>

console.log('React.render',ReactDOM.render)
ReactDOM.render(dom, document.getElementById('app'))


console.log(dom)