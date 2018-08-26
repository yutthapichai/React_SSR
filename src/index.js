/*
const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const Home = require('./client/component/Home').default
*/
import 'babel-polyfill' // acait syntack
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express();

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()
  //load date to stoer
  res.send(renderer(req, store))
})

app.listen(2000, () => {
  console.log('Listening on port 3000-1000')
})
