import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from '../config/constant'

const ContactRow = ({ name, subtitle, onPress,style }) => {
    return (
        <TouchableOpacity style={[styles.row, style]} onPress={onPress} >
            <View style={styles.avatar}>
                <Text style={styles.avatarLabel}>
                    {name.split(' ').reduce((prev, current) => `${prev}${current[0]}`, '')}
                </Text>
            </View>
            <View style={styles.text_container} >
                <Text style={styles.name} >{name} </Text>
                <Text style={styles.subtitle} >{subtitle} </Text>
            </View>
            <Icon name='arrow-right-bold' size={25} />
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 19,
        alignItems: 'center',
    },
    name: {
        fontSize: 21,

    },
    subtitle: {
        marginTop: 3,
        color: '#565656'
    },
    area: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#E2E2E2',
        marginStart: 16
    },
    text_container: {
        flex: 1,
        marginStart: 16,


    },
    avatar: {
        height: 56,
        width: 56,
        backgroundColor: colors.primary,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarLabel: {
        fontSize: 20,
        color: 'white',
    }
})

export default ContactRow;