import React, { Component } from 'react';
import { View } from 'react-native';
import { Form, Item, Input, Button, Text, Label } from 'native-base';
import { Field, reduxForm } from 'redux-form';

const InputTypeText = (props) => {

  return(
    <View>
      <Label>{props.label}</Label>
      <Item regular>
        <Input 
          name={props.name} { ...props } 
          onChangeText={text => {props.input.onChange(text)}} 
          value={props.input.value}/>
      </Item>
    </View>
  );

}

class ContactsFrom extends Component{

  render(){

    const { handleSubmit } = this.props;

    return(
      <Form>
        <Field 
          component={InputTypeText} 
          name="name" 
          label="Contact name"/>
        <Field 
          component={InputTypeText}
          name="phone" 
          label="Phone number" 
          keyboardType="numeric"/>
        <Button block onPress ={ handleSubmit } style={{marginTop: 10}}>
          <Text>Add to contacts</Text>
        </Button>
      </Form>
    );
  }

}

export default reduxForm({
  form:'contacts'
})(ContactsFrom)