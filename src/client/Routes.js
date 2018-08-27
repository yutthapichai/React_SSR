import React from 'react'

import Home from './component/Home'
import UsersList, { loadData } from './component/UsersList'

export default [
  {
    path: '/',
    component:Home,
    exact:true
  },
  {
    loadData: loadData,
    path: '/users',
    component: UsersList
  }
]


/*
() => {
 return (
   <div>
     <Route exact path="/" component={Home} />
     <Route path='/users' component={UsersList} />
   </div>
 )
}
*/
