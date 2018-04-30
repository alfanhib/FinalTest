import { StackNavigator } from 'react-navigation';

import ContactsList from '../Contacts/screens/ContactsList';
import ContactAdd from '../Contacts/screens/ContactAdd';

const RootNavigator = StackNavigator({
  ContactsList:{
    screen: ContactsList,
    navigationOptions:{
      title: 'Contacts List'
    }
  },
  ContactAdd:{
    screen: ContactAdd,
    navigationOptions:{
      title: 'Add new contact'
    }
  },
})

export default RootNavigator;