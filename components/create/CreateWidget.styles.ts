import { StyleSheet } from 'react-native';
import { NOTION } from '@/styles';

export const makeStyles = () =>
    StyleSheet.create({
        widget: {
            backgroundColor: NOTION.background,
            borderRadius: 8,
            padding: 20,
            borderWidth: 1,
            borderColor: NOTION.border,
            minHeight: 180,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 3,
            elevation: 1,
        },
        iconContainer: {
            width: 44,
            height: 44,
            borderRadius: 8,
            backgroundColor: NOTION.backgroundSecondary,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 14,
        },
        title: {
            color: NOTION.text,
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 6,
        },
        description: {
            color: NOTION.textSecondary,
            fontSize: 14,
            lineHeight: 20,
            marginBottom: 18,
        },
        button: {
            backgroundColor: NOTION.accent,
            borderRadius: 6,
            paddingVertical: 10,
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonPressed: {
            backgroundColor: NOTION.accentHover,
        },
        buttonText: {
            color: NOTION.white,
            fontSize: 14,
            fontWeight: '500',
        },
    });
