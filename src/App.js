import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import { Provider as TodoProvider } from './hooks/todos/useTodo'

const App = () => {

  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <Switch>
        <Route path="/todo/:userId">
          <TodoProvider>
            <Todo />
          </TodoProvider>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
