import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import axios from 'axios';
import { allContacts } from '../actions';

import ContactsForm from '../components/ContactForm';

export default class ContactAdd extends Component{
  
  handleSubmit = (value) => {
    axios({
      method: 'post',
      url: 'https://api.backendless.com/CCAA6E46-DD53-D1AD-FFEB-C86025D08A00/CE02CAAB-5E67-4063-FF0F-E77165DC0A00/data/contacts',
      data: value
    }).then(() => {
      this.props.dispatch(allContacts())
      this.props.navigator.pop();
    })
  }

  render(){
    return(
      <Container>
        <Content style={{padding: 10}}>
          <ContactsForm { ...this.props } onSubmit={ this.handleSubmit }/>
        </Content>
      </Container>
    );
  }

}