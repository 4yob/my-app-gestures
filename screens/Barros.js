import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Barros() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Alejandra")}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://static.biologianet.com/2020/05/onca-pintada.jpg",
                    }} 
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "saddlebrown",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});