import { Text, StyleSheet } from "react-native";

export default function Titre({ children }) {
  return <Text style={styles.titre}>{children}</Text>;
}

const styles = StyleSheet.create({
  titre: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: "#CC0000",
  },
});
