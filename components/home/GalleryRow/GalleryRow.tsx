import React from "react";
import { FlatList, Text, View } from "react-native";
import { makeStyles } from "./GalleryRow.styles";
import GalleryRowItem from "./GalleryRowItem";

import type { GalleryRowProps } from "./GalleryRow.types";

const GalleryRow: React.FC<GalleryRowProps> =  ({ title, items }) => {
    const styles = makeStyles();
  return (
    <View style={styles.galleryRowContainer}>
      <Text style={styles.galleryRowHeader}>{title}</Text>

      <FlatList
        horizontal
        nestedScrollEnabled={true}
        data={items}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        contentContainerStyle={{ paddingRight: 24 }}
        renderItem={({ item, index }) => (
            <GalleryRowItem item={item} index={index} />
        )}
      />
    </View>
  );
}

export default GalleryRow;
