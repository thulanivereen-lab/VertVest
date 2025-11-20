import FloatingTabHeader from '@/components/appHeader/floatingTabHeader';
import GalleryRow from '@/components/home/GalleryRow/GalleryRow';
import SpotlightCard from '@/components/home/SpotlightCard/SpotlightCard';
import { mockGalleryItemsMovies, mockGalleryItemsShows, mockSpotlightContent } from '@/data/mockContentData';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { makeStyles } from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
    const styles = makeStyles();
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }} style={styles.homeContainer}>
            <SpotlightCard data={mockSpotlightContent} />
            <View style={styles.floatingHeaderContainer}>
                <FloatingTabHeader activeTab="Home" setActiveTab={() => {}} />
            </View>
            <View style={styles.gallerySection}>
                <GalleryRow
                    title="Top 10 Series Today"
                    items={mockGalleryItemsShows}
                />
            </View>
            <View style={styles.gallerySection}>
                <GalleryRow
                    title="Top 10 Movies Today"
                    items={mockGalleryItemsMovies}
                />
            </View>
        </ScrollView>

    )
};

export default HomeScreen;