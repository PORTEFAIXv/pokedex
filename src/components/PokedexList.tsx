import { FlatList, StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";
import PokedexHeader from "./PokedexHeader";
import PokedexEmpty from "./PokedexEmpty";

type Pokemon = { number: number; name: string; type: string };

type Props = {
  data: Pokemon[];
  captured: number[];
  capturesSeulement: boolean;
  total: number;
  onCapture: (number: number) => void;
  onToggleFilter: () => void;
  onReleaseAll: () => void;
};

export default function PokedexList({
  data,
  captured,
  capturesSeulement,
  total,
  onCapture,
  onToggleFilter,
  onReleaseAll,
}: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.number)}
      numColumns={2}
      extraData={captured}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <PokedexHeader
          total={total}
          capturedCount={captured.length}
          capturesSeulement={capturesSeulement}
          onToggleFilter={onToggleFilter}
          onReleaseAll={onReleaseAll}
        />
      }
      ListEmptyComponent={<PokedexEmpty />}
      renderItem={({ item }) => (
        <PokemonCard
          number={item.number}
          name={item.name}
          type={item.type}
          captured={captured.includes(item.number)}
          onCapture={() => onCapture(item.number)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 12,
  },
  row: {
    gap: 12,
  },
});
