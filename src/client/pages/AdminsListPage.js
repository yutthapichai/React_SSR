// 4c from reducers
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAdmins } from '../actions'
import requireAuth from '../component/hocs/requireAuth'

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins() {
    return this.props.admins.map(
      admin => {
        return <li key={admin.id}>{admin.name}</li>
      }
    )
  }

  render() {
    return (
      <div>
        <h3>Protectd list of admins</h3>
        <ul>{ this.renderAdmins() }</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins }
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}
