import * as constants from './constants';

const initialState = {
  dailyArr: [
    'wipe kitchen counters',
    'wipe bathroom counters',
    'load/unload dishwasher',
    'load of laundry',
    'take out kitchen trash',
    'vacuum living room and hallway',
    'tidy up',
    'wipe down dining table',
    'empty dehumidifier'
  ],
  dailyCount: 0,
}


function dailyReducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

export default dailyReducer;