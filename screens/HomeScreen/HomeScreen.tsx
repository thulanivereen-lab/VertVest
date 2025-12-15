import React from 'react';
import { ScrollView, View } from 'react-native';

import FloatingTabHeader from '@/components/appHeader/floatingTabHeader';
import GalleryRow from '@/components/home/GalleryRow/GalleryRow';
import SpotlightCard from '@/components/home/SpotlightCard/SpotlightCard';

import { makeStyles } from './HomeScreen.styles';
import { useHomeScreen } from './useHomeScreen';

const HomeScreen: React.FC = () => {
    const styles = makeStyles();
    const {
        activeTab,
        setActiveTab,
        spotlightContent,
        seriesItems,
        movieItems,
    } = useHomeScreen();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 80 }}
            style={styles.homeContainer}
        >
            <SpotlightCard data={spotlightContent} />
            <View style={styles.floatingHeaderContainer}>
                <FloatingTabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>
            <View style={styles.gallerySection}>
                <GalleryRow
                    title="Top 10 Series Today"
                    items={seriesItems}
                />
            </View>
            <View style={styles.gallerySection}>
                <GalleryRow
                    title="Top 10 Movies Today"
                    items={movieItems}
                />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
