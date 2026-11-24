import { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import PokedexList from "../../components/PokedexList";

const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

const TYPE_FR: Record<string, string> = {
  grass: "Plante",
  fire: "Feu",
  water: "Eau",
  electric: "Électrik",
  normal: "Normal",
  poison: "Poison",
  fighting: "Combat",
  flying: "Vol",
  psychic: "Psy",
  bug: "Insecte",
  rock: "Roche",
  ghost: "Spectre",
  dragon: "Dragon",
  ice: "Glace",
  ground: "Sol",
  steel: "Acier",
  dark: "Ténèbres",
  fairy: "Fée",
};

type Pokemon = { number: number; name: string; type: string };

export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [captured, setCaptured] = useState<number[]>([]);
  const [capturesSeulement, setCapturesSeulement] = useState(false);

  async function charger() {
    const reponse = await fetch(API);
    const data = await reponse.json();
    const results: { name: string; url: string }[] = data.results;

    const details = await Promise.all(
      results.map((p) => fetch(p.url).then((r) => r.json()))
    );

    const liste: Pokemon[] = details.map((pokemon, i) => ({
      number: i + 1,
      name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
      type: TYPE_FR[pokemon.types[0].type.name] ?? pokemon.types[0].type.name,
    }));
    setPokemons(liste);
  }

  useEffect(() => {
    charger();
  }, []);

  if (pokemons === null) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#CC0000" />
      </View>
    );
  }

  const visibles = capturesSeulement ? pokemons.filter((p) => captured.includes(p.number)) : pokemons;

  function handleCapture(number: number) {
    setCaptured((prev) =>
      prev.includes(number) ? prev.filter((n) => n !== number) : [...prev, number]
    );
  }

  function handleReleaseAll() {
    setCaptured([]);
    setCapturesSeulement(false);
  }

  return (
    <View style={styles.container}>
      <PokedexList
        data={visibles}
        captured={captured}
        capturesSeulement={capturesSeulement}
        total={pokemons.length}
        onCapture={handleCapture}
        onToggleFilter={() => setCapturesSeulement((v) => !v)}
        onReleaseAll={handleReleaseAll}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
