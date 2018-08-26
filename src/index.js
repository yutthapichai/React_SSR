/*
const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const Home = require('./client/component/Home').default
*/
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './client/component/Home'
const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />)

  res.send(content)
})

app.listen(2000, () => {
  console.log('Listening on port 3000-1000')
})
