import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, varient }) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: varient === 'primary' ? 'white' : 'transparent', paddingHorizontal: 16 }]} >
            <Text style={[styles.buttonLabel, { color: varient === "primary" ? "black" : "white" }]}>{title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 12,
        borderRadius: 20
    },
    buttonLabel: {
        fontSize: 18,
    }
})
export default Button;