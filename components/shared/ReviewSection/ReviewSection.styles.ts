import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            backgroundColor: NOTION.backgroundSecondary,
            borderWidth: 1,
            borderColor: NOTION.border,
            borderRadius: 12,
            marginBottom: 16,
            overflow: 'hidden',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: NOTION.border,
            backgroundColor: NOTION.background,
        },
        title: {
            fontSize: 12,
            fontWeight: '600',
            color: NOTION.textSecondary,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
        },
        editButton: {
            paddingHorizontal: 8,
            paddingVertical: 4,
        },
        editButtonText: {
            fontSize: 14,
            fontWeight: '500',
            color: NOTION.accent,
        },
        content: {
            padding: 16,
        },
    });
