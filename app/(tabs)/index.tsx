import { IconSymbol } from '@/app/components/ui/icon-symbol';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FloatingTabHeader from '../components/appHeader/floatingTabHeader';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('HBO');

  return (
    <View style={styles.container}>
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

      {/* Floating tab header absolutely positioned over hero image */}
      <View style={styles.floatingHeader}>
        <FloatingTabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  heroImage: {
    width: '100%',
    height: 500,
    justifyContent: 'flex-end',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
  },
  floatingHeader: {
    position: 'absolute',
    top: 60, // adjust for safe area
    left: 0,
    right: 0,
  },
  heroContent: {
    paddingHorizontal: 16,
    marginTop: -50, // pulls the content up into the faded zone
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    marginTop: 6,
  },
  meta: {
    color: '#999',
    marginTop: 4,
  },
  description: {
    color: '#aaa',
    marginTop: 12,
  },
  ctaRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  watchButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  watchText: {
    color: '#000',
    fontWeight: '600',
  },
  investButton: {
    backgroundColor: '#222',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#444',
    flexDirection: 'row',
    alignItems: 'center',
  },
  investText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
});
