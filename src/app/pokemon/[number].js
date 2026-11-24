import { useState, useEffect } from "react";
import { View, Text, Image, Pressable, ActivityIndicator } from "react-native";
import { useRouter, Stack, useLocalSearchParams } from "expo-router";

const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites" +
    "/master/sprites/pokemon/other/official-artwork/";

export default function FichePokemon() {
    const router = useRouter();
    const { number } = useLocalSearchParams();

    const [pokemon, setPokemon] = useState(null);
    const [nomFr, setNomFr] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function chargerPokemon() {
            try {
                const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
                const data = await reponse.json();
                setPokemon(data);

                const reponseFr = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${number}`);
                const dataFr = await reponseFr.json();
                const nomFrTrouve = dataFr.names.find((n) => n.language.name === "fr")?.name;
                setNomFr(nomFrTrouve);
            } catch (error) {
                console.error("Erreur lors du chargement du Pokémon :", error);
            } finally {
                setLoading(false);
            }
        }

        chargerPokemon();
    }, [number]);

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Stack.Screen options={{ title: "Pokémon" }} />
                <ActivityIndicator size="large" color="#E63F34" />
                <Text style={{ marginTop: 12, color: "#666" }}>Chargement…</Text>
            </View>
        );
    }

    const afficherNom = nomFr || pokemon?.name || "Pokémon";

    return (
        <View style={{ flex: 1, alignItems: "center", padding: 24 }}>
            <Pressable onPress={() => router.dismiss(1)}>
                <Text style={{ fontSize: 18, color: "#000000" }}>{"< Pokedex"}</Text>
            </Pressable>
            <Stack.Screen options={{ title: afficherNom }} />
            <Image
                source={{ uri: `${ARTWORK}${number}.png` }}
                style={{ width: 200, height: 200 }}
            />
            <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 12 }}>
                {afficherNom}
            </Text>
            <Text style={{ fontSize: 18, color: "#666" }}>
                #{number}
            </Text>
            <Text style={{ fontSize: 16, color: "#888", marginTop: 8 }}>
                Type : {pokemon?.types[0]?.type?.name}
            </Text>
            <Text style={{ fontSize: 16, color: "#888" }}>
                Taille : {pokemon?.height / 10} m
            </Text>
            <Text style={{ fontSize: 16, color: "#888" }}>
                Poids : {pokemon?.weight / 10} kg
            </Text>
        </View>
    );
}