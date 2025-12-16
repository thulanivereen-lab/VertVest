import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

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
