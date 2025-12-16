import { StyleSheet } from 'react-native';

const NOTION = {
    background: '#FFFFFF',
    textSecondary: '#787774',
    accent: '#2383E2',
    border: '#E9E9E7',
};

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            paddingHorizontal: 16,
            paddingVertical: 16,
            backgroundColor: NOTION.background,
        },
        barsContainer: {
            flexDirection: 'row',
            gap: 8,
            marginBottom: 8,
        },
        bar: {
            flex: 1,
            height: 4,
            borderRadius: 2,
        },
        barFilled: {
            backgroundColor: NOTION.accent,
        },
        barEmpty: {
            backgroundColor: NOTION.border,
        },
        stepText: {
            fontSize: 14,
            color: NOTION.textSecondary,
            textAlign: 'center',
        },
    });
