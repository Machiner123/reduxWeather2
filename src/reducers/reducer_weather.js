import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action) {
  //console.log(action.payload)
  switch(action.type){
    case FETCH_WEATHER:
    //console.log([ action.payload.data, ...state])
      return [ action.payload.data, ...state ]
  }
  return state
}
