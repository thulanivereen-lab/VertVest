import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = () =>
    StyleSheet.create({
        container: {
            marginBottom: 16,
        },
        title: {
            fontSize: 14,
            fontWeight: '500',
            color: NOTION.text,
            marginBottom: 8,
        },
        uploadBox: {
            backgroundColor: NOTION.backgroundSecondary,
            borderWidth: 2,
            borderColor: NOTION.border,
            borderStyle: 'dashed',
            borderRadius: 8,
            paddingVertical: 40,
            paddingHorizontal: 24,
            alignItems: 'center',
            justifyContent: 'center',
        },
        uploadBoxDisabled: {
            opacity: 0.5,
        },
        iconContainer: {
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: NOTION.background,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12,
        },
        description: {
            fontSize: 14,
            color: NOTION.textSecondary,
            textAlign: 'center',
        },
    });
