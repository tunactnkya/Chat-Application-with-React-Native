import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from '../screens/Chats';
import Settings from "../screens/Settings";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../config/constant'
import SignUp from "../screens/SignUp";
import Chat from "../screens/Chat";

const ChatsStack = createStackNavigator();

const ChatScreen = () => {
    return (
        <ChatsStack.Navigator headerMode='none' >
            <ChatsStack.Screen name="Chats" component={Chats} />
            <ChatsStack.Screen name="Chat" component={Chat} />
        </ChatsStack.Navigator>
    )
}
const SettingsStack = createStackNavigator();

const SettingsScreen = () => {
    return (
        <SettingsStack.Navigator headerMode='none' >
            <SettingsStack.Screen name="Settings" component={Settings} />
        </SettingsStack.Navigator>
    )
}

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
    <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Chats') {
                    iconName = focused
                        ? 'chatbubble-sharp'
                        : 'chatbubble-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: colors.primary,
        }} >
        <Tabs.Screen name="Chats" component={ChatScreen} />
        <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
)
const MainStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator headerMode='none' mode="modal" >
                <MainStack.Screen name="Tabs" component={TabsScreen} />
                <MainStack.Screen name='SignUp' component={SignUp} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default App;
