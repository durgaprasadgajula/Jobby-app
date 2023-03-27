import {Switch, Route} from 'react-router-dom'

import Login from './Login'

import Home from './Home'

import Jobs from './Jobs'

import JobItemDetails from './JobItemDetails'

import NotFound from './NotFound'

import ProtectedRoute from './ProtectedRoute'

import './App.css'

// Replace your code here

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
