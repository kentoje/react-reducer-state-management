import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Provider as UsersProvider } from './context/usersContext'
import Routes from './routes/Routes'

const App = () => {

  return (
    <UsersProvider>
      <Router>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <Routes />
      </Router>
    </UsersProvider>
  )
}

export default App;
