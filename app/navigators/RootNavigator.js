import { StackNavigator } from 'react-navigation';

import ContactsList from '../Contacts/screens/ContactsList';

const RootNavigator = StackNavigator({
  ContactsList:{
    screen: ContactsList,
    navigationOptions:{
      title: 'Contacts List'
    }
  }
})

export default RootNavigator;