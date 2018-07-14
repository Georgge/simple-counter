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
        <View style={styles.cajaUno}>
          <Text>Contador</Text>
        </View>
        <View style={styles.cajaDos}>
          <Text>{this.state.numero}</Text>
        </View>
        <View style={styles.cajaTres}>
          <Button
            onPress={ () => { this.increase(); }}
            title="Increase"
            color="#d4e157"
            accessibilityLabel="Touch here"
          />
          <Button
            onPress={ () => { this.takeAway(); }}
            title="Take away"
            color="#d4e157"
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
  cajaUno: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ff00',
  },
  cajaDos: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90ee90',
  },
  cajaTres: {
    flex: 1,
    backgroundColor: '#006400',
  },
});

export default App;