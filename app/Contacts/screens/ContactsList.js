import React, { Component } from 'react';
import { 
  Container, Content, Card, CardItem,
  List, ListItem, Text, Left, Right, 
  Body, Spinner, Fab, Icon, Button,
  SwipeRow,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { allContacts, deleteContact } from '../actions';

class ContactsList extends Component{

  componentDidMount(){
    this.props.dispatch(allContacts())
  }

  handleDelete = (objectId) => {
    this.props.dispatch(deleteContact(objectId)).then(() => {
      this.props.dispatch(allContacts())
    })
  }

  render(){
    return(
      <Container>
        <Content scrollEnabled={false}>
          {this.props.contactsReducer.isLoading ? (
            <Spinner color='red'/>
          ):(
            this.props.contactsReducer.contacts.map((items, index) => (
              <Card key={index}>
                <SwipeRow
                  leftOpenValue={60}
                  rightOpenValue={-60}
                  left={
                    <Button onPress={() => alert("this is info")}>
                      <Icon active name="information-circle" />
                    </Button>
                  }
                  body={
                    <TouchableOpacity 
                      onPress={() => alert(items.objectId)}>
                      <Body>
                        <Text>{items.name}</Text>
                        <Text note>{items.phone}</Text>
                      </Body>
                    </TouchableOpacity>
                  }
                  right={
                    <Button danger onPress={() => this.handleDelete(items.objectId)}>
                      <Icon active name="trash" />
                    </Button>
                  }
                />
              </Card>
            ))
          )}
        </Content>
        <Fab
          style={{ backgroundColor: '#2ecc71' }}
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