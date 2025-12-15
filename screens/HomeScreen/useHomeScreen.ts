import { useState } from 'react';
import {
    mockGalleryItemsMovies,
    mockGalleryItemsShows,
    mockSpotlightContent,
} from '@/data/mockContentData';

type TabType = 'Home' | 'Discovery' | 'Portfolio';

export const useHomeScreen = () => {
    const [activeTab, setActiveTab] = useState<TabType>('Home');

    // Data - in the future this could come from an API
    const spotlightContent = mockSpotlightContent;
    const seriesItems = mockGalleryItemsShows;
    const movieItems = mockGalleryItemsMovies;

    return {
        // State
        activeTab,
        setActiveTab,

        // Data
        spotlightContent,
        seriesItems,
        movieItems,
    };
};
