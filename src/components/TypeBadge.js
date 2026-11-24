import { Text, StyleSheet, View } from "react-native";

const TYPE_COLORS = {
  Plante: "#78C850",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
  Normal: "#A8A878",
  Poison: "#A040A0",
  Vol: "#A890F0",
  Insecte: "#A8B820",
  Roche: "#B8A038",
};

export default function TypeBadge({ type }) {
  const backgroundColor = TYPE_COLORS[type] ?? "#888";
  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
});
