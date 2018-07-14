//import libraries
import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a componet
class Head extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Contadorcito </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4ccfe0',
    }
})

export default Head;