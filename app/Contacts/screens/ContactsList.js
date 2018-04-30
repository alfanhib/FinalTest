import React, { Component } from 'react';
import { 
  Container, Content, Card, CardItem,
  List, ListItem, Text, Left, Right, 
  Body, Spinner, Fab, Icon, Button
} from 'native-base';
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
              <Card key={index}>
                <TouchableOpacity onPress={() => alert(items.objectId)}>
                  <CardItem>
                    <Body>
                      <Text>{items.name}</Text>
                      <Text note>{items.phone}</Text>
                    </Body>
                    <Button transparent onPress={() => alert("Edit")}>
                      <Text note style={{color: '#3498db'}}>Edit</Text>
                    </Button>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            ))
          )}
        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('ContactAdd')}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }

}

const mapStateToProps = (state) => ({
  contactsReducer: state.contactsReducer
});

export default connect(mapStateToProps)(ContactsList)