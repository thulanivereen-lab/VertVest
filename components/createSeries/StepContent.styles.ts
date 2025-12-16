import { StyleSheet } from 'react-native';

const NOTION = {
    text: '#37352F',
    textSecondary: '#787774',
    backgroundSecondary: '#F7F6F3',
    border: '#E9E9E7',
};

export const makeStyles = () =>
    StyleSheet.create({
        stepContainer: {
            flex: 1,
            padding: 20,
        },
        placeholderTitle: {
            fontSize: 24,
            fontWeight: '700',
            color: NOTION.text,
            marginBottom: 12,
        },
        placeholderText: {
            fontSize: 16,
            color: NOTION.textSecondary,
            lineHeight: 24,
            marginBottom: 24,
        },
        placeholderBox: {
            backgroundColor: NOTION.backgroundSecondary,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderStyle: 'dashed',
            padding: 40,
            alignItems: 'center',
            justifyContent: 'center',
        },
        placeholderBoxText: {
            fontSize: 14,
            color: NOTION.textSecondary,
            textAlign: 'center',
        },
    });
