import { CYAN, CYAN_DARK } from "@/appThemes/colors";
import { StyleSheet } from "react-native";

export const makeStyles = () => 
    StyleSheet.create({
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
          galleryRowContainer: {
                marginBottom: 40,
            },
          galleryRowHeader: {
            color: "white",
            fontSize: 28,
            fontWeight: "800",
            marginLeft: 16,
            marginBottom: 14,
            textShadowColor: CYAN,
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 8,
            },
    });