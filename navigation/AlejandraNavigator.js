import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Alejandra from "../screens/Alejandra";
import Barros from "../screens/Barros";

const Stack = createNativeStackNavigator();

export default function AlejandraNavigator() {
    return (
        <Stack.Navigator initialRouteName="Alejandra" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Alejandra" component={Alejandra} />
            <Stack.Screen name="Barros" component={Barros} />
        </Stack.Navigator>
    );
}