import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Container from './components/container/container'
import { ROUTE_HOME } from './constants/routes'
import HomePage from './pages/home/home'

const App = () => {

   const auth = true // In case we need conditional rendering depending on auth state

   return (
      <Container auth={auth}>
         <Switch>
            <Route path={ROUTE_HOME} component={HomePage} />
         </Switch>
      </Container>
   )
}

export default App
