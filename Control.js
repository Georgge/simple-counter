//import libraries
import React,{ Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a componet
class Head extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={ this.props.increase }
                    title="Increase"
                    color="#00acc1"
                    accessibilityLabel="Touch here"            
                />
                <Button
                    onPress={ this.props.takeAway }
                    title="Take away"
                    color="#00acc1"
                    accessibilityLabel="Touch here"
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    }
})

export default Head;