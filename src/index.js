import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import i18n from '../i18n.js'
import reducers from '../reducers'
import App from './components/App.jsx'

const store = createStore(reducers, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.querySelector('#root')
)
