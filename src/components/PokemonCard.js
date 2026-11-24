import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import TypeBadge from "./TypeBadge";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS = {
  Plante: "#78C850",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
  Normal: "#A8A878",
  Poison: "#A040A0",
  Combat: "#C03028",
  Vol: "#A890F0",
  Psy: "#F85888",
  Insecte: "#A8B820",
  Roche: "#B8A038",
  Spectre: "#705898",
};

export default function PokemonCard({ number, name, type, captured, onCapture }) {
  const router = useRouter();
  const bgColor = TYPE_COLORS[type] ? `${TYPE_COLORS[type]}33` : "#f5f5f5";
  const capturedBorder = TYPE_COLORS[type] ?? "#CC0000";

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: bgColor },
        captured && { borderColor: capturedBorder, borderWidth: 2 },
      ]}
    >
      <Pressable onPress={() => router.push(`/pokemon/${number}`)}>
      <Image
        source={{ uri: `${ARTWORK}${number}.png` }}
        style={styles.image}
      />
      <Text style={styles.number}>#{number}</Text>
      <Text style={styles.name}>{name}</Text>
      <TypeBadge type={type} />
      <Pressable
        style={({ pressed }) => [
          styles.captureBtn,
          captured && styles.captureBtnActive,
          pressed && { opacity: 0.7 },
        ]}
        onPress={onCapture}
      >
        <Text
          style={[styles.captureBtnText, captured && styles.captureBtnTextActive]}
        >
          {captured ? "Capturé" : "Capturer"}
        </Text>
      </Pressable>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    gap: 4,
  },
  image: {
    width: 90,
    height: 90,
  },
  number: {
    fontSize: 12,
    color: "#666",
    fontWeight: "600",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1a1a1a",
    textAlign: "center",
  },
  captureBtn: {
    marginTop: 6,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#CC0000",
    backgroundColor: "#fff",
  },
  captureBtnActive: {
    backgroundColor: "#CC0000",
  },
  captureBtnText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#CC0000",
  },
  captureBtnTextActive: {
    color: "#fff",
  },
});
