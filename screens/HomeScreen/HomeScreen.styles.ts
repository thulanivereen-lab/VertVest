import { StyleSheet } from 'react-native';

export const makeStyles = () =>
    StyleSheet.create({
        homeContainer: {
            flex: 1,
            backgroundColor: '#000',
        },
        floatingHeaderContainer: {
            position: 'absolute',
            top: 60, // adjust for safe area
            left: 0,
            right: 0,
        },
        gallerySection: {
            marginTop: 24,
        },
    });
