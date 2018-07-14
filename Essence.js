//import libraries
import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a componet
class Essence extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textSize}>{ this.props.numerator }</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },
    textSize: {
        fontSize: 50,
    },
})

export default Essence;