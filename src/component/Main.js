
import React from "react"
import { Image } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./home/Home_Screen";
import Help from "./help/Help_Screen";
import History from "./history/History_Screen";
import User from "./user/User_Screen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./login/Login_Screen";
import SignIn from "./login/SignIn";
import Onboarding from "./login/Onboarding_Screen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Main() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused)
                        return (
                            <Image source={require('../utils/image/home_img/home_selected.png')} />
                        )
                    else

                        return (
                            <Image source={require('../utils/image/home_img/home.png')} />
                        )
                }
                , tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'
            }} />
             <Tab.Screen name="History" component={History} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused)
                        return (
                            <Image source={require('../utils/image/home_img/history_selected.png')} />
                        )
                    else

                        return (
                            <Image source={require('../utils/image/home_img/history.png')} />
                        )
                }
                , tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'
            }}/>
            <Tab.Screen name="Help" component={Help} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused)
                        return (
                            <Image source={require('../utils/image/home_img/help_selected.png')} />
                        )
                    else

                        return (
                            <Image source={require('../utils/image/home_img/help.png')} />
                        )
                }
                , tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'
            }}/>
           
            <Tab.Screen name="User" component={User} options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused)
                        return (
                            <Image source={require('../utils/image/home_img/user_selected.png')} />
                        )
                    else

                        return (
                            <Image source={require('../utils/image/home_img/user.png')} />
                        )
                }
                , tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'black'
            }}/>
        </Tab.Navigator>
    )
}


const MyApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MyApp
