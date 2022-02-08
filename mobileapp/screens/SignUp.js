import React from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { colors } from "../config/constant";
import Button from "../components/Button";


const SignUp = () => {
    return (
        <View style={styles.container} >
            <SafeAreaView>
                <View style={styles.contentContainer} >
                    <Text style={styles.title} >Create New Account</Text>
                    <TextInput style={styles.input} placeholder="Enter Your Name" />
                    <TextInput style={styles.input} placeholder="Enter Your E-Mail" />
                    <TextInput style={styles.input} placeholder="Enter Your Password" />
                    <View style={styles.buttonsContainer} >
                      <Button title='Sign In' varient='primary'  />
                      <Button title='Sign Up' varient='secondary' />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1
    },
    title: {
        fontSize: 35,
        color: 'white',
        fontWeight: '800',
        marginBottom: 16
    },
    contentContainer: {
        padding: 32
    },
    input: {
        backgroundColor: 'white',
        fontSize: 15,
        marginTop: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32
    },
  
})

export default SignUp;