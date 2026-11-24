import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  capturesSeulement: boolean;
  capturedCount: number;
  onToggleFilter: () => void;
  onReleaseAll: () => void;
};

export default function PokedexControls({
  capturesSeulement,
  capturedCount,
  onToggleFilter,
  onReleaseAll,
}: Props) {
  return (
    <View style={styles.controls}>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          capturesSeulement && styles.btnActive,
          pressed && styles.btnPressed,
        ]}
        onPress={onToggleFilter}
      >
        <Text style={[styles.btnText, capturesSeulement && styles.btnActiveText]}>
          {capturesSeulement ? "Tout afficher" : "Mes captures"}
        </Text>
      </Pressable>

      {capturedCount > 0 && (
        <Pressable
          style={({ pressed }) => [styles.btnRelease, pressed && styles.btnPressed]}
          onPress={onReleaseAll}
        >
          <Text style={styles.btnReleaseText}>Tout relâcher</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 8,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#CC0000",
    backgroundColor: "#fff",
  },
  btnActive: {
    backgroundColor: "#CC0000",
  },
  btnText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#CC0000",
  },
  btnActiveText: {
    color: "#fff",
  },
  btnRelease: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#888",
    backgroundColor: "#fff",
  },
  btnReleaseText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
  },
  btnPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.95 }],
  },
});
