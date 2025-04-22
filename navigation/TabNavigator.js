import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import AlejandraNavigator from "./AlejandraNavigator";
import BrunaNavigator from "./BrunaNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
        initialRouteName="Alejandra"
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
                borderRadius: 50,
                margin: 20,
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
            <Tab.Screen name="Alejandra" component={AlejandraNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="star" color={color} size={size} />
                ),
            }}/>
            <Tab.Screen name="Bruna" component={BrunaNavigator} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="eye" color={color} size={size} />
                ),
            }}/>
        </Tab.Navigator>
    );
}