import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import CharactersContainer from './containers/CharactersContainer'
import CharacterTile from './components/CharacterTile'
import CharacterTileDetails from './components/CharacterTileDetails'
import MonstersContainer from './containers/MonstersContainer'
import EquipmentSearchContainer from './containers/EquipmentSearchContainer'
import SpellSearchContainer from './containers/SpellSearchContainer'
import EquipmentTileDetails from './components/EquipmentTileDetails'
import SpellTileDetails from './components/SpellTileDetails'

const App = (props) => {
  let routes = (
    <Route path="/">
      <IndexRoute component={CharactersContainer}/>
      <Route path='characters/:id' component={CharacterTileDetails} />
      <Route path='monsters' component={MonstersContainer} />
      <Route path='equipments' component={EquipmentSearchContainer} />
      <Route path='spells' component={SpellSearchContainer} />
      <Route path='equipments/:id' component={EquipmentTileDetails} />
      <Route path='spells/:id' component={SpellTileDetails} />
    </Route>
  )
  return (
    <Router history={browserHistory} routes={routes} />
  );
}

export default App;
