import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import CharactersContainer from './containers/CharactersContainer'
import CharacterTile from './components/CharacterTile'
import CharacterTileDetails from './components/CharacterTileDetails'

const App = (props) => {
  let routes = (
    <Route path="/">
      <IndexRoute component={CharactersContainer}/>
      <Route path='characters/:id' component={CharacterTileDetails} />
    </Route>
  )
  return (
    <Router history={browserHistory} routes={routes} />
  );
}

export default App;
