import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/Alejandra";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: "ghostwhite",
            },
            headerTintColor: "black",
            headerTitleStyle: {
                fontFamily: "arial",
                fontWeight: "bold",
                color: "dimgray",
            },
            tabBarStyle: {
                backgroundColor: "ghostwhite",
                position: "absolute",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                height: 60,
                border: "1px solid lightgray",
                opacity: 0.5,
            },
            tabBarShowLabel: true,
            tabBarLabelStyle: {
                fontFamily: "arial",
                fontWeight: "bold",
            },
            tabBarActiveTintColor: "dimgray",
            tabBarInactiveTintColor: "dimgray",
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                ),
            }}/>
        </Tab.Navigator>
    );
}