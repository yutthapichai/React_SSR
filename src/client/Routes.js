import React from 'react'
import App from './App'

import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...HomePage,
        // component:HomePage,
        exact:true
      },
      {
        path: '/users',
        ...UsersListPage
        // component: UsersListPage
      }
    ]
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
