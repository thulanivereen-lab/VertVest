import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";

import type { GalleryRowProps } from "./GalleryRow.types";

const CYAN = "#15E3FF";
const TOTHEMOON = "#15ff63ff";
const CYAN_DARK = "#0A1C24";

const GalleryRow: React.FC<GalleryRowProps> =  ({ title, items }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>{title}</Text>

      {/* Horizontal Row */}
      <FlatList
        horizontal
        data={items}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 24 }}
        renderItem={({ item, index }) => (
          <View style={styles.cardContainer}>
            {/* Number Badge */}
            <Text style={[styles.rankNumber, { left: index < 9 ? 6 : 0 }]}>
              {index + 1}
            </Text>

            {/* Image with Glow */}
            <View style={styles.imageWrapper}>
              <LinearGradient
                colors={["transparent", CYAN_DARK]}
                style={styles.imageGradient}
              />
              <Image source={{ uri: item.thumbnailUri }} style={styles.image} />
            </View>

            {/* Title */}
            <Text style={styles.titleText} numberOfLines={1}>
              {item.title}
            </Text>

            {/* Price + % Change */}
            <View style={styles.priceRow}>
              <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
              <Text
                style={[
                  styles.percentText,
                  { color: item.percentChange >= 0 ? TOTHEMOON : "#FF4A4A" },
                ]}
              >
                {item.percentChange >= 0 ? "+" : ""}
                {item.percentChange}%
              </Text>
            </View>

            {/* Watch Button */}
            <Pressable style={styles.watchButton}>
              <LinearGradient colors={[CYAN, "#007AFF"]} style={styles.watchGradient}>
                <Text style={styles.watchText}>Watch</Text>
              </LinearGradient>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  header: {
    color: "white",
    fontSize: 28,
    fontWeight: "800",
    marginLeft: 16,
    marginBottom: 14,
    textShadowColor: CYAN,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },

  cardContainer: {
    width: 160,
    marginLeft: 16,
    position: "relative",
  },

  rankNumber: {
    position: "absolute",
    top: -20,
    fontSize: 68,
    fontWeight: "900",
    color: "rgba(255, 255, 255, 0.72)",
    zIndex: 8,
  },

  imageWrapper: {
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 6,
    backgroundColor: CYAN_DARK,
  },

  imageGradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 14,
  },

  titleText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 2,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 6,
  },

  priceText: {
    color: "#D9D9D9",
    fontSize: 13,
  },

  percentText: {
    fontSize: 13,
    fontWeight: "700",
  },

  watchButton: {
    marginTop: 4,
  },

  watchGradient: {
    paddingVertical: 6,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  watchText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
});

export default GalleryRow;
