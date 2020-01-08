import React from 'react';
import SelectedEvent from './SelectedEvent'
import EventList from './EventList'
import LocationSelect from './LocationSelect'

function App() {
  return (
    <div id="App">
      <LocationSelect />
      <div id="content">
        <SelectedEvent />
        <EventList />
      </div>
    </div>
  );
}

export default App;
