import { IconSymbol } from '@/app/components/ui/icon-symbol';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { makeStyles } from './SpotlightShow.styles';

const SpotlightShow: React.FC = () => {
    const styles = makeStyles();
    return (
        <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
              >
                {/* Spotlight image */}
                <ImageBackground
                  source={{ uri: 'https://picsum.photos/200/300' }}
                  style={styles.heroImage}
                  resizeMode="cover"
                >
                  {/* Gradient fade */}
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)', '#000']}
                    style={styles.gradient}
                  />
                </ImageBackground>
        
                {/* Spotlight metadata */}
                <View style={styles.heroContent}>
                  <Text style={styles.title}>It’s Florida, Man.</Text>
                  <Text style={styles.subtitle}>Season 2 Premieres November 28</Text>
                  <Text style={styles.meta}>TV-MA • 1 Season</Text>
                  <Text style={styles.description}>
                    All the gators, all the glory. Catch up before the madness multiplies.
                  </Text>
        
                  <View style={styles.ctaRow}>
                    <TouchableOpacity style={styles.watchButton}>
                      <Text style={styles.watchText}>Watch Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.investButton}>
                      <IconSymbol size={16} color="#808080" name="arrow.up.right" />
                      <Text style={styles.investText}>Invest $4.50</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
    )
}

export default SpotlightShow;