import React from "react";
import { Image } from 'expo-image';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require("../img/logo.png")}/>
            <Text style={styles.title}>Conheça Capybara Shop! ✨</Text>
            <Text style={styles.text}>Capybara Shop é uma loja encantadora especializada na venda de pelúcias de capivara. Com produtos de alta qualidade e design adorável, a loja oferece uma experiência única para os amantes de capivaras e itens colecionáveis, as pelúcias do Capybara Shop são perfeitas para todas as idades! 🤍</Text>
            <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>🌐 www.capybarashop.com.br</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Text style={styles.menuText}>📲 @capybarashop</Text>
                    </TouchableOpacity>
        </View>
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
    },

    img: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },

    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#FFF",
        backgroundColor: "#FFF",
        margin: 5,
        borderRadius: 30,
        width: 300,
    },

    menuText: {
        fontSize: 16,
        color: "#333",
    },
});