import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { CharacterList } from '../components/characters/CharacterList'
import { LibrariesComponent } from '../components/libraries/LibrariesComponent'
import { QuoteComponent } from '../components/quotes/QuoteComponent'
import { NavBarComponent } from '../components/shared/NavBarComponent'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBarComponent />

        <Switch>
          <Route path="/characters" component={CharacterList} />
          <Route path="/libraries" component={LibrariesComponent} />
          <Route path="/quote/:id" component={QuoteComponent} />
          <Route path="/" component={CharacterList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
