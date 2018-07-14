import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Head from './Head';
import Essence from './Essence';

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
  boxThree: {
    flex: 2,
    backgroundColor: '#fafafa',
  },  
});

export default App;