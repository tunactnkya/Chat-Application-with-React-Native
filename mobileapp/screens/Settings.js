import React from "react";
import { View, StyleSheet, } from 'react-native';
import ContactRow from "../components/ContactRow";
import { colors } from "../config/constant";
import Seperator from "../components/Seperator";
import Logout from "../components/Logout";

const Settings = () => {
    return (
        <View>
            <ContactRow
                name='Tuna Çetinkaya'
                subtitle='tuna4317@gmail.com'
                style={styles.contactRow} />
            <Seperator />

            <Logout
                title='Logout'
                icon='logout'
                tintColor={colors.red}
                onPress={() => {

                }} />

            <Logout
                title='Help'
                icon='help'
                tintColor={colors.green}
                onPress={() => {

                }}
                style={{ marginTop: 20 }} />

            <Logout
                title='İnvite a Friend'
                icon='satellite-uplink'
                tintColor={colors.pink}
                onPress={() => {

                }} />
        </View>
    )
}
const styles = StyleSheet.create({
    contactRow: {
        backgroundColor: 'white',
        marginTop: 16,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: colors.border
    },
})
export default Settings;