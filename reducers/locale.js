import { CHANGE_LOCALE } from '../actions/locale'

const initialState = {
  lng: 'ja'
}

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, lng: action.payload }
    default:
      return state
  }
}
