import {createStore} from 'redux'
import {events} from '../data/sample-data.json'

import moment from 'moment'


const clearImageName = (img) => img.replace("./", "")
const formateDate = (date) => moment(date).format("DD/MM/YYYY H:MM")

const formattedEvents = events.map((event => {    
    event.image = clearImageName(event.image)    
    event.startDate = formateDate(event.start)
    event.endDate = formateDate(event.end)
    return event
}))



function makeEventsStore(state = formattedEvents, action) {
    
    const formatingDateToTimestamp = date => moment(date).format('X')

    switch (action.type) {
        case 'SET_START_DATE':            
            return state.filter(event => {

                event.start = formatingDateToTimestamp(event.start)
                action.start = formatingDateToTimestamp(action.start)

                if (event.start >= action.start) {
                    return event;
                }
            })
        case "SET_END_DATE":
            return state.filter(event => {

                event.end = formatingDateToTimestamp(event.end)
                action.end = formatingDateToTimestamp(action.end)

                if (event.end <= action.end) {
                    return event;
                }
            })
        case "CLEAN_DATES":
            return formattedEvents
        default:
            return state
    }
}

const store = createStore(makeEventsStore);
export default store;
