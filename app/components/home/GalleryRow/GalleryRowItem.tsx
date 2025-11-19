import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { CYAN, CYAN_DARK, TOTHEMOON } from "../../../appThemes/colors";
import { makeStyles } from "./GalleryRow.styles";
import { GalleryRowItemProps } from "./GalleryRow.types";



const GalleryRowItem: React.FC<GalleryRowItemProps> = ({item, index} ) => {
    const styles = makeStyles();
    return (
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

    )
};

export default GalleryRowItem;