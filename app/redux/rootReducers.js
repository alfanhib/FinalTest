import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import contactsReducer from '../Contacts/reducers';

const rootReducers = combineReducers({
  nav: nav,
  contactsReducer,
  form: formReducer
})

export default rootReducers