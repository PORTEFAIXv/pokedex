import { StyleSheet, Text, View, Image } from "react-native";

const MON_PRENOM = "Valentin";
const MON_POKEMON_PREFERE = "Dracaufeu";
const MON_POKEMON_NUMBER = 6;

export default function Profil() {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${MON_POKEMON_NUMBER}.png`;

  return (
    <View style={styles.container}>
      <Text style={styles.prenom}>{MON_PRENOM}</Text>
      <Text style={styles.label}>Mon Pokémon préféré :</Text>
      <Text style={styles.pokemon}>{MON_POKEMON_PREFERE}</Text>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  prenom: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#CC0000",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  pokemon: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 24,
  },
  image: {
    width: 200,
    height: 200,
  },
});
