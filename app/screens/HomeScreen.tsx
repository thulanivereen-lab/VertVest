import React from 'react';
import { ScrollView, View } from 'react-native';
import FloatingTabHeader from '../components/appHeader/floatingTabHeader';
import GalleryRow from '../components/home/GalleryRow/GalleryRow';
import SpotlightCard from '../components/home/SpotlightCard/SpotlightCard';
import { makeStyles } from './HomeScreen.styles';

const HomeScreen: React.FC = () => {
    const styles = makeStyles();
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }} style={styles.homeContainer}>
            <SpotlightCard />
            <View style={styles.floatingHeaderContainer}>
                <FloatingTabHeader activeTab="Home" setActiveTab={() => {}} />
            </View>
            <View style={styles.gallerySection}>
                <GalleryRow
                    title="Top 10 Series Today"
                    items={[
                        {
                        id: '1',
                        thumbnailUri: 'https://picsum.photos/id/1/480/720',
                        title: 'Eddington',
                        price: 3.99,
                        percentChange: 4.2,
                        },
                        {
                        id: '2',
                        thumbnailUri: 'https://picsum.photos/id/1/480/720',
                        title: 'Elf',
                        price: 2.49,
                        percentChange: -1.3,
                        },
                    ]}
                />
            </View>
            <View style={styles.gallerySection}>
                <GalleryRow
                    title="Top 10 Movies Today"
                    items={[
                        {
                        id: '1',
                        thumbnailUri: 'https://picsum.photos/id/1/480/720',
                        title: 'Eddington',
                        price: 3.99,
                        percentChange: 4.2,
                        },
                        {
                        id: '2',
                        thumbnailUri: 'https://picsum.photos/id/1/480/720',
                        title: 'Elf',
                        price: 2.49,
                        percentChange: -1.3,
                        },
                    ]}
                />
            </View>
        </ScrollView>

    )
};

export default HomeScreen;