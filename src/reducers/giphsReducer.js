import {
  GIPHY_FETCH_REQUEST,
  GIPHY_FETCH_SUCCESS,
  GIPHY_FETCH_ERROR,
} from '../constants/actionTypes'

const initialState = []

export default function giphsReducer(state = initialState, action) {

  switch (action.type) {
    case GIPHY_FETCH_SUCCESS:
      return [
        ...state,
        ...action.data
      ]

    default:
      return state
  }

}
