import React, { createElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import Todo from '../pages/Todo'
import Home from '../pages/Home'

const routes = [
  {
    id: 1,
    path: '/todo/:userId',
    component: 'todo',
  },
  {
    id: 2,
    path: '/',
    component: 'home',
  },
]

const render = (key) => ({
  home: createElement(Home),
  todo: createElement(Todo),
}[key])

const Routes = () => {
  return (
    <Switch>
      {
        routes.map((route) => (
          <Route path={route.path} key={route.id}>
            {render(route.component)}
          </Route>
        ))
      }
    </Switch>
  )
}

export default Routes
