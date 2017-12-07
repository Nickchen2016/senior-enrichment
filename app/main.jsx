'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Main from './components/Main';
import Header from './components/Header';


import store from './store'
import Root from './components/Root'

render (
  <Provider store={store}>
  <div>
    <Main />,
    <Header />
  </div>
  </Provider>,
  document.getElementById('main')
)