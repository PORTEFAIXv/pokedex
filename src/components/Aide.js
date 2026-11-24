import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function Aide() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => setIsClicked(!isClicked)}
            >
                <Text style={styles.buttonText}>{isClicked ? "Masquer l'aide" : "Afficher l'aide"}</Text>
            </Pressable>
            {isClicked && (
                <View style={styles.content}>
                    <Text style={styles.text}>
                        {"Bienvenue dans l'application Pokédex !\n\n"}
                        {"Cette application vous permet de découvrir les différents Pokémon et leurs caractéristiques. Vous pouvez naviguer à travers la liste des Pokémon, consulter leurs types, et voir leurs images officielles.\n\n"}
                        {"Pour utiliser l'application, il vous suffit de faire défiler la liste des Pokémon et de cliquer sur un Pokémon pour voir plus de détails à son sujet.\n\n"}
                        Amusez-vous bien !
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 16,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    content: {
        backgroundColor: "#F5F5F5",
        padding: 16,
        borderRadius: 8,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
    },
});