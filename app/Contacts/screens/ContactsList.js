import React, { Component } from 'react';
import { 
  Container, Content, Card, CardItem,
  List, ListItem, Text, Left, Right, 
  Body, Spinner } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { allContacts } from '../actions';

class ContactsList extends Component{

  componentDidMount(){
    this.props.dispatch(allContacts())
  }

  render(){
    return(
      <Container>
        <Content>
          {this.props.contactsReducer.isLoading ? (
            <Spinner color='red'/>
          ) : (
            this.props.contactsReducer.contacts.map((items, index) => (
              <TouchableOpacity key={index} onPress={() => alert('You choose ' + items.name)}>
                <Card key={index}>
                  <CardItem>
                    <Body>
                      <Text>{items.name}</Text>
                      <Text note>{items.phone}</Text>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            ))
          )}
        </Content>
      </Container>
    );
  }

}

const mapStateToProps = (state) => ({
  contactsReducer: state.contactsReducer
});

export default connect(mapStateToProps)(ContactsList)