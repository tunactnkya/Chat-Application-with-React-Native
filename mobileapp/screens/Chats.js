import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ContactRow from "../components/ContactRow";
import Seperator from "../components/Seperator";
import { firebase } from "@react-native-firebase/auth";
import Icon from "react-native-vector-icons/FontAwesome"

const Chats = ({ navigation }) => {
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                navigation.navigate("SignUp");
            }
        });
    }, []);

    const [chats, setChats] = useState([]);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {

            firebase
                .firestore()
                .collection('chats')
                .where('users', 'array-contains', user.email)
                .onSnapshot((snapshot) => {
                    setChats(snapshot.docs);
                })
        })
    }, []);

    const handleFABPres = () => {
        Alert.prompt('E-Mail', 'Enter User E-Mail', (email) => {
            firebase.firestore().collection('chats').add({
                users: [firebase.auth()?.currentUser?.email, email],
                messages: [],
            }).then((doc) => {
                navigation.navigate('Chat', { id: doc.id })
            })
        })
    }
    return (
        <View style={styles.container} >
            {chats.map((chat) => (
                <React.Fragment key={chat.id}>
                    <ContactRow
                        name={chat
                            .data()
                            .users.find(
                                (x) => x !== firebase.auth()?.currentUser?.email
                            )}
                        subtitle={chat.data().messages.length === 0
                            ? 'No Messages Yet'
                            : chat.data().messages[0].text
                        }
                        onPress={() => {
                            navigation.navigate('Chat', { id: chat.id });
                        }} />
                    <Seperator />
                </React.Fragment>
            ))}
            <TouchableOpacity style={styles.fab} onPress={handleFABPres} >

                <View style={styles.fabContainer} >
                    <Icon name='address-book' size={25} color='white' />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    fabContainer: {
        width: 56,
        height: 56,
        backgroundColor: 'black',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1
    },
    fab: {
        position: 'absolute',
        bottom: 16,
        right: 16
    }
})

export default Chats;

