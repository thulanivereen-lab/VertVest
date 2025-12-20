import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
        },
        title: {
            fontSize: 24,
            fontWeight: '700',
            color: NOTION.text,
            marginBottom: 24,
        },
        row: {
            backgroundColor: NOTION.background,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderRadius: 8,
            padding: 16,
            marginBottom: 12,
        },
        rowSelected: {
            borderColor: NOTION.accent,
            backgroundColor: '#F0F7FF',
        },
        rowTitle: {
            fontSize: 16,
            fontWeight: '600',
            color: NOTION.text,
            marginBottom: 4,
        },
        rowTitleSelected: {
            color: NOTION.accent,
        },
        rowDescription: {
            fontSize: 14,
            color: NOTION.textSecondary,
            lineHeight: 20,
        },
    });
