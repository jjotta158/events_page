import {createStore} from 'redux'
import moment from 'moment'
import {events} from '../data/sample-data.json'


const clearImageName = (img) => img.replace("./", "")
const formateDate = (date) => moment(date).format("DD/MM/YYYY H:MM")

const formattedEvents = events.map((event => {    
    event.image = clearImageName(event.image)    
    event.startDate = formateDate(event.start)
    event.endDate = formateDate(event.end)
    return event
}))



function makeEventsStore(state = formattedEvents, action) {
    switch (action.type) {
        case 'SET_START_DATE':
            
            return state.filter(event => {
                if (moment(event.start).format('X') >= moment(action.start).format("X")) {
                    return event;
                }
            })
        case "SET_END_DATE":
            return state.filter(event => {
                console.log(action)
                if (event.end >= action.end) {
                    return event;
                }
            })
        case "CLEAN_DATES":
            return formattedEvents
        default:
            return events
    }
}

const store = createStore(makeEventsStore);
export default store;
