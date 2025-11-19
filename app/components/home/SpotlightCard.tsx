import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import MainInvestButton from '../invest/mainInvestButton';
import MainWatchButton from '../watch/mainWatchButton';
import { makeStyles } from './SpotlightCard.styles';
import type { SpotlightCardProps } from './SpotlightCard.types';

const SpotlightCard: React.FC<SpotlightCardProps> = ({ data = {}, onWatch, onInvest, testID }) => {
    const styles = makeStyles();
    const {
      imageUri = 'https://picsum.photos/200/300',
      title = "It’s Florida, Man.",
      subtitle = "Season 2 Premieres November 28",
      meta = "TV-MA • 1 Season",
      description = "All the gators, all the glory. Catch up before the madness multiplies.",
    } = data;
    return (
        <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
              >
                {/* Spotlight image */}
                <ImageBackground
                  source={{ uri: imageUri }}
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
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.subtitle}>{subtitle}</Text>
                  <Text style={styles.meta}>{meta}</Text>
                  <Text style={styles.description}>
                    {description}
                  </Text>
        
                  <View style={styles.ctaRow} testID={testID}>
                    <MainWatchButton onPress={onWatch} />
                    <MainInvestButton onPress={onInvest} />
                  </View>
                </View>
              </ScrollView>
    )
}

export default SpotlightCard;