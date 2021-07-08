import { SET_FILTER } from '../actionsTypes';
import { VISIBILITY_FILTER } from "../../constants"

const initialState = VISIBILITY_FILTER.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}

export default visibilityFilter;