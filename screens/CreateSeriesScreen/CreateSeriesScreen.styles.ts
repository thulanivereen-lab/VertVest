import { StyleSheet } from 'react-native';

const NOTION = {
    background: '#FFFFFF',
    backgroundSecondary: '#F7F6F3',
};

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: NOTION.background,
        },
        topSection: {
            // Fixed at top
        },
        scrollView: {
            flex: 1,
            backgroundColor: NOTION.backgroundSecondary,
        },
        scrollContent: {
            flexGrow: 1,
        },
        bottomSection: {
            // Fixed at bottom
        },
    });
