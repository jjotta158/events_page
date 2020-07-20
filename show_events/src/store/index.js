import {createStore} from 'redux'
import {events} from '../data/sample-data.json'



function makeEventsStore(state = events, action) {
    switch (action.type) {
        case 'FILTER_DATE':
            return events.filter(event => {
                if (event.start >= action.start && event.end <= action.end) {
                    return event;
                }
            })
        default:
            return events
    }
}

const store = createStore(makeEventsStore);
export default store;
