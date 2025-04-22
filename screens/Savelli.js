import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Barros() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Bruna")}>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://t3.ftcdn.net/jpg/06/00/96/12/360_F_600961278_q5UGxkhbw4u9JJNY4e2p5OImbrmMtjmB.jpg",
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
        backgroundColor: "darkolivegreen",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});