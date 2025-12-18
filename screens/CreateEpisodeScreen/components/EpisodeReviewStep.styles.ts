import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: '700',
            color: NOTION.text,
            marginBottom: 4,
        },
        subtitle: {
            fontSize: 14,
            color: NOTION.textSecondary,
            marginBottom: 24,
        },
        field: {
            marginBottom: 16,
        },
        fieldLabel: {
            fontSize: 12,
            fontWeight: '500',
            color: NOTION.textSecondary,
            marginBottom: 4,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
        },
        fieldValue: {
            fontSize: 16,
            color: NOTION.text,
            lineHeight: 22,
        },
        mediaStatus: {
            flexDirection: 'row',
            gap: 24,
            marginTop: 8,
        },
        mediaItem: {
            flex: 1,
        },
        uploaded: {
            fontSize: 14,
            color: '#22C55E',
            fontWeight: '500',
        },
        notUploaded: {
            fontSize: 14,
            color: NOTION.textSecondary,
        },
    });
