import {
  GIPHY_FETCH_REQUEST,
  GIPHY_FETCH_SUCCESS,
  GIPHY_FETCH_ERROR,
} from '../constants/actionTypes'
import fetch from 'isomorphic-fetch'

export const fetchGiphs = (query) => (dispatch) => {
  dispatch(fetchGiphsRequest())
  fetch(getGiphyUrl(query))
    .then(res => res.json())
    .then(
      json => dispatch(fetchGiphsSuccess(json.data)),
      err => dispatch(fetchGiphsError(err))
    )
}

// private
const fetchGiphsRequest = () => ({
  type: GIPHY_FETCH_REQUEST
})

const fetchGiphsSuccess = (data) => ({
  type: GIPHY_FETCH_SUCCESS,
  data
})

const fetchGiphsError = ({ message }) => ({
  type: GIPHY_FETCH_ERROR,
  message
})

const getGiphyUrl = (query) => `http://api.giphy.com/v1/gifs/search?q=${
  encodeURI(query.replace(' ', '+'))
}&api_key=dc6zaTOxFJmzC`
