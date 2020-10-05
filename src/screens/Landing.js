import React from 'react';
import {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Home from './Home';
class Landing extends Component {
  state = {
    loggedIn: false,
  };

  render() {
    if (this.state.loggedIn) {
      return <Home />;
    }
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Landing</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}></Button>
      </View>
    );
  }
}

export default Landing;
