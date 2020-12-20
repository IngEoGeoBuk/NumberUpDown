import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // elevation은 안드로이드만 따로 지정해줘야하는 거임
        elevation: 5,
        shadowRadius: 6,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;