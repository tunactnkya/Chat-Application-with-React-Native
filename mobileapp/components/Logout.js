import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from '../config/constant'

const Logout = ({ title, icon, tintColor, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.sell, style]} onPress={onPress}
        >
            <View style={[styles.iconContainer, tintColor]} >
                <Icon
                    name={icon}
                    size={23}
                    color='white' />
            </View>
            <Text style={styles.title} >{title} </Text>
            <Icon name='arrow-bottom-right' size={25} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sell: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.border
    },
    title: {
        fontSize: 18,
        marginStart: 16,
        flex: 1
    },
    iconContainer: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Logout;