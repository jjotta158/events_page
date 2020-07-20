import React from 'react';
import {Provider} from 'react-redux'

import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider.js';
// import Cards from '../components/Cards/Cards.js';
import "../assets/css/index.css"
import store from '../store'

import {events} from '../data/sample-data.json';
 console.log(events)
function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Header></Header>
          <main>
            <Slider events={events}></Slider>
            {/* <div id="eventName">
              <h2>Todos os Eventos</h2>
            </div>
            <Cards events={events}></Cards> */}
          </main>
      </div>
    </Provider>
  );
}

export default App;
