import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default ChildComponent => {
  class ReuireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />
        case null:
          return <div></div>
        default:
          return <ChildCompnent {...this.props}/>
      }
    }
  }

 const mapStateToProps = ({ auth }) => {
   return { auth }
 }
  return connect(mapStateToProps)(ReuireAuth)
}
