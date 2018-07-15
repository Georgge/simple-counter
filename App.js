import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Head from './Head';
import Essence from './Essence';
import Control from './Control';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      number: 1
    }
  }

  increase = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  takeAway = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Head title="Counter"/>
        <Essence numerator={ this.state.number } />
        <Control increase={ this.increase } takeAway={ this.takeAway } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
});

export default App;