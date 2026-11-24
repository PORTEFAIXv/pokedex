import { StyleSheet, Text, View } from "react-native";

export default function PokedexEmpty() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"Vous n'avez encore rien capturé"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
});
