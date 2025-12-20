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
        cmsPlaceholder: {
            marginTop: 24,
            padding: 24,
            backgroundColor: NOTION.backgroundSecondary,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderStyle: 'dashed',
            alignItems: 'center',
        },
        cmsPlaceholderTitle: {
            fontSize: 16,
            fontWeight: '600',
            color: NOTION.text,
            marginBottom: 8,
        },
        cmsPlaceholderHint: {
            fontSize: 14,
            color: NOTION.textSecondary,
            textAlign: 'center',
        },
    });
