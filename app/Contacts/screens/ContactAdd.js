import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import axios from 'axios';
import { allContacts, postContact } from '../actions';

import ContactsFrom from '../components/ContactsFrom';

class ContactAdd extends Component{
  
  handleSubmit = (value) => {
    this.props.dispatch(postContact(value)).then(() => {
      this.props.dispatch(allContacts())
      this.props.navigation.goBack()
    })
  }

  render(){
    return(
      <Container>
        <Content style={{padding: 10}}>
          <ContactsFrom { ...this.props } onSubmit={ this.handleSubmit }/>
        </Content>
      </Container>
    );
  }

}

export default connect()(ContactAdd)