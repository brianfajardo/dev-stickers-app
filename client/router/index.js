import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Navbar from '../containers/Navbar'
import Landing from '../components/Landing'
import Collection from '../containers/Collection'
import Cart from '../containers/Cart'

const Router = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Navbar} />
      <Container>
        <Route exact path="/" component={Landing} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/cart" component={Cart} />
      </Container>
    </div>
  </BrowserRouter>
)

export default Router
