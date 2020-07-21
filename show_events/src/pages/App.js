import React from 'react';
import {Provider} from 'react-redux'
import moment from 'moment'

import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider.js';
import Cards from '../components/Cards/Cards.js';
import DatePicker from '../components/DatePicke/';
import Footer from '../components/Footer/'

import "../assets/css/index.css"
import store from '../store'

import {events} from '../data/sample-data.json';
 
function App() {

  	return (
    	<Provider store={store}>
      		<div className="App">
          		<Header></Header>
          		<main>
            		<Slider events={events}></Slider>
            		<div id="eventName">
            			<h2>Todos os Eventos</h2>
					</div>
            		<Cards></Cards>
					<DatePicker></DatePicker>
				</main>
				<Footer></Footer>
      		</div>
    	</Provider>
 	 );
}

export default App;
