/*
const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const Home = require('./client/component/Home').default
*/
import 'babel-polyfill' // acait syntack
import express from 'express'
import { matchRoutes } from 'react-router-config'

import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express();

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()
  const promises = matchRoutes(Routes, req.path).map(
    ({ route }) => {
      return route.loadData ? route.loadData(store) : null
    })

  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
  //load date to stoer

})

app.listen(2000, () => {
  console.log('Listening on port 3000-1000')
})
