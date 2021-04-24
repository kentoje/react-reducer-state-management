import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import TodoWrapper from './hoc/TodoWrapper'


const App = () => {

  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <Switch>
        <Route path="/todo/:userId">
          <TodoWrapper>
            <Todo />
          </TodoWrapper>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
