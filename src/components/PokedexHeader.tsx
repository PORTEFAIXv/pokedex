import { StyleSheet, Text, View } from "react-native";
import Titre from "./Titre";
import PokedexControls from "./PokedexControls";

type Props = {
  total: number;
  capturedCount: number;
  capturesSeulement: boolean;
  onToggleFilter: () => void;
  onReleaseAll: () => void;
};

export default function PokedexHeader({
  total,
  capturedCount,
  capturesSeulement,
  onToggleFilter,
  onReleaseAll,
}: Props) {
  return (
    <View style={styles.header}>
      <Titre>Mon Pokédex</Titre>
      <Text style={styles.count}>
        {total} Pokémon · {capturedCount} capturé{capturedCount !== 1 ? "s" : ""}
      </Text>
      <PokedexControls
        capturesSeulement={capturesSeulement}
        capturedCount={capturedCount}
        onToggleFilter={onToggleFilter}
        onReleaseAll={onReleaseAll}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  count: {
    textAlign: "center",
    fontSize: 15,
    color: "#555",
    marginBottom: 12,
  },
});
