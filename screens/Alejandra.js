import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Alejandra() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => navigation.navigate("Barros")}>
                <Text style={styles.text}>Alejandra Barros</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkgoldenrod",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
});