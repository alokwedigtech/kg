import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const StyledButton = (props) => {
    const {type, content, onPress} = props;

    const backgroundColor = type === 'primary' ? '#fd551f' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}>
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // padding: 10,
    },
    button: {
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        // textTransform: 'uppercase',
    },
});
