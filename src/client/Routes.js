// 2 sent  to client and renderer
import React from 'react'

import App from './App'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage' //5c

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
        ...AdminsListPage,
        path: '/admins'
      },
      {
        path: '/users',
        ...UsersListPage
        // component: UsersListPage
      },
      {
        ...NotFoundPage
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
