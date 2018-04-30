const initialState = {
  contacts:[],
  isLoading: false,
  isError: false
}

const contactsReducer = ( state = initialState, action ) => {
  switch(action.type){
    case "ALL_CONTACTS_PENDING":
      return { ...state, isLoading: true }
    case 'ALL_CONTACTS_FULFILLED':
      return { ...state, isLoading: false, contacts: action.payload.data };
    case 'ALL_CONTACTS_REJECTED':
      return { ...state, isLoading: false, isError: true};
    default:
      return state;
  }
}

export default contactsReducer;