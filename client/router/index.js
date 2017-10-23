import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Navbar from '../containers/Navbar'
import Landing from '../components/Landing'
import Collection from '../containers/Collection'
import Cart from '../containers/Cart'

// Note: We use HashRouter vs BrowserRouter if we don't have a server
// set up to run absolute paths.

const Router = () => (
  <HashRouter>
    <div>
      <Route path="/" component={Navbar} />
      <Container>
        <Route exact path="/" component={Landing} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/cart" component={Cart} />
      </Container>
    </div>
  </HashRouter>
)

export default Router
