import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numero: 2
    }
  }

  increase = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }

  takeAway = () => {
    this.setState({
      numero: this.state.numero - 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxOne}>
          <Text>Contador</Text>
        </View>
        <View style={styles.boxTwo}>
          <Text>{this.state.numero}</Text>
        </View>
        <View style={styles.boxThree}>
          <Button
            onPress={ () => { this.increase(); }}
            title="Increase"
            color="#00acc1"
            accessibilityLabel="Touch here"            
          />
          <Button
            onPress={ () => { this.takeAway(); }}
            title="Take away"
            color="#00acc1"
            accessibilityLabel="Touch here"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4ccfe0',
  },
  boxTwo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  boxThree: {
    flex: 2,
    backgroundColor: '#fafafa',
  },
});

export default App;