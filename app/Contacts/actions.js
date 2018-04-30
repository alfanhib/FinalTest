import axios from 'axios';

const allContacts = () => {
  
  const url = 'https://api.backendless.com/CCAA6E46-DD53-D1AD-FFEB-C86025D08A00/CE02CAAB-5E67-4063-FF0F-E77165DC0A00/data/contacts?sortBy=created%20desc';

  return {
    type: "ALL_CONTACTS",
    payload: axios({
      method: 'get',
      headers:{
        'Content-Type': 'application/json',
      },
      url
    })
  }

}

const postContact = (value) => {

  return{
    type: 'POST_CONTACTS',
    payload: axios({
      method: 'post',
      url: 'https://api.backendless.com/CCAA6E46-DD53-D1AD-FFEB-C86025D08A00/CE02CAAB-5E67-4063-FF0F-E77165DC0A00/data/contacts',
      data: value
    })
  }

}

const deleteContact = (objectId) => {

  return{
    type: 'DELETE_CONTACTS',
    payload: axios({
      method: 'delete',
      url: 'https://api.backendless.com/CCAA6E46-DD53-D1AD-FFEB-C86025D08A00/CE02CAAB-5E67-4063-FF0F-E77165DC0A00/data/contacts/'+objectId
    })
  }

}



export {
  allContacts,
  postContact,
  deleteContact
}