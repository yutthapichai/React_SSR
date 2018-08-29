/*
const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const Home = require('./client/component/Home').default
*/
import 'babel-polyfill' // acait syntack
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express();

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts){
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  }
}))

app.use(express.static('public'))

app.get('*', (req, res) => {
  // req path is when put on url
  const store = createStore(req)
  const promises = matchRoutes(Routes, req.path).map(
    ({ route }) => {
      return route.loadData ? route.loadData(store) : null
    }).map(promise => {
      if(promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve)
        })
      }
    })

  Promise.all(promises).then(() => {

    const context = {}
    const content = renderer(req, store, context)

    if(context.url) {
        return res.redirect(301, context.url)
    }
    if(context.notFound) {
      res.status(404)
    }
    res.send(content)
  }).catch( err => console.log('Something error', err))
  //load date to stoer
})

app.listen(2000, () => {
  console.log('Listening on port 3000-1000')
})
