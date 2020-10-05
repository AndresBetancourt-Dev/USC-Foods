import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    if (this.state.pass && this.state.user) {
      console.log(this.state.user + ' ' + this.state.pass);
    } else {
      console.log('Estan vacios');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>Login</Text>
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              onChangeText={(text) => this.setState({user: text})}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.textInput}
              onChangeText={(text) => this.setState({pass: text})}
            />
            <View style={styles.btnContainer}>
              <Button title="Submit" onPress={() => this.handleSubmit()} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
