import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

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
