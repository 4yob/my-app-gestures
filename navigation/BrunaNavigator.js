import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bruna from "../screens/Bruna";
import Savelli from "../screens/Savelli";

const Stack = createNativeStackNavigator();

export default function BrunaNavigator() {
    return (
        <Stack.Navigator initialRouteName="Bruna" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Bruna" component={Bruna} />
            <Stack.Screen name="Savelli" component={Savelli} />
        </Stack.Navigator>
    );
}