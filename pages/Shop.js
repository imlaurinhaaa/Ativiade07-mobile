import React from "react";
import { Image } from 'expo-image';
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Shop() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Bem-Vindos ao Capybara Shop!✨</Text>
            <Text style={styles.text}>Aqui você encontra uma grande varieades de pelúcias fofinhas e de ótima qualidade sobre o febre do momento, Capivaras!💗</Text>
            <View style={styles.content}>
                <Image style={styles.img} source={require("../img/capivaraAbelha.jpg")}/>
                <View style={styles.texts}>
                <Text style={styles.titleContent}>Capivara Abelha 🐝</Text>
                <Text style={styles.textContent}>R$ 50,00</Text>
                </View>

                <Image style={styles.img} source={require("../img/capivaraDoente.jpg")}/>
                <View style={styles.texts}>
                <Text style={styles.titleContent}>Capivara Doente 🤧</Text>
                <Text style={styles.textContent}>R$ 70,00</Text>
                </View>

                <Image style={styles.img} source={require("../img/capivaraTartaruga.jpg")}/>
                <View style={styles.texts}>
                <Text style={styles.titleContent}>Capivara Tartaruga 🐢</Text>
                <Text style={styles.textContent}>R$ 80,00</Text>
                </View>

                <Image style={styles.img} source={require("../img/capivaraTulipa.jpg")}/>
                <View style={styles.texts}>
                <Text style={styles.titleContent}>Capivara Tulipa 🌷</Text>
                <Text style={styles.textContent}>R$ 95,00</Text>
                </View>

                <Image style={styles.img} source={require("../img/kitCapivara.jpg")}/>
                <View style={styles.texts}>
                <Text style={styles.titleContent}>Kit Capivaras 🤍</Text>
                <Text style={styles.textContent}>R$ 120,00</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAE8E0",
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 15,
    },

    text: {
        fontSize: 15,
        margin: 10,
        textAlign: "center",
        color: "#333",
        margin: 30,
    },

    content: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        gap: 15,
        marginLeft: 10,
    },

    titleContent: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold",
    },

    textContent: {
        fontSize: 15,
        margin: 10,
    },

    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    texts:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: 10,
    },
});